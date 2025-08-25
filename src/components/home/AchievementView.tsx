import { Achievement } from '@/util/data/Achievements'
import { AchievementCard } from '@/components/home/AchievementCard'
import { Pagination } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'

export interface AchievementViewProps {
    achievements: Achievement[]
    title: string
    isModal?: boolean
}

export default function AchievementView({ achievements, title, isModal = false}: AchievementViewProps) {
    const strings = useAppSelector(selectTranslations)
    const [currentPage, setCurrentPage] = useState(1)

    const pageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        console.log('AchievementView loaded')
    }, [])

    return (
        <div
            className={`border dark:border-none border-gray-300 dark:bg-gray-800 md:w-[45%] w-[90%] rounded-2xl dark:drop-shadow-2xl flex flex-col items-center pb-6`}>
            <h2 className={`text-gray-800 dark:text-white text-center mt-8 tracking-[.213em] uppercase text-3xl font-bold`}>{title}</h2>
            <div
                className={`flex flex-col w-full flex-wrap md:flex-row md:gap-8 md:items-stretch mt-8 justify-center`}>
                {
                    achievements.map((achievement, index) => {
                        if (index >= currentPage * 4 || index < (currentPage - 1) * 4) return null

                        return (
                            <AchievementCard key={index} {...achievement} />
                        )
                    })
                }
            </div>
            <div className={`mb-2 mt-6 ${achievements.length < 5 && 'hidden'}`}>
                <Pagination currentPage={currentPage} totalPages={Math.ceil(achievements.length / 4)}
                            onPageChange={pageChange}
                            previousLabel={strings['pagination.previous']}
                            nextLabel={strings['pagination.next']}
                            showIcons />
            </div>
        </div>
    )
}
