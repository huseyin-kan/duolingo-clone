import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Promo = () => {
  return (
    <div className='border-2 rounded-xl p-4 space-y-4'>
        <div className='space-y-4'>
            <div className='flex items-center gap-x-2'>
                <Image src={"/unlimited.svg"} alt='Pro' width={26} height={26} />
                <h3 className='font-bold text-lg'>Upgrade to pro</h3>
            </div>
            <p className='text-muted-foreground'>Get unlimited hearts and more</p>
            <Button className='w-full' size={"lg"} variant="super" asChild>
                <Link href={"/shop"}>
                  Upgrade Now
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default Promo