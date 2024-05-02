import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const Learn = async () => {
  const userProgressData  = getUserProgress()
  
  const [userProgress] = await Promise.all([userProgressData])

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }
  
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress 
        hasActiveSubscription={false}
        hearts={5}
        activeCourse={{title:"Spanish",imageSrc:"/es.svg"}}
        points={100}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Spanish'/>
      </FeedWrapper>
    </div>
  )
}

export default Learn