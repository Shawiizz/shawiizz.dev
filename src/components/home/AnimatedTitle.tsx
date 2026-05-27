'use client'

import React, { useEffect } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { getCurrentLocale } from '@/i18n/Language'

export default function AnimatedTitle() {
    const strings = useAppSelector(selectTranslations)
    const [titleValue, setTitleValue] = React.useState<string>('')

    useEffect(() => {
        async function textAnimation(text: string, wait: number = 5000, write: number = 200, erase: number = 100) {
            for (let i = 0; i < text.length; i++) {
                setTitleValue(text.substring(0, i + 1))
                await new Promise((resolve) => setTimeout(resolve, write))
            }
            await new Promise((resolve) => setTimeout(resolve, wait))
            for (let i = text.length; i > 0; i--) {
                setTitleValue(text.substring(0, i - 1))
                await new Promise((resolve) => setTimeout(resolve, erase))
            }
        }

        async function executeTextAnimations() {
            await textAnimation(getCurrentLocale().strings['home.title.animation.1'], 2000, 80, 40)
            await textAnimation(getCurrentLocale().strings['home.title.animation.2'], 2000, 80, 40)
            await textAnimation(getCurrentLocale().strings['home.title.animation.3'], 2000, 80, 40)
            await textAnimation(getCurrentLocale().strings['home.title.animation.4'], 2000, 80, 40)
            await executeTextAnimations()
        }

        executeTextAnimations().catch(console.error)
    }, [])

    return (
        <span className='font-mono text-sm md:text-base text-gray-400 dark:text-gray-500 tracking-wide'>
            {titleValue || ' '}
            <span className='animate-pulse'>_</span>
        </span>
    )
}
