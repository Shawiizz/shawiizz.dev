'use client'

import { passionOne } from '@/app/fonts'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { Profile } from '@/util/data/Profile'

const Separator = () => (
    <span className='mx-6 md:mx-10 text-outlined opacity-30 select-none'>·</span>
)

const Item = ({ label }: { label: string }) => (
    <span className={`${passionOne.className} text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-none text-outlined opacity-20 dark:opacity-10 whitespace-nowrap select-none`}>
        {label}
    </span>
)

export default function HeroMarquee() {
    const strings = useAppSelector(selectTranslations)
    const items = ['Full-Stack', 'DevOps', Profile.school, strings['hero.marquee.engineer'], 'Open Source', Profile.location]

    return (
        <div className='w-screen relative left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none'>
            <div
                className='animate-marquee'
                style={{ display: 'flex', alignItems: 'center', width: 'max-content', gap: 0 }}
            >
                {[...items, ...items, ...items].map((item, i) => (
                    <span key={i} className='flex items-center'>
                        <Item label={item} />
                        <Separator />
                    </span>
                ))}
            </div>
        </div>
    )
}
