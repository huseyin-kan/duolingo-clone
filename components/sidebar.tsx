import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarItem from './sidebar-item'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

type Props = {
    className?:string
}

const Sidebar = ({className}:Props) => {
  return (
    <div className={cn('h-full flex lg:w-[256px] lg:fixed left-0 top-0 border-r-2 flex-col px-2', className)}>
        <Link href="/learn">
            <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                <Image src={"/avatar.png"} height={40} width={40} alt='Avatar'/>
                <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>Bilng</h1>
            </div>
        </Link>
        <div className='flex flex-col gap-y-2 flex-1'>
            <SidebarItem label='Learn' href='/learn' iconSrc='/learn.svg'/>
            <SidebarItem label='leaderboard' href='/leaderboard' iconSrc='/leaderboard.svg'/>
            <SidebarItem label='quest' href='/quest' iconSrc='/quest.svg'/>
            <SidebarItem label='shop' href='/shop' iconSrc='/shop.svg'/>
        </div>
        <div className='p-4'>
            <ClerkLoading>
                <Loader className='size-5 text-muted-foreground animate-spin'/>
            </ClerkLoading>
            <ClerkLoaded>
                <UserButton/>
            </ClerkLoaded>
        </div>
    </div>
  )
}

export default Sidebar