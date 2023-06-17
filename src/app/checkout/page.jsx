import ProductTable from "@/components/ProductTable";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div>
      <Link href="/" className="btn btn-primary">
        Go back
      </Link>

      <h1>Checkout</h1>

      <ProductTable />
    </div>
  );
}
