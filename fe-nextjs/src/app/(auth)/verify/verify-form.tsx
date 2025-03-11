"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { apiRequest } from "@/utils/apiRequest";

// Schema xác thực OTP (chỉ chứa 6 chữ số)
const FormSchema = z.object({
  code: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits" })
    .regex(/^\d+$/, {
      message: "OTP must contain only numbers",
    }),
});

export default function OTPPreview() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { code: "" },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      const data = {
        email: "qehypyby@mailinator.com",
        verifyCode: values.code,
      };
      const result = await apiRequest("/auth/verify", "POST", data);
      toast.success("verify successful!");
      return result;
      //   console.log("Success:", result);
    } catch (error) {
      let errorMessage = "Failed to submit the form.";

      if (error instanceof Error) {
        // Standard JS Error object
        errorMessage = error.message;
      } else if (typeof error === "object" && error !== null) {
        // Handle API errors from response objects
        errorMessage =
          (error as any)?.response?.data?.message ||
          (error as any)?.message ||
          errorMessage;
      }

      toast.error(errorMessage);
      //   console.error("API Error:", error);
    }
  }

  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Account</CardTitle>
          <CardDescription>
            Enter the 6-digit OTP sent to your phone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password (OTP)</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        pattern="\d*"
                        autoFocus
                        {...field}
                      >
                        <InputOTPGroup>
                          {[...Array(6)].map((_, index) => (
                            <InputOTPSlot key={index} index={index} />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Check your messages for the OTP code.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
