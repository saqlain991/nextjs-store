import { Card, CardContent } from "@/components/ui/card";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center mt-20 p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div>
            <Card className="overflow-hidden">
              <CardContent className="grid p-0 md:grid-cols-2">
                <div className="w-full">
                  <SignUp />
                </div>
                <div className="relative hidden bg-muted md:block">
                  <Image
                    src="https://placehold.co/600x400"
                    height={400}
                    width={600}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
