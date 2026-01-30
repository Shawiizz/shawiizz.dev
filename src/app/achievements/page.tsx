'use client'

import React, { useState } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { passionOne, poppins } from '@/app/fonts'
import { sortedAchievements, formatDateRange, type Achievement } from '@/util/data/Achievements'
import { Card, Badge, Modal, Button } from 'flowbite-react'
import { HiStar, HiCalendar, HiExternalLink, HiCode, HiHeart, HiLightBulb, HiUser, HiUserGroup, HiAcademicCap } from 'react-icons/hi'
import { HiTrophy } from 'react-icons/hi2'
import Image from 'next/image'
import { competencies as competenciesDict, type CompetencyId } from '@/util/data/Competencies'
import Footer from '@/components/Footer'
import { replaceLocaleStringArgs } from '@/util/LocaleHelper'

type TabType = 'all' | 'personal' | 'team' | 'academic'

// Toggle to show/hide BUT informatique competencies on achievements
const SHOW_BUT_COMPETENCIES = false

const AchievementsPage = () => {
    const strings = useAppSelector(selectTranslations)
    const [activeTab, setActiveTab] = useState<TabType>('all')
    const [openCompetency, setOpenCompetency] = useState<{
        id: CompetencyId
        title: string
        items: string[]
        sourceTitle: string
    } | null>(null)

    const achievementTypeColors = {
        project: 'success',
        competition: 'warning',
        recognition: 'purple',
        contribution: 'info'
    } as const


    const achievementTypeIcons = {
        project: HiCode,
        competition: HiTrophy,
        recognition: HiHeart,
        contribution: HiLightBulb
    }

    const tabs = [
        {
            id: 'all' as TabType,
            label: strings['achievements.tab.all.label'],
            icon: HiStar,
            count: sortedAchievements.length,
            color: 'from-yellow-500 to-orange-500',
            description: strings['achievements.tab.all.description']
        },
        {
            id: 'personal' as TabType,
            label: strings['achievements.tab.personal.label'],
            icon: HiUser,
            count: sortedAchievements.filter(a => a.category === 'personal').length,
            color: 'from-blue-500 to-purple-500',
            description: strings['achievements.tab.personal.description']
        },
        {
            id: 'team' as TabType,
            label: strings['achievements.tab.team.label'],
            icon: HiUserGroup,
            count: sortedAchievements.filter(a => a.category === 'team').length,
            color: 'from-green-500 to-teal-500',
            description: strings['achievements.tab.team.description']
        },
        {
            id: 'academic' as TabType,
            label: strings['achievements.tab.academic.label'],
            icon: HiAcademicCap,
            count: sortedAchievements.filter(a => a.category === 'academic').length,
            color: 'from-purple-500 to-pink-500',
            description: strings['achievements.tab.academic.description']
        }
    ]

    const filteredAchievements = activeTab === 'all'
        ? sortedAchievements 
        : sortedAchievements.filter(achievement => achievement.category === activeTab)

    const renderCompetencyBadges = (achievement: Achievement) => {
        if (!achievement.competencies) return null
        const compIds = Object.keys(achievement.competencies) as CompetencyId[]
        if (compIds.length === 0) return null
        return (
            <div className='mb-4'>
                <h5 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-1'>
                    <HiAcademicCap className='w-4 h-4' />
                    {strings['achievements.competencies.title']}
                </h5>
                <div className='flex flex-wrap gap-2'>
                    {compIds.map((cid) => {
                        const comp = competenciesDict[cid]
                        const items = achievement.competencies![cid] || []
                        if (!comp) return null
                        return (
                            <button
                                key={cid}
                                onClick={() => setOpenCompetency({ id: cid, title: comp.title, items, sourceTitle: achievement.title })}
                                className='focus:outline-none'
                                aria-label={replaceLocaleStringArgs(strings['achievements.competencies.aria'], comp.title)}
                            >
                                <Badge color='success' size='sm' className='hover:brightness-110 cursor-pointer'>
                                    {cid} — {comp.short}
                                </Badge>
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    const renderAchievementCard = (achievement: Achievement, index: number) => {
        return (
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
                                {achievement.type === 'project' ? strings['achievements.type.project'] : achievement.type === 'competition' ? strings['achievements.type.competition'] : achievement.type === 'recognition' ? strings['achievements.type.recognition'] : strings['achievements.type.contribution']}
                            </span>
                            <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                {achievement.category === 'personal' ? strings['achievements.category.personal'] : 
                                 achievement.category === 'team' ? strings['achievements.category.team'] : 
                                 achievement.category === 'academic' ? strings['achievements.category.academic'] : strings['achievements.category.other']}
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
                        <a href={achievement.link} target='_blank' rel='noopener noreferrer' className='p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-all'>
                            <HiExternalLink className='w-4 h-4' />
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-5'>
                    {achievement.description}
                </p>

                {/* Compétences BUT cliquables */}
                {SHOW_BUT_COMPETENCIES && renderCompetencyBadges(achievement)}

                {/* Technologies */}
                {achievement.technologies && achievement.technologies.length > 0 && (
                    <div className='mb-4'>
                        <div className='flex items-center gap-1.5 mb-2 text-gray-600 dark:text-gray-400'>
                            <HiCode className='w-3.5 h-3.5' />
                            <span className='text-xs font-semibold uppercase tracking-wider'>{strings['header.technologies']}</span>
                        </div>
                        <div className='flex flex-wrap gap-1.5'>
                            {achievement.technologies.slice(0, 5).map((tech, idx) => (
                                <span key={idx} className='text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'>
                                    {tech.displayName}
                                </span>
                            ))}
                            {achievement.technologies.length > 5 && (
                                <span className='text-sm px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'>
                                    +{achievement.technologies.length - 5}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Collaborateurs */}
                {achievement.persons && achievement.persons.length > 0 && (
                    <div className='mb-4'>
                        <div className='flex items-center gap-1.5 mb-2 text-gray-600 dark:text-gray-400'>
                            <HiUserGroup className='w-3.5 h-3.5' />
                            <span className='text-xs font-semibold uppercase tracking-wider'>{strings['project.collaborators']}</span>
                        </div>
                        <div className='flex flex-wrap gap-1.5'>
                            {achievement.persons.map((person, idx) => (
                                <a
                                    key={idx}
                                    href={person.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-sm px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors'
                                >
                                    {person.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Link footer */}
                {achievement.link && (
                    <div className='pt-4 border-t border-gray-200 dark:border-gray-700/50'>
                        <a 
                            href={achievement.link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                        >
                            {strings['achievements.viewProject']}
                            <svg className='w-3.5 h-3.5 ml-1.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        )
    }

    return (
        <main className='flex min-h-screen flex-col items-center pt-16 bg-gray-50 dark:bg-gray-900'>
            {/* Header Section */}
            <section className='w-full max-w-7xl px-4 py-16'>
                <div className='text-center mb-12'>
                    <h1 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(45deg,#0688fb_0%,#ac07f7_100%)] dark:bg-[linear-gradient(45deg,#2b9cff_0%,#ac07f7_100%)] font-semibold`}>
                        {strings['achievements.title'] || 'Mes Réalisations'}
                    </h1>
                    <p className={`pt-5 tracking-[.054em] max-w-4xl mx-auto text-gray-800 dark:text-white font-normal ${poppins.className} text-[1.35rem] md:text-[1.5rem] leading-[1.2em]`}>
                        {strings['achievements.subtitle'] || 'Découvrez mes projets, contributions et réalisations techniques'}
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className='flex justify-center mb-12'>
                    <div className='inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800/50 rounded-full backdrop-blur-sm'>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                            >
                                <span>{tab.label}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                    activeTab === tab.id
                                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                                }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                    {filteredAchievements.map((achievement, index) => renderAchievementCard(achievement, index))}
                </div>

                {/* Call to Action */}
        <div className='text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
            {strings['achievements.cta.title']}
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
            {strings['achievements.cta.text']}
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a 
                            href='https://github.com/Shawiizz' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors'
                        >
                            <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z' clipRule='evenodd' />
                            </svg>
                            {strings['achievements.cta.github']}
                        </a>
                        <a 
                            href='/#contact'
                            className='inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors dark:text-blue-400 dark:bg-gray-800 dark:border-blue-400 dark:hover:bg-gray-700'
                        >
                            {strings['achievements.cta.contact']}
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal Compétence BUT */}
        <Modal show={!!openCompetency} onClose={() => setOpenCompetency(null)} size='lg'>
                <Modal.Header>
            {openCompetency ? `${openCompetency.id} — ${openCompetency.title}` : strings['achievements.modal.header.fallback']}
                </Modal.Header>
                <Modal.Body>
                    {openCompetency && (
                        <div className='space-y-4'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>
                {strings['achievements.modal.linkedto']} <span className='font-semibold'>{openCompetency.sourceTitle}</span>
                            </p>
                            <ul className='list-disc pl-5 space-y-2'>
                                {openCompetency.items.map((it, idx) => (
                                    <li key={idx} className='text-gray-800 dark:text-gray-100'>{it}</li>
                                ))}
                            </ul>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                {strings['achievements.modal.reference']}
                            </p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
            <Button color='gray' onClick={() => setOpenCompetency(null)}>{strings['button.close']}</Button>
                </Modal.Footer>
            </Modal>
            <Footer/>
        </main>
    )
}

export default AchievementsPage
