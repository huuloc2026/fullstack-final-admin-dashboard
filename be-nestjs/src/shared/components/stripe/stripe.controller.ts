import {
  Controller,
  Post,
  Body,
  Headers,
  BadRequestException,
  Get,
  UseGuards,
  Req,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { AtGuard } from 'src/shared/guard';
import { Request } from 'express';
UseGuards(AtGuard);
@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService,
  ) {}

  @Get('customer/:customerId')
  async getCustomer(@Param('customerId') customerId: string) {
    const customer = await this.stripeService.getCustomer(customerId);
    return customer;
  }

  @Post('create-customer')
  async createCustomer(@Req() req: Request) {
    const { sub, email } = req.user;
    return this.stripeService.createCustomer(sub, email);
  }

  @Post('create-subscription')
  async createSubscription(
    @Req() req: Request,
    @Body() body: { priceId: string },
  ) {
    const { sub, email } = req.user;
    return this.stripeService.createSubscription(sub, body.priceId);
  }

  @Post('attach-payment-method')
  async attachPaymentMethod(
    @Req() req: Request,
    @Body() body: { paymentMethodId: string },
  ) {
    const { sub, email } = req.user;
    const { paymentMethodId } = body;
    return this.stripeService.attachPaymentMethod(sub, paymentMethodId);
  }

  @Post('cancel-subscription')
  async cancelSubscription(@Body() body: { subscriptionId: string }) {
    return this.stripeService.cancelSubscription(body.subscriptionId);
  }

  @Post('webhook')
  async handleWebhook(
    @Body() body: any,
    @Headers('stripe-signature') sig: string,
  ) {
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );

    let event: Stripe.Event;
    try {
      event = this.stripeService.constructWebhookEvent(
        body,
        sig,
        endpointSecret,
      );
    } catch (err) {
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'invoice.payment_succeeded':
        console.log('✅ Subscription renewed:', event.data.object);
        break;
      case 'customer.subscription.deleted':
        console.log('⚠️ Subscription canceled:', event.data.object);
        break;
    }

    return { received: true };
  }
}
