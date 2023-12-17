import CartForm from "@/components/CartForm";
import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/ProductTable";
import getListProducts from "@/services/getListProducts";
import Link from "next/link";

export default async function Home() {
  const projects = await getListProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          {projects.map((item) => (
            <ProductCard key={item._id} data={item} />
          ))}
        </div>
      </div>

      <CartForm />

      <ProductTable />

      <Link href="/checkout" className="btn btn-primary mt-5">
        Checkout
      </Link>

      <Link href="/sign-in" className="btn btn-primary mt-5">
        Sign In
      </Link>
    </main>
  );
}
