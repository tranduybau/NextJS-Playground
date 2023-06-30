import Form from "@/components/Form";
import RefForm from "@/components/RefForm";

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-5">
        Ref Form
      </h1>

      <RefForm />

      <h1 className="text-center mt-5">
        Form
      </h1>

      <Form />
    </main>
  )
}
