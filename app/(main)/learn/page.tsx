import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import Unit from './unit'
import Promo from '@/components/promo'
import Quests from '@/components/quests'

const Learn = async () => {
  const userProgressData  = getUserProgress()
  const lessonPercentageData = getLessonPercentage()
  const courseProgressData = getCourseProgress()
  const unitsData = getUnits()
  const userSubscriptionData = getUserSubscription()
  
  const [userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription
  ] = await Promise.all(
      [userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData
      ])

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }

  if(!courseProgress){
    redirect("/courses")
  }
  
  const isPro = !!userSubscription?.isActive
  
  

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress 
        hasActiveSubscription={isPro}
        hearts={userProgress.hearts}
        activeCourse={userProgress.activeCourse}
        points={userProgress.points}
        />
        {
          !isPro && (
            <Promo/>
          )
        }
        <Quests points={userProgress.points}/>
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}/>
        {units.map((unit) => (
          <div key={unit.id} className='mb-10'>
            <Unit id={unit.id} 
            order={unit.order} 
            title={unit.title} 
            description={unit.description} 
            lessons={unit.lessons} 
            activeLesson={courseProgress.activeLesson} 
            activeLessonPercentage={lessonPercentage} />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}

export default Learn