'use client'

import React from 'react'
import { HiCalendar, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { experiences, experienceTypes } from '@/util/data/Experiences'
import Link from 'next/link'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import SectionHeader from '@/components/SectionHeader'
import TechOverflowBadge from '@/components/TechOverflowBadge'

interface ExperiencePreviewProps {
    title: string
    subtitle?: string
}

const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({ title, subtitle }) => {
    const strings = useAppSelector(selectTranslations)
    const [featured, secondary] = experiences

    const heroCard = (
        <div className='relative rounded-2xl p-8 border border-blue-200 dark:border-blue-500/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/60 dark:to-purple-950/50 overflow-hidden group hover:border-blue-300 dark:hover:border-blue-400/40 transition-all duration-500 h-full'>
            <div className='absolute -top-16 -right-16 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-400/30 dark:group-hover:bg-blue-600/20 transition-all duration-700' />
            <div className='absolute -bottom-16 -left-8 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-400/30 dark:group-hover:bg-purple-600/20 transition-all duration-700' />
            <div className='relative'>
                <div className='flex items-center gap-3 mb-6'>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold'>
                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400' style={{ animation: 'livePulse 1.6s ease-in-out infinite' }} />
                        En cours
                    </span>
                    <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300'>
                        {experienceTypes[featured.type]}
                    </span>
                </div>
                <p className='text-sm font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400/70 mb-1'>{featured.title}</p>
                <h3 className='text-4xl font-black text-gray-900 dark:text-white mb-5 leading-tight'>{featured.company}</h3>
                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6'>
                    <span className='flex items-center gap-1.5'><HiLocationMarker className='w-3.5 h-3.5' />{featured.location}</span>
                    <span className='flex items-center gap-1.5'><HiCalendar className='w-3.5 h-3.5' />{featured.period}</span>
                </div>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>{featured.description[0]}</p>
                {featured.technologies && (
                    <div className='flex flex-wrap gap-2'>
                        {featured.technologies.slice(0, 5).map((tech, i) => (
                            <span key={i} className='text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium'>{tech}</span>
                        ))}
                        {featured.technologies.length > 5 && (
                            <span className='text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'>{featured.technologies.length - 5}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    )

    const secondaryCard = (
        <div className='rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 group h-full'>
            <div className='flex items-center gap-2 mb-4'>
                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-700 dark:text-purple-300'>
                    {experienceTypes[secondary.type]}
                </span>
                {secondary.tags?.map((tag, i) => (
                    <span key={i} className='text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-700 dark:text-blue-300'>
                        {tag}
                    </span>
                ))}
            </div>
            <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5'>{secondary.title}</p>
            <h3 className='text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>{secondary.company}</h3>
            <div className='flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4'>
                <span className='flex items-center gap-1'><HiLocationMarker className='w-3 h-3' />{secondary.location}</span>
                <span className='flex items-center gap-1'><HiCalendar className='w-3 h-3' />{secondary.period}</span>
            </div>
            {secondary.technologies && (
                <div className='flex flex-wrap gap-1.5'>
                    {secondary.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className='text-xs px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-300 font-medium'>{tech}</span>
                    ))}
                    {secondary.technologies.length > 3 && (
                        <TechOverflowBadge techs={secondary.technologies.slice(3)} />
                    )}
                </div>
            )}
        </div>
    )

    const ctaCard = (
        <Link
            href='/experience'
            className='group flex items-center justify-between rounded-2xl p-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 h-full'
        >
            <div>
                <p className='text-gray-900/40 dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5'>{experiences.length} expériences</p>
                <p className='text-gray-900 dark:text-white font-bold text-lg leading-tight'>{strings['experience.preview.seeall']}</p>
            </div>
            <div className='w-10 h-10 shrink-0 rounded-full bg-gray-900/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-colors duration-200'>
                <HiArrowRight className='w-5 h-5 text-gray-900 dark:text-white group-hover:translate-x-0.5 transition-transform duration-200' />
            </div>
        </Link>
    )

    return (
        <section className='w-full max-w-7xl px-4 py-16'>
            <SectionHeader title={title} subtitle={subtitle} eyebrow='Parcours professionnel' />

            {/* Desktop bento */}
            <div className='hidden md:grid md:grid-cols-[1fr_380px] gap-4'>
                {heroCard}
                <div className='flex flex-col gap-4'>
                    {secondaryCard}
                    {ctaCard}
                </div>
            </div>

            {/* Mobile carousel */}
            <div className='md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2'>
                <div className='snap-start shrink-0 w-[82vw]'>{heroCard}</div>
                <div className='snap-start shrink-0 w-[82vw] relative rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50'>
                    <div className='flex items-center gap-2 mb-6'>
                        <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-700 dark:text-purple-300'>
                            {experienceTypes[secondary.type]}
                        </span>
                        {secondary.tags?.map((tag, i) => (
                            <span key={i} className='text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-700 dark:text-blue-300'>{tag}</span>
                        ))}
                    </div>
                    <p className='text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1'>{secondary.title}</p>
                    <h3 className='text-4xl font-black text-gray-900 dark:text-white mb-5 leading-tight'>{secondary.company}</h3>
                    <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6'>
                        <span className='flex items-center gap-1.5'><HiLocationMarker className='w-3.5 h-3.5' />{secondary.location}</span>
                        <span className='flex items-center gap-1.5'><HiCalendar className='w-3.5 h-3.5' />{secondary.period}</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>{secondary.description[0]}</p>
                    {secondary.technologies && (
                        <div className='flex flex-wrap gap-2'>
                            {secondary.technologies.slice(0, 5).map((tech, i) => (
                                <span key={i} className='text-xs px-3 py-1 rounded-full bg-blue-50 bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-300 font-medium'>{tech}</span>
                            ))}
                            {secondary.technologies.length > 5 && (
                                <span className='text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-500'>+{secondary.technologies.length - 5}</span>
                            )}
                        </div>
                    )}
                </div>
                <div className='snap-start shrink-0 w-[82vw]'>{ctaCard}</div>
            </div>
        </section>
    )
}

export default ExperiencePreview
