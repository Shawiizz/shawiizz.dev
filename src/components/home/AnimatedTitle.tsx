import { passionOne } from '@/app/fonts'
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
            await textAnimation('Maël Feri')
            await textAnimation(getCurrentLocale().strings['home.title.animation.1'], 500, 100, 50)
            await textAnimation(getCurrentLocale().strings['home.title.animation.2'], 200, 100, 50)
            await textAnimation(getCurrentLocale().strings['home.title.animation.3'], 200, 100, 50)
            await textAnimation(getCurrentLocale().strings['home.title.animation.4'], 500, 100, 50)
            await textAnimation(':)', 200, 100, 100)

            await executeTextAnimations()
        }

        executeTextAnimations().catch(console.error)
    }, [])

    return (
        <div className="relative w-full max-w-4xl">
            <div className="min-h-[5.4em] md:min-h-[6em] flex items-center">
                <h1 className={`text-white md:text-[6em] text-[4.5em] font-bold leading-[0.9em] ${passionOne.className} bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% tracking-tight`}>
                    {titleValue || '\u00A0'}
                </h1>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur-2xl opacity-10 pointer-events-none"></div>
        </div>
    )
}