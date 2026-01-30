'use client'

import React from 'react'
import { Card, Badge } from 'flowbite-react'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { experiences, experienceTypes } from '@/util/data/Experiences'
import { passionOne } from '@/app/fonts'
import Link from 'next/link'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'

interface ExperiencePreviewProps {
    title: string
    subtitle?: string
}

const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({ title, subtitle }) => {
    const strings = useAppSelector(selectTranslations)
    const recentExperiences = experiences.slice(0, 2)

    return (
        <section className='w-full max-w-7xl px-4 py-16'>
            <div className='text-center mb-12'>
                <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(45deg,#0688fb_0%,#ac07f7_100%)] dark:bg-[linear-gradient(45deg,#2b9cff_0%,#ac07f7_100%)] font-semibold`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className='pt-5 tracking-[.054em] max-w-4xl mx-auto text-gray-800 dark:text-white font-normal text-[1.35rem] md:text-[1.5rem] leading-[1.2em]'>
                        {subtitle}
                    </p>
                )}
            </div>

            <div className='grid md:grid-cols-2 gap-8 mb-8'>
                {recentExperiences.map((experience, index) => (
                    <div key={index} className='group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300'>
                        {/* Header */}
                        <div className='flex items-start justify-between mb-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'>
                                        {experienceTypes[experience.type]}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {experience.title}
                                </h3>
                                <h4 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3'>
                                    {experience.company}
                                </h4>
                                <div className='flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
                                    <div className='flex items-center gap-1'>
                                        <HiLocationMarker className='w-3.5 h-3.5' />
                                        <span>{experience.location}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <HiCalendar className='w-3.5 h-3.5' />
                                        <span>{experience.period}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-5 line-clamp-3'>
                            {experience.description[0]}
                        </p>

                        {/* Technologies */}
                        {experience.technologies && (
                            <div className='flex flex-wrap gap-1.5'>
                                {experience.technologies.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className='text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'>
                                        {tech}
                                    </span>
                                ))}
                                {experience.technologies.length > 4 && (
                                    <span className='text-sm px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                        +{experience.technologies.length - 4}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='text-center'>
                <Link href='/experience' className='inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300'>
                    {strings['experience.preview.seeall']}
                    <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default ExperiencePreview
