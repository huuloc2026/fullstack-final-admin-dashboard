import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/modules/user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService,
    
    private prisma: PrismaService
  ) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'),{
        apiVersion: "2025-02-24.acacia"
    }
    );
  }

  async createCustomer( userId: string, email: string ) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundException("User not found");
  
    if (user.stripeCustomerId) return { customerId: user.stripeCustomerId };
    const customer = await this.stripe.customers.create({ email });
    // update User
    await this.prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId: customer.id },
      });
    
    return { stripeCustomerId: customer.id };
  }

  async getStripeCustomerId(id:string){
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException("User not found");
  
    return { customerId: user.stripeCustomerId };
  }

  async attachPaymentMethod(userId: string, paymentMethodId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
  
    if (!user) throw new NotFoundException("User not found");
  
    if (!user.stripeCustomerId) throw new NotFoundException("User has no Stripe customer ID");
  
    // Attach Payment Method to Customer
    await this.stripe.paymentMethods.attach(paymentMethodId, {
      customer: user.stripeCustomerId,
    });
  
    // Set default Payment Method for the Customer
    await this.stripe.customers.update(user.stripeCustomerId, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });
  
    return { message: "Payment method attached successfully" };
  }

  async getCustomer(customerId: string) {
    const customer = await this.stripe.customers.retrieve(customerId);

    if (!customer || !(customer as Stripe.Customer).invoice_settings?.default_payment_method) {
      throw new ForbiddenException("Customer has no default payment method");
    }
    return customer
  }
  

  async createSubscription(userId: string, priceId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
  
    if (!user) throw new NotFoundException("User not found");
    const customer = await this.stripe.customers.retrieve(user.stripeCustomerId);

    if (!customer || !(customer as Stripe.Customer).invoice_settings?.default_payment_method) {
      throw new ForbiddenException("Customer has no default payment method");
    }

    let subscription = await this.prisma.subscription.findUnique({
      where: { userId },
    });
  
    if (subscription) throw new ForbiddenException("User already has a subscription");
    
    const stripeCustomer = await this.getStripeCustomerId(userId)
  
    const stripeSubscription = await this.stripe.subscriptions.create({
      customer: stripeCustomer.customerId,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
    });
  
    subscription = await this.prisma.subscription.create({
      data: {
        userId,
        stripeCustomerId: stripeCustomer.customerId,
        stripeSubscriptionId: stripeSubscription.id,
        priceId,
        status: "ACTIVE",
      },
    });
  
    return subscription;
  }
  

  async cancelSubscription(subscriptionId: string) {
    return await this.stripe.subscriptions.cancel(subscriptionId);
  }

  constructWebhookEvent(body: Buffer, sig: string, secret: string) {
    return this.stripe.webhooks.constructEvent(body, sig, secret);
  }
}
