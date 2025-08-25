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
                    <Card key={index} className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                        <div className='flex items-start justify-between'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <HiBriefcase className='text-blue-500 text-xl' />
                                    <Badge color='purple' size='sm'>
                                        {experienceTypes[experience.type]}
                                    </Badge>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                                    {experience.title}
                                </h3>
                                <h4 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>
                                    {experience.company}
                                </h4>
                                <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4'>
                                    <div className='flex items-center gap-1'>
                                        <HiLocationMarker />
                                        {experience.location}
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <HiCalendar />
                                        {experience.period}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-700 dark:text-gray-300 line-clamp-3'>
                                {experience.description[0]}
                            </p>
                        </div>

                        {experience.technologies && (
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {experience.technologies.slice(0, 4).map((tech, idx) => (
                                    <Badge key={idx} color='info' size='sm'>{tech}</Badge>
                                ))}
                                {experience.technologies.length > 4 && (
                                    <Badge color='gray' size='sm'>+{experience.technologies.length - 4}</Badge>
                                )}
                            </div>
                        )}
                    </Card>
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
