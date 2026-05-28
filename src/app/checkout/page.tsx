export const dynamic = "force-dynamic";

import { CheckoutClient } from "./checkout-client";

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const resolvedParams = await searchParams;
  const productId = resolvedParams.product;
  
  // Temporary: we'll match id for now
  const product = [
    { id: "p1", title: "Advanced Business Writing", price: 450 },
    { id: "p2", title: "Corporate Project Management", price: 600 }
  ].find(p => p.id === productId) || { id: "p1", title: "Advanced Business Writing & Communication", price: 450 };

  return <CheckoutClient product={product} />;
}
