"use client";
import React from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
type Props= {
    label:string
    iconSrc:string
    href:string
}

const SidebarItem = ({label,iconSrc,href}:Props) => {
    const pathName = usePathname();
    const active = pathName === href
  return (
    <Button variant={active ? "sidebarOutline":"sidebar"} className='justify-start h-[52px]' asChild>
        <Link className='' href={href}>
            <Image src={iconSrc} alt={label} className='mr-5' height={30} width={30}/>
            {label}
        </Link>
    </Button>
  )
}

export default SidebarItem