import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center mt-20">
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4  rounded-lg shadow-md">
        <div>
          <SignUp
            appearance={{
              elements: {
                card: "shadow-md border rounded-md",
                headerTitle: "text-2xl font-bold",
                socialButtonsBlockButton: "bg-primary text-white",
              },
            }}
            forceRedirectUrl="/store"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="https://placehold.co/600x1042"
            alt="Sign Up"
            width={600}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
