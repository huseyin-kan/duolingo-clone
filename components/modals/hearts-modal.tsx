"use client"
import { useHeartsModal } from '@/store/use-hearts-modal'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import Image from 'next/image'
import { Button } from '../ui/button'

const HeartsModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const {isOpen,close} = useHeartsModal()

    useEffect(() => setIsClient(true),[])

    const onClick = () => {
        close()
        router.push("/store")
    }

    if(!isClient){
        return null
    }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className='max-w-md'>
            <DialogHeader>
                <div className='flex items-center w-full justify-center mb-5'>
                    <Image src={"/avatar_bad.svg"} alt='avatar' height={80} width={80}/>
                </div>
                <DialogTitle className='text-2xl text-center font-bold'>
                    You ran out of your hearts!
                </DialogTitle>
                <DialogDescription className='text-center text-base'>
                    Go Pro for unlimited hearts, or purchase them in store.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='mb-4'>
                <div className='w-full flex flex-col gap-y-4'>
                    <Button className='w-full' variant={"primary"} size={"lg"} onClick={onClick}>
                        Get Unlimited Hearts
                    </Button>
                    <Button className='w-full' variant={"primaryOutline"} size={"lg"} onClick={close}>
                        No thanks
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default HeartsModal