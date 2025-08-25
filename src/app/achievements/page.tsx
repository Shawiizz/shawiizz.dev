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

type TabType = 'all' | 'personal' | 'team' | 'academic'

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

    const achievementTypeLabels = {
        project: 'Projet',
        competition: 'Compétition',
        recognition: 'Reconnaissance',
        contribution: 'Contribution'
    }

    const achievementTypeIcons = {
        project: HiCode,
        competition: HiTrophy,
        recognition: HiHeart,
        contribution: HiLightBulb
    }

    const tabs = [
        {
            id: 'all' as TabType,
            label: 'Toutes',
            icon: HiStar,
            count: sortedAchievements.length,
            color: 'from-yellow-500 to-orange-500',
            description: 'Toutes mes réalisations'
        },
        {
            id: 'personal' as TabType,
            label: 'Projets Solo',
            icon: HiUser,
            count: sortedAchievements.filter(a => a.category === 'personal').length,
            color: 'from-blue-500 to-purple-500',
            description: 'Projets développés en autonomie'
        },
        {
            id: 'team' as TabType,
            label: 'Projets Équipe',
            icon: HiUserGroup,
            count: sortedAchievements.filter(a => a.category === 'team').length,
            color: 'from-green-500 to-teal-500',
            description: 'Projets collaboratifs'
        },
        {
            id: 'academic' as TabType,
            label: 'Projets Académiques',
            icon: HiAcademicCap,
            count: sortedAchievements.filter(a => a.category === 'academic').length,
            color: 'from-purple-500 to-pink-500',
            description: 'Projets universitaires'
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
                    Compétences BUT Informatique
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
                                aria-label={`Voir détails compétence ${comp.title}`}
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
        const IconComponent = achievementTypeIcons[achievement.type]
        return (
            <Card key={index} className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group hover:scale-105'>
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-3 mb-3'>
                            <div className='p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600'>
                                <IconComponent className='text-white text-xl' />
                            </div>
                            <Badge color={achievementTypeColors[achievement.type]} size='sm'>
                                {achievementTypeLabels[achievement.type]}
                            </Badge>
                            <Badge color='gray' size='sm' className='capitalize'>
                                {achievement.category === 'personal' ? 'Solo' : 
                                 achievement.category === 'team' ? 'Équipe' : 
                                 achievement.category === 'academic' ? 'Académique' : 'Autre'}
                            </Badge>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                            {achievement.title}
                        </h3>
                        <div className='flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4'>
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

                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                    {achievement.description}
                </p>

                {/* Compétences BUT cliquables */}
                {renderCompetencyBadges(achievement)}

                {/* Technologies */}
                {achievement.technologies && achievement.technologies.length > 0 && (
                    <div className='mb-4'>
                        <h5 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-1'>
                            <HiCode className='w-4 h-4' />
                            Technologies
                        </h5>
                        <div className='flex flex-wrap gap-2'>
                            {achievement.technologies.slice(0, 5).map((tech, idx) => (
                                <Badge key={idx} color='info' size='sm' className='flex items-center gap-1'>
                                    {tech.displayName}
                                </Badge>
                            ))}
                            {achievement.technologies.length > 5 && (
                                <Badge color='gray' size='sm'>
                                    +{achievement.technologies.length - 5} autres
                                </Badge>
                            )}
                        </div>
                    </div>
                )}

                {/* Collaborateurs */}
                {achievement.persons && achievement.persons.length > 0 && (
                    <div className='mb-4'>
                        <h5 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-1'>
                            <HiUserGroup className='w-4 h-4' />
                            Collaborateurs
                        </h5>
                        <div className='flex flex-wrap gap-2'>
                            {achievement.persons.map((person, idx) => (
                                <a
                                    key={idx}
                                    href={person.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center'
                                >
                                    <Badge color='purple' size='sm' className='hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors cursor-pointer'>
                                        {person.name}
                                    </Badge>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {achievement.link && (
                    <div className='mt-auto pt-4 border-t border-gray-200 dark:border-gray-700'>
                        <a 
                            href={achievement.link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors'
                        >
                            <HiExternalLink className='w-4 h-4 mr-1' />
                            Voir le projet
                        </a>
                    </div>
                )}
            </Card>
        )
    }

    return (
        <main className='flex min-h-screen flex-col items-center pt-16'>
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
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white shadow-md hover:shadow-lg hover:scale-102'
                                }`}
                            >
                                <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                                    <IconComponent className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                                </div>
                                <div className='text-left'>
                                    <div className='flex items-center gap-2'>
                                        <span className='font-semibold'>{tab.label}</span>
                                        <Badge 
                                            color={activeTab === tab.id ? 'gray' : 'info'} 
                                            size='sm'
                                            className='opacity-75'
                                        >
                                            {tab.count}
                                        </Badge>
                                    </div>
                                    <p className={`text-xs mt-1 ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {tab.description}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Achievements Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                    {filteredAchievements.map((achievement, index) => renderAchievementCard(achievement, index))}
                </div>

                {/* Call to Action */}
                <div className='text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                        Intéressé par mon travail ?
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
                        N'hésitez pas à consulter mes projets sur GitHub ou à me contacter pour discuter de collaborations.
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
                            Voir mon GitHub
                        </a>
                        <a 
                            href='/#contact'
                            className='inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors dark:text-blue-400 dark:bg-gray-800 dark:border-blue-400 dark:hover:bg-gray-700'
                        >
                            Me contacter
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal Compétence BUT */}
            <Modal show={!!openCompetency} onClose={() => setOpenCompetency(null)} size='lg'>
                <Modal.Header>
                    {openCompetency ? `${openCompetency.id} — ${openCompetency.title}` : 'Compétence'}
                </Modal.Header>
                <Modal.Body>
                    {openCompetency && (
                        <div className='space-y-4'>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>
                                Lié à : <span className='font-semibold'>{openCompetency.sourceTitle}</span>
                            </p>
                            <ul className='list-disc pl-5 space-y-2'>
                                {openCompetency.items.map((it, idx) => (
                                    <li key={idx} className='text-gray-800 dark:text-gray-100'>{it}</li>
                                ))}
                            </ul>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                Référentiel BUT Informatique — aperçu synthétique.
                            </p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button color='gray' onClick={() => setOpenCompetency(null)}>Fermer</Button>
                </Modal.Footer>
            </Modal>
            <Footer/>
        </main>
    )
}

export default AchievementsPage
