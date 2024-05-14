import { challenges } from '@/db/schema';
import {useAudio, useKey} from "react-use"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useCallback } from 'react'
type Props  = {
    id:number;
    imageSrc: string  | null;
    audioSrc: string |  null;
    text:string;
    shortcut:string;
    selected?:boolean;
    onClick?:() => void;
    disabled?:boolean;
    status?: "correct" | "wrong" | "none"
    type: typeof challenges.$inferSelect["type"]
}
const Card = ({
    id,
    imageSrc,
    audioSrc,
    text,
    shortcut,
    selected,
    onClick,
    disabled,
    status,
    type
}:Props) => {
    const [audio, _, controls] = useAudio({src: audioSrc || ""})

    const handleClick = useCallback(() => {
        if(disabled) return
        
        controls.play()
        if(onClick) {
            onClick()
        }
    }, [disabled,onClick,controls])
    
    useKey(shortcut,handleClick,{}, [handleClick])

  return (
    <div onClick={handleClick} className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
        selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
    )}>
        {audio}
        {imageSrc && (
            <div className='relative aspect-square mb-4 max-h-[80px] lg:max-h-[120px] w-full flex items-center justify-center'>
                <Image src={imageSrc} alt={text}  width={90} height={90}/>
            </div>
        )}
        <div className={cn("flex items-center justify-between", type ==="ASSIST" && "flex-row-reverse")}>
            {type === "ASSIST" && <div/>}
            <p className={cn("text-neutral-600 text-sm lg:text-base",
                selected && "text-sky-500",
                selected && status === "correct" && "text-green-500",
                selected && status === "wrong" && "text-rose-500"
            )}>
                {text}
            </p>
            <div className={cn("lg:size-[30px] size-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold",
                selected && "text-sky-500 border-sky-500",
                selected && status === "correct" && "text-green-500 border-green-500",
                selected && status === "wrong" && "text-rose-500 border-rose-500"
            )}>
                {shortcut}
            </div>
        </div>
    </div>
  )
}

export default Card