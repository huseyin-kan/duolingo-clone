"use client"
import { challengeOptions, challenges } from '@/db/schema';
import React, { useState } from 'react'
import Header from './header';

type Props = {
    initialPercentage:number;
    initialHearts:number;
    initialLessonId:number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed:boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[];
    userSubscription:any
}

const Quiz = ({
    initialHearts,
    initialLessonId,
    initialPercentage,
    initialLessonChallenges,
    userSubscription
}:Props) => {
    const [hearts,setHearts] = useState(initialHearts)
    const [percentage,setPercentage] = useState(initialPercentage)

  return (
    <>
        <Header
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription?.isActive}
        />
    </>
  )
}

export default Quiz