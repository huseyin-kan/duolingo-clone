import React from 'react'
type Props = {
    children: React.ReactNode
  }
  
const FeedWrapper = ({children}:Props) => {
  return (
    <div className='flex-1 top-0 pb-10 relative'>
        {children}
    </div>
  )
}

export default FeedWrapper