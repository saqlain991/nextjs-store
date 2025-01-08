import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md">
        <div>
          <SignIn
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
            src="https://placehold.co/600x820"
            alt="Sign In"
            width={600}
            height={820}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
