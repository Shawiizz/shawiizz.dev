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
        <section className='w-full bg-gray-100 dark:bg-[unset]'>
            <div className='max-w-7xl mx-auto px-4 py-16'>
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
                    <div key={index} className='group bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300'>
                        {/* Header */}
                        <div className='flex items-start justify-between mb-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                        achievement.type === 'project' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' :
                                        achievement.type === 'competition' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' :
                                        achievement.type === 'recognition' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                                        'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                                    }`}>
                                        {achievement.type === 'project' ? 'Projet' : achievement.type === 'competition' ? 'Compétition' : achievement.type === 'recognition' ? 'Reconnaissance' : 'Contribution'}
                                    </span>
                                    <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                        {achievement.category === 'personal' ? 'Solo' : 
                                         achievement.category === 'team' ? 'Équipe' : 
                                         achievement.category === 'academic' ? 'Académique' : 'Autre'}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {achievement.title}
                                </h3>
                                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                                    {formatDateRange(achievement)}
                                </span>
                            </div>
                            {achievement.link && (
                                <a href={achievement.link} target='_blank' rel='noopener noreferrer' className='p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all'>
                                    <HiExternalLink className='w-4 h-4' />
                                </a>
                            )}
                        </div>

                        {/* Description */}
                        <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-5'>
                            {achievement.description}
                        </p>

                        {/* Technologies - preview */}
                        {achievement.technologies && achievement.technologies.length > 0 && (
                            <div className='mb-4'>
                                <div className='flex items-center gap-1.5 mb-2 text-gray-600 dark:text-gray-400'>
                                    <HiCode className='w-3.5 h-3.5' />
                                    <span className='text-xs font-semibold uppercase tracking-wider'>Technologies</span>
                                </div>
                                <div className='flex flex-wrap gap-1.5'>
                                    {achievement.technologies.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className='text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'>
                                            {tech.displayName}
                                        </span>
                                    ))}
                                    {achievement.technologies.length > 3 && (
                                        <span className='text-sm px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                            +{achievement.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Collaborateurs - preview */}
                        {achievement.persons && achievement.persons.length > 0 && (
                            <div className='mb-4'>
                                <div className='flex items-center gap-1.5 mb-2 text-gray-600 dark:text-gray-400'>
                                    <HiUserGroup className='w-3.5 h-3.5' />
                                    <span className='text-xs font-semibold uppercase tracking-wider'>Avec</span>
                                </div>
                                <div className='flex flex-wrap gap-1.5'>
                                    {achievement.persons.slice(0, 2).map((person, idx) => (
                                        <span key={idx} className='text-sm px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium'>
                                            {person.name}
                                        </span>
                                    ))}
                                    {achievement.persons.length > 2 && (
                                        <span className='text-sm px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                            +{achievement.persons.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
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
            </div>
        </section>
    )
}

export default AchievementsPreview
