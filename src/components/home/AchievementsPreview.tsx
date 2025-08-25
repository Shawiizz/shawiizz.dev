'use client'

import React from 'react'
import { Card, Badge } from 'flowbite-react'
import { HiStar, HiCalendar, HiExternalLink, HiCode, HiUserGroup } from 'react-icons/hi'
import { sortedAchievements, formatDateRange } from '@/util/data/Achievements'
import { passionOne } from '@/app/fonts'
import Link from 'next/link'

interface AchievementsPreviewProps {
    title: string
    subtitle?: string
}

const AchievementsPreview: React.FC<AchievementsPreviewProps> = ({ title, subtitle }) => {
    const achievementTypeColors = {
        project: 'success',
        competition: 'warning',
        recognition: 'purple',
        contribution: 'info'
    } as const

    const achievementTypeLabels = {
        project: 'Projet',
        competition: 'Compétition',
        recognition: 'Reconnaissance',
        contribution: 'Contribution'
    }

    const previewAchievements = sortedAchievements.slice(0, 3)

    return (
        <section className='w-full max-w-7xl px-4 py-16 bg-[#fff8f3] dark:bg-transparent'>
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

            <div className='grid md:grid-cols-3 gap-6'>
                {previewAchievements.map((achievement, index) => (
                    <Card key={index} className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group'>
                        <div className='flex items-start justify-between mb-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <HiStar className='text-yellow-500 text-xl' />
                                    <Badge color={achievementTypeColors[achievement.type]} size='sm'>
                                        {achievementTypeLabels[achievement.type]}
                                    </Badge>
                                    <Badge color='gray' size='sm' className='capitalize'>
                                        {achievement.category === 'personal' ? 'Solo' : 
                                         achievement.category === 'team' ? 'Équipe' : 
                                         achievement.category === 'academic' ? 'Académique' : 'Autre'}
                                    </Badge>
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {achievement.title}
                                </h3>
                                <div className='flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3'>
                                    <HiCalendar />
                                    {formatDateRange(achievement)}
                                </div>
                            </div>
                            {achievement.link && (
                                <a href={achievement.link} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-600 transition-colors'>
                                    <HiExternalLink className='w-5 h-5' />
                                </a>
                            )}
                        </div>

                        <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                            {achievement.description}
                        </p>

                        {/* Technologies - preview */}
                        {achievement.technologies && achievement.technologies.length > 0 && (
                            <div className='mb-4'>
                                <div className='flex items-center gap-1 mb-2'>
                                    <HiCode className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                                    <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>Technologies</span>
                                </div>
                                <div className='flex flex-wrap gap-1'>
                                    {achievement.technologies.slice(0, 3).map((tech, idx) => (
                                        <Badge key={idx} color='info' size='sm' className='text-xs'>
                                            {tech.displayName}
                                        </Badge>
                                    ))}
                                    {achievement.technologies.length > 3 && (
                                        <Badge color='gray' size='sm' className='text-xs'>
                                            +{achievement.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Collaborateurs - preview */}
                        {achievement.persons && achievement.persons.length > 0 && (
                            <div className='mb-4'>
                                <div className='flex items-center gap-1 mb-2'>
                                    <HiUserGroup className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                                    <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>Avec</span>
                                </div>
                                <div className='flex flex-wrap gap-1'>
                                    {achievement.persons.slice(0, 2).map((person, idx) => (
                                        <Badge key={idx} color='purple' size='sm' className='text-xs'>
                                            {person.name}
                                        </Badge>
                                    ))}
                                    {achievement.persons.length > 2 && (
                                        <Badge color='gray' size='sm' className='text-xs'>
                                            +{achievement.persons.length - 2}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        )}
                    </Card>
                ))}
            </div>

            <div className='text-center mt-8'>
                <Link href='/achievements' className='inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'>
                    Voir toutes mes réalisations
                    <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default AchievementsPreview
