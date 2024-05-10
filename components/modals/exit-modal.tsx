"use client"
import { useExitModal } from '@/store/use-exit-modal'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import Image from 'next/image'
import { Button } from '../ui/button'

const ExitModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const {isOpen,close} = useExitModal()

    useEffect(() => setIsClient(true),[])

    if(!isClient){
        return null
    }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className='max-w-md'>
            <DialogHeader>
                <div className='flex items-center w-full justify-center mb-5'>
                    <Image src={"/avatar_sad.svg"} alt='avatar' height={80} width={80}/>
                </div>
                <DialogTitle className='text-2xl text-center font-bold'>
                    Wait, don&apos;t wait
                </DialogTitle>
                <DialogDescription className='text-center text-base'>
                    You&apos;re about to leave the lesson, are you sure ? 
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='mb-4'>
                <div className='w-full flex flex-col gap-y-4'>
                    <Button className='w-full' variant={"primary"} size={"lg"} onClick={close}>
                        Keep Learning
                    </Button>
                    <Button className='w-full' variant={"dangerOutline"} size={"lg"} onClick={() => {close(); router.push("/learn")}}>
                        End Session
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ExitModal