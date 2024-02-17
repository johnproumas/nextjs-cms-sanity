import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const SuccessOrder = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base font-semibold text-center">
            Payment Done!
          </h3>
          <p className="my-2">Thank you for you purchase!</p>
          <p className="my-2">We hope you enjoy it</p>

          <Button
            asChild
            className="mt-5"
          >
            <Link href="/">Visit Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;
