'use client'

import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import Image from 'next/image'
import { Technologies as technologyObject } from '@/util/data/Technologies'

const Technologies = () => {
    const mode = useSelector(selectTheme)
    const strings = useAppSelector(selectTranslations)

    const top = Object.values(technologyObject).filter(t => t.showPriority === 'top')
    const middle = Object.values(technologyObject).filter(t => t.showPriority === 'middle')

    const TopPill = ({ tech }: { tech: typeof top[0] }) => (
        <div className='flex items-center gap-2.5 px-4 py-2 rounded-full shrink-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30 cursor-default'>
            <Image
                src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                alt={tech.displayName}
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
            />
            <span className='text-sm text-gray-800 dark:text-gray-100 font-semibold whitespace-nowrap'>
                {tech.displayName}
            </span>
        </div>
    )

    const MiddlePill = ({ tech }: { tech: typeof middle[0] }) => (
        <div className='flex items-center gap-2.5 px-4 py-2 rounded-full shrink-0 bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 cursor-default'>
            <Image
                src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                alt={tech.displayName}
                width={16}
                height={16}
                className='w-4 h-4 object-contain opacity-80'
            />
            <span className='text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap'>
                {tech.displayName}
            </span>
        </div>
    )

    const MarqueeRow = ({ children, reverse }: { children: React.ReactNode[], reverse?: boolean }) => (
        <div className='overflow-hidden'>
            <div
                className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
                style={{ display: 'flex', gap: '10px', width: 'max-content' }}
            >
                {[...children, ...children, ...children]}
            </div>
        </div>
    )

    return (
        <div className='space-y-6 w-full'>
            {/* Legend */}
            <div className='flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-500'>
                <span className='flex items-center gap-2'>
                    <span className='inline-block w-8 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full' />
                    {strings['home.section.tech.mastered']}
                </span>
                <span className='flex items-center gap-2'>
                    <span className='inline-block w-8 h-[1px] bg-gray-300 dark:bg-gray-600 rounded-full' />
                    {strings['home.section.tech.practiced']}
                </span>
            </div>

            {/* Marquee rows */}
            <div
                className='w-screen relative left-1/2 -translate-x-1/2 space-y-3 overflow-hidden'
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <MarqueeRow>
                    {top.map((tech, i) => <TopPill key={i} tech={tech} />)}
                </MarqueeRow>
                <MarqueeRow reverse>
                    {middle.map((tech, i) => <MiddlePill key={i} tech={tech} />)}
                </MarqueeRow>
            </div>
        </div>
    )
}

export default Technologies
