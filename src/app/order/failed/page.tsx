import { Button } from "@/components/ui/button";
import Link from "next/link";

const FailedOrder = () => {
  return (
    <section className="flex flex-col justify-center items-center h-96 w-full p-2">
      <h2 className="mb-4">Oops! Something went wrong with your order</h2>
      <Link href={"/"}>
        <Button>Back to Homepage</Button>
      </Link>
    </section>
  );
};

export default FailedOrder;
