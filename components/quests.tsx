import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { quests } from '@/constants'
import { Progress } from './ui/progress'

type Props = {
  points:number
}
const Quests = ({points}:Props) => {
  return (
    <div className='border-2 rounded-xl p-4 space-y-4'>
      <div className='flex items-center justify-between w-full space-y-2'>
        <h3 className='font-bold text-lg'>
          Quests
        </h3>
        <Link href={"/quests"}>
          <Button size={"sm"} variant={"primaryOutline"}>
            View All
          </Button>
        </Link>
      </div>
      <ul className='w-full space-y-2'>
        {quests.map((quest)=>{
          const progress = (points / quest.value) * 100;
          return (
            <div className='flex border-t-2 items-center w-full p-4 gap-x-3'>
                <Image src={"/points.svg"} alt='Points' width={40} height={40}/>
                <div className='flex flex-col gap-y-1 w-full'>
                <p className='text-sm font-bold text-neutral-700'>
                {quest.title}
                </p>
                <Progress value={progress} className='h-3'/>
                </div>
            </div>
            )
        })}
      </ul>      
    </div>
  )
}

export default Quests