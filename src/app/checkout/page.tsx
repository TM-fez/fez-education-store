"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, UploadCloud, Info } from "lucide-react";
import { getProductBySlug } from "@/lib/data"; // Using mock data for UI for now
import { submitOrder } from "./actions";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  // Temporary: we'll match id for now, though getProductBySlug expects slug. 
  // Let's assume the parameter is 'product=p1'
  const product = [
    { id: "p1", title: "Advanced Business Writing", price: 450 },
    { id: "p2", title: "Corporate Project Management", price: 600 }
  ].find(p => p.id === productId) || { id: "p1", title: "Advanced Business Writing & Communication", price: 450 };

  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");

  return (
    <div className="flex-1 bg-[var(--background)] py-12">
      <div className="mx-auto max-w-3xl px-6">
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-[var(--foreground)]">
          Secure Checkout
        </h1>

        <div className="grid gap-8">
          {/* Order Summary */}
          <div className="glass rounded-2xl p-6 border-[var(--border)]">
            <h2 className="text-xl font-heading font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center py-3 border-b border-[var(--border)]/50">
              <span className="font-medium text-[var(--foreground)]/80">{product.title}</span>
              <span className="font-semibold text-[var(--foreground)]">P{product.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-3 mt-2">
              <span className="font-bold text-lg">Total Due</span>
              <span className="font-bold text-2xl text-[var(--color-brand-500)]">P{product.price.toFixed(2)}</span>
            </div>
          </div>

          <form action={submitOrder} className="space-y-8">
            <input type="hidden" name="productId" value={product.id} />
            <input type="hidden" name="price" value={product.price} />

            {/* Payment Method Selection */}
            <div className="glass rounded-2xl p-6 border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-4">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col gap-2 transition-all ${paymentMethod === 'bank_transfer' ? 'border-[var(--color-brand-500)] bg-[var(--color-brand-500)]/5' : 'border-[var(--border)] hover:border-[var(--foreground)]/30'}`}>
                  <input type="radio" name="paymentMethod" value="bank_transfer" className="sr-only" checked={paymentMethod === 'bank_transfer'} onChange={() => setPaymentMethod('bank_transfer')} />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Bank Transfer</span>
                    {paymentMethod === 'bank_transfer' && <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-500)]" />}
                  </div>
                  <span className="text-xs text-[var(--foreground)]/60">FNB, Absa, Stanbic</span>
                </label>

                <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col gap-2 transition-all ${paymentMethod === 'orange_money' ? 'border-[#FF7900]' : 'border-[var(--border)] hover:border-[var(--foreground)]/30'}`} style={paymentMethod === 'orange_money' ? { backgroundColor: 'rgba(255, 121, 0, 0.05)' } : {}}>
                  <input type="radio" name="paymentMethod" value="orange_money" className="sr-only" checked={paymentMethod === 'orange_money'} onChange={() => setPaymentMethod('orange_money')} />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Orange Money</span>
                    {paymentMethod === 'orange_money' && <CheckCircle2 className="w-5 h-5 text-[#FF7900]" />}
                  </div>
                  <span className="text-xs text-[var(--foreground)]/60">Mobile payment</span>
                </label>
              </div>

              {/* Dynamic Instructions */}
              <div className="mt-6 p-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--border)]">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[var(--color-brand-500)] shrink-0 mt-0.5" />
                  {paymentMethod === 'bank_transfer' ? (
                    <div className="text-sm text-[var(--foreground)]/80 space-y-2">
                      <p>Please transfer exactly <strong>P{product.price.toFixed(2)}</strong> to the following account:</p>
                      <ul className="font-mono bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--border)]">
                        <li>Bank: First National Bank (FNB)</li>
                        <li>Account Name: Fez Education</li>
                        <li>Account Number: 62000000000</li>
                        <li>Branch Code: 281467</li>
                      </ul>
                      <p className="text-xs text-[var(--foreground)]/60">Use your email address as the payment reference.</p>
                    </div>
                  ) : (
                    <div className="text-sm text-[var(--foreground)]/80 space-y-2">
                      <p>Please send exactly <strong>P{product.price.toFixed(2)}</strong> via Orange Money to:</p>
                      <ul className="font-mono bg-[var(--background)]/50 p-3 rounded-lg border border-[var(--border)]">
                        <li>Merchant Code: 12345</li>
                        <li>Number: 72000000</li>
                      </ul>
                      <p className="text-xs text-[var(--foreground)]/60">Take a screenshot of the confirmation SMS.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proof Upload */}
            <div className="glass rounded-2xl p-6 border-[var(--border)]">
              <h2 className="text-xl font-heading font-semibold mb-4">Upload Payment Proof</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)]/80 mb-2" htmlFor="senderName">
                    Sender Name / Account Name
                  </label>
                  <input 
                    id="senderName" 
                    name="senderName" 
                    type="text" 
                    required 
                    placeholder="Name used for the transfer"
                    className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)]/80 mb-2">
                    Proof Screenshot / PDF
                  </label>
                  <div className="mt-2 flex justify-center rounded-xl border border-dashed border-[var(--border)] px-6 py-10 hover:bg-[var(--foreground)]/5 transition-colors group cursor-pointer relative">
                    <input type="file" name="proofFile" accept="image/*,.pdf" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-[var(--foreground)]/30 group-hover:text-[var(--color-brand-500)] transition-colors" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-[var(--foreground)]/60 justify-center">
                        <span className="relative font-semibold text-[var(--color-brand-500)] focus-within:outline-none hover:text-[var(--color-brand-400)]">
                          Upload a file
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-[var(--foreground)]/40 mt-2">PNG, JPG, PDF up to 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Submit Order for Verification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
