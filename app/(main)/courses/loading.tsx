import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='size-full flex items-center justify-center'>
        <Loader className='size-6 text-muted-foreground animate-spin'/>
    </div>
  )
}

export default Loading