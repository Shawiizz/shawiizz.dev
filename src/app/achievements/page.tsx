'use client'

import React, { useState } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { passionOne, poppins } from '@/app/fonts'
import { sortedAchievements, formatDateRange, type Achievement } from '@/util/data/Achievements'
import { HiExternalLink } from 'react-icons/hi'
import Footer from '@/components/Footer'
import Link from 'next/link'

type TabType = 'all' | 'personal' | 'team' | 'academic'

const typeLabel = (t: string) =>
    t === 'project' ? 'Projet' : t === 'competition' ? 'Compétition' : t === 'recognition' ? 'Reconnaissance' : 'Contribution'

const categoryLabel = (c: string) =>
    c === 'personal' ? 'Solo' : c === 'team' ? 'Équipe' : c === 'academic' ? 'Académique' : 'Autre'

const typeBadge = (type: string) => {
    const base = 'text-xs font-medium px-2.5 py-1 rounded-full border'
    if (type === 'project') return `${base} bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300`
    if (type === 'competition') return `${base} bg-amber-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300`
    if (type === 'recognition') return `${base} bg-purple-500/15 border-purple-500/30 text-purple-700 dark:text-purple-300`
    return `${base} bg-blue-500/15 border-blue-500/30 text-blue-700 dark:text-blue-300`
}

const AchievementsPage = () => {
    const strings = useAppSelector(selectTranslations)
    const [activeTab, setActiveTab] = useState<TabType>('all')

    const tabs: { id: TabType; label: string }[] = [
        { id: 'all', label: 'Tout' },
        { id: 'personal', label: 'Solo' },
        { id: 'team', label: 'Équipe' },
        { id: 'academic', label: 'Académique' },
    ]

    const filtered = activeTab === 'all'
        ? sortedAchievements
        : sortedAchievements.filter(a => a.category === activeTab)

    const [featured, ...rest] = filtered

    return (
        <main className='flex min-h-screen flex-col items-center pt-16 bg-white dark:bg-gray-950'>

            {/* ── HERO ── */}
            <section className='w-full border-b border-gray-100 dark:border-gray-800/60 py-24 md:py-32'>
                <div className='max-w-6xl mx-auto px-6'>
                    <p className={`${poppins.className} text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 mb-8`}>
                        Portfolio & Projets
                    </p>
                    <h1 className={`${passionOne.className} text-[14vw] sm:text-[10vw] md:text-[8vw] font-black uppercase leading-none tracking-tight`}>
                        <span className='text-gray-900 dark:text-white'>Réali</span>
                        <span className='text-outlined'>sations</span>
                    </h1>
                    <p className={`mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed ${poppins.className}`}>
                        {strings['achievements.subtitle'] || 'Projets personnels, contributions open source et travaux académiques.'}
                    </p>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className='w-full'>
                <div className='max-w-6xl mx-auto px-6'>

                    {/* Filter tabs — underline style */}
                    <div className='flex gap-8 border-b border-gray-100 dark:border-gray-800/60 mt-10'>
                        {tabs.map(tab => {
                            const count = tab.id === 'all'
                                ? sortedAchievements.length
                                : sortedAchievements.filter(a => a.category === tab.id).length
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 text-sm font-medium border-b-2 -mb-px transition-colors duration-200 ${
                                        activeTab === tab.id
                                            ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                                            : 'border-transparent text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400'
                                    }`}
                                >
                                    {tab.label}
                                    <span className='ml-2 text-xs text-gray-400 dark:text-gray-600'>{count}</span>
                                </button>
                            )
                        })}
                    </div>

                    {filtered.length === 0 ? (
                        <p className={`py-20 text-center text-gray-400 ${poppins.className}`}>Aucun projet dans cette catégorie.</p>
                    ) : (
                        <>
                            {/* Featured card */}
                            <FeaturedCard achievement={featured} poppins={poppins.className} />

                            {/* Rest — table of contents style */}
                            {rest.length > 0 && (
                                <div className='border-t border-gray-100 dark:border-gray-800/60'>
                                    {rest.map((a, i) => (
                                        <AchievementRow key={i} achievement={a} poppins={poppins.className} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* CTA */}
                    <div className='border-t border-gray-100 dark:border-gray-800/60 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
                        <div>
                            <p className={`text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 ${poppins.className}`}>Open source</p>
                            <p className={`text-base text-gray-600 dark:text-gray-400 ${poppins.className}`}>
                                Plus de projets disponibles sur GitHub
                            </p>
                        </div>
                        <div className='flex gap-3'>
                            <a
                                href='https://github.com/Shawiizz'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-80 transition-opacity duration-200'
                            >
                                GitHub
                            </a>
                            <Link
                                href='/#contact'
                                className='px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200'
                            >
                                Me contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

/* ── Featured card ───────────────────────────────────────────────── */
function FeaturedCard({ achievement, poppins }: { achievement: Achievement; poppins: string }) {
    return (
        <div className='py-14 md:py-16 border-b border-gray-100 dark:border-gray-800/60 grid md:grid-cols-[1fr_300px] gap-10 md:gap-16'>
            {/* Left */}
            <div className='space-y-6'>
                <div className='flex flex-wrap items-center gap-2'>
                    <span className='flex items-center justify-center w-7 h-7 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-500'>
                        ★
                    </span>
                    <span className={typeBadge(achievement.type)}>{typeLabel(achievement.type)}</span>
                    <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400'>
                        {categoryLabel(achievement.category)}
                    </span>
                </div>

                <div>
                    <h2 className={`${passionOne.className} text-5xl md:text-7xl font-black uppercase leading-none text-gray-900 dark:text-white mb-3`}>
                        {achievement.title}
                    </h2>
                    <p className={`text-sm text-gray-400 dark:text-gray-500 ${poppins}`}>
                        {formatDateRange(achievement)}
                    </p>
                </div>

                <p className={`text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg ${poppins}`}>
                    {achievement.description}
                </p>

                {achievement.link && (
                    <a
                        href={achievement.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:gap-3 transition-all duration-200'
                    >
                        Voir le projet
                        <HiExternalLink className='w-4 h-4' />
                    </a>
                )}
            </div>

            {/* Right — tech + collaborators */}
            <div className='space-y-8 md:pt-2'>
                {achievement.technologies && achievement.technologies.length > 0 && (
                    <div className='space-y-3'>
                        <p className={`text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 ${poppins}`}>Stack</p>
                        <div className='flex flex-wrap gap-2'>
                            {achievement.technologies.map((tech, i) => (
                                <span key={i} className='text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium'>
                                    {tech.displayName}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {achievement.persons && achievement.persons.length > 0 && (
                    <div className='space-y-3'>
                        <p className={`text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 ${poppins}`}>Collaborateurs</p>
                        <div className='flex flex-wrap gap-2'>
                            {achievement.persons.map((p, i) => (
                                <a key={i} href={p.link} target='_blank' rel='noopener noreferrer'
                                    className='text-xs px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium hover:bg-purple-500/15 transition-colors'>
                                    {p.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

/* ── Achievement row ─────────────────────────────────────────────── */
function AchievementRow({ achievement, poppins }: { achievement: Achievement; poppins: string }) {
    const [open, setOpen] = useState(false)

    return (
        <div className='border-b border-gray-100 dark:border-gray-800/60'>
            <button
                onClick={() => setOpen(v => !v)}
                className='w-full text-left py-6 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_160px_120px_32px] gap-4 md:gap-8 items-center group'
            >
                <div className='flex items-center gap-4 min-w-0'>
                    <span className={`${passionOne.className} text-xl md:text-2xl font-black uppercase text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors truncate`}>
                        {achievement.title}
                    </span>
                    {achievement.link && (
                        <a
                            href={achievement.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={e => e.stopPropagation()}
                            className='shrink-0 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors'
                        >
                            <HiExternalLink className='w-3.5 h-3.5' />
                        </a>
                    )}
                </div>

                <span className={`hidden md:block text-sm text-gray-400 dark:text-gray-600 ${poppins}`}>
                    {formatDateRange(achievement)}
                </span>

                <span className={`hidden md:inline-flex w-fit ${typeBadge(achievement.type)}`}>
                    {typeLabel(achievement.type)}
                </span>

                <span className={`text-gray-400 dark:text-gray-600 transition-transform duration-200 text-sm ${open ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>

            {open && (
                <div className='pb-6 grid md:grid-cols-[1fr_280px] gap-8'>
                    <div className='space-y-4'>
                        <p className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${poppins}`}>
                            {achievement.description}
                        </p>
                        {achievement.persons && achievement.persons.length > 0 && (
                            <div className='flex flex-wrap gap-2'>
                                {achievement.persons.map((p, i) => (
                                    <a key={i} href={p.link} target='_blank' rel='noopener noreferrer'
                                        className='text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium hover:bg-purple-500/15 transition-colors'>
                                        {p.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    {achievement.technologies && achievement.technologies.length > 0 && (
                        <div className='flex flex-wrap gap-1.5 content-start'>
                            {achievement.technologies.map((tech, i) => (
                                <span key={i} className='text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 font-medium'>
                                    {tech.displayName}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AchievementsPage
