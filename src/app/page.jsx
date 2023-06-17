import CartForm from "@/components/CartForm";
import ProductTable from "@/components/ProductTable";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CartForm />

      <ProductTable />

      <Link href="/checkout" className="btn btn-primary mt-5">
        Checkout
      </Link>
    </main>
  );
}
