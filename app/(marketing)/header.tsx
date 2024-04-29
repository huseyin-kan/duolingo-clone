import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignedIn,SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
        <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
            <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                <Image src={"/avatar.png"} height={40} width={40} alt='Avatar'/>
            </div>
            <ClerkLoading>
                <Loader className='size-5 text-muted-foreground animate-spin'/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal' fallbackRedirectUrl="/learn" signUpFallbackRedirectUrl="/learn" >
                        <Button variant={"ghost"}>Login</Button>
                    </SignInButton>
                </SignedOut>
            </ClerkLoaded>
        </div>
    </header>
  )
}

export default Header