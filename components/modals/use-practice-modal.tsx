"use client"
import { usePracticeModal } from '@/store/use-practice-modal'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'

const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false)
    const {isOpen,close} = usePracticeModal()

    useEffect(() => setIsClient(true),[])

    if(!isClient){
        return null
    }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className='max-w-md'>
            <DialogHeader>
                <div className='flex items-center w-full justify-center mb-5'>
                    <Image src={"/heart.svg"} alt='heart' height={100} width={100}/>
                </div>
                <DialogTitle className='text-2xl text-center font-bold'>
                    Practice lesson
                </DialogTitle>
                <DialogDescription className='text-center text-base'>
                    Use practice lesson to gain hearts and points. You cannot lose hearts and points in practice lesson. 
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='mb-4'>
                <div className='w-full flex flex-col gap-y-4'>
                    <Button className='w-full' variant={"primary"} size={"lg"} onClick={close}>
                        I understand
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default PracticeModal