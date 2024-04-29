import { Button } from "@/components/ui/button";
import { ClerkLoading, ClerkLoaded,SignedIn,SignedOut,SignUpButton, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative size-[240px] lg:size-[424px] mb-8 lg:mb-0 ">
        <Image alt="main" fill src={"/main.png"}/>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold max-w-[480px] text-center text-neutral-600">
          Learn, practice, and master new Languages with Lingo.
        </h1>
        <div className="flex flex-col gap-2">
          <ClerkLoading>
            <Loader className="animate-spin size-5 text-muted-foreground"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" signInFallbackRedirectUrl={"/learn"} fallbackRedirectUrl={"/learn"}>
                <Button variant={"secondary"} size={"lg"} className="w-full">Get Started</Button>
              </SignUpButton>
              <SignInButton mode="modal" signUpFallbackRedirectUrl={"/learn"} fallbackRedirectUrl={"/learn"}>
                <Button variant={"primaryOutline"} size={"lg"} className="w-full">I already have an account</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full">
                <Link href="/learn">
                  Continue learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
