"use client"
import { refillHearts } from '@/actions/user-progress'
import { createStripeUrl } from '@/actions/user-subscription'
import { Button } from '@/components/ui/button'
import { POINTS_TO_REFILL } from '@/constants'
import Image from 'next/image'
import React, { useTransition } from 'react'
import { toast } from 'sonner'


type Props = {
    hearts:number
    points:number
    hasActiveSubscription:boolean
}

const Items = ({
    hearts,
    points,
    hasActiveSubscription
}:Props) => {
    const [pending, startTransition] = useTransition()

    const onRefillHearts = () => {
        if(pending || hearts === 5 || points < POINTS_TO_REFILL){
            return
        }

        startTransition(() => {
            refillHearts()
            .catch(() => toast.error("Something went wrong"))
        })
    }

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
            .then((response) => {
                if(response.data) {
                    console.log(response.data);
                    
                    window.location.href = response.data.url
                }
            })
            .catch(() => toast.error("Something went wrong"))
        })
    }

  return (
    <ul className='w-full'>
        <div className='flex items-center w-full p-4 gap-x-4 border-t-2'>
            <Image src={"/heart.svg"} alt='Heart' height={60} width={60}/>
            <div className='flex-1'>
                <p className='text-neutral-700 lg:text-xl font-bold text-base'>
                    Refill Hearts
                </p>
            </div>
            <Button className='' onClick={onRefillHearts} disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}>
                {hearts === 5 ? 
                "full" :
                (
                    <div className='flex items-center'>
                        <Image src={"/points.svg"} width={20} height={20} alt='Points'/>
                        <p>{POINTS_TO_REFILL}</p>
                    </div>
                )   
            } 
            </Button>
        </div>
        <div className='flex items-center w-full pt-8 p-4 gap-x-4 border-t-2 '>
            <Image src={"/unlimited.svg"} alt='unlimited' width={60} height={60}/>
            <div className='flex-1'>
                <p className='text-neutral-700 text-base lg:text-lg font-bold'>
                    Unlimited Hearts
                </p>
            </div>
            <Button disabled={pending} onClick={onUpgrade}>
                {hasActiveSubscription ? "settings":"upgrade"}
            </Button>
        </div>
    </ul>
  )
}

export default Items