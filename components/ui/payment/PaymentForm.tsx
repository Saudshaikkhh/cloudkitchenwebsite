"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Calendar, Lock } from "lucide-react";

const paymentSchema = z.object({
  cardName: z.string().min(3, "Name is required"),
  cardNumber: z.string().min(16, "Valid card number required").max(19),
  expiry: z.string().min(5, "Valid expiry date required (MM/YY)"),
  cvv: z.string().min(3, "Valid CVV required").max(4)
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

export default function PaymentForm() {
  const { setCheckoutState, totalPrice } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema)
  });

  const onSubmit = (data: PaymentFormValues) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutState("confirmation");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="ghost" 
          onClick={() => setCheckoutState("cart")}
          className="flex items-center gap-2 text-gray-600"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Button>
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-xl font-semibold">₹{totalPrice.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="border rounded-lg p-4 bg-gray-50">
        <h3 className="text-lg font-medium mb-4">Payment Information</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input
              id="cardName"
              placeholder="Name as it appears on card"
              {...register("cardName")}
              className={errors.cardName ? "border-red-500" : ""}
            />
            {errors.cardName && (
              <p className="text-sm text-red-500">{errors.cardName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <div className="relative">
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                {...register("cardNumber")}
                className={`pl-10 ${errors.cardNumber ? "border-red-500" : ""}`}
              />
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
            {errors.cardNumber && (
              <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <div className="relative">
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  {...register("expiry")}
                  className={`pl-10 ${errors.expiry ? "border-red-500" : ""}`}
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              {errors.expiry && (
                <p className="text-sm text-red-500">{errors.expiry.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <div className="relative">
                <Input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  {...register("cvv")}
                  className={`pl-10 ${errors.cvv ? "border-red-500" : ""}`}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              {errors.cvv && (
                <p className="text-sm text-red-500">{errors.cvv.message}</p>
              )}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#6b8f71] hover:bg-[#3a4a3f] mt-6"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing Payment..." : "Complete Payment"}
          </Button>
        </form>
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
        <p className="text-sm text-gray-500">
          This is a demo application. No real payments will be processed, and no card details will be stored.
        </p>
      </div>
    </div>
  );
}