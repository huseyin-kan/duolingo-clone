import FeedWrapper from '@/components/feed-wrapper'
import Promo from '@/components/promo'
import Quests from '@/components/quests'
import StickyWrapper from '@/components/sticky-wrapper'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import UserProgress from '@/components/user-progress'
import { quests } from '@/constants'
import { getUserProgress, getUserSubscription } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'



const QuestPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()
    
    const [ userProgress,userSubscription] = await Promise.all([userProgressData,userSubscriptionData])

    if(!userProgress || !userProgress.activeCourseId){
        redirect("/courses")
    }

    const isPro = !!userSubscription?.isActive
    
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
            <UserProgress 
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={isPro}
            />
            {!isPro && (
                <Promo/>
            )}
            <Quests points={userProgress.points}/>
        </StickyWrapper>
        <FeedWrapper>
            <div className='w-full flex flex-col items-center'>
                <Image src={"/quest.svg"} alt='Quest' height={90} width={90}/>
                <h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
                    Quests
                </h1>
                <p className='text-muted-foreground text-center text-lg mb-6'>
                    Complete quests by earning points.
                </p>
            </div>
            {quests.map((quest) => {
                const progress = (userProgress.points / quest.value) * 100;

                return (
                    <div className='flex border-t-2 items-center w-full p-4 gap-x-4'>
                        <Image src={"/points.svg"} alt='Points' width={60} height={60}/>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <p className='text-xl font-bold text-neutral-700'>
                                {quest.title}
                            </p>
                            <Progress value={progress} className='h-3'/>
                        </div>
                    </div>
                )
            })}
        </FeedWrapper>
    </div>
  )
}

export default QuestPage