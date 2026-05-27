'use client'

import React from 'react'
import { HiStar, HiExternalLink, HiArrowRight, HiCode } from 'react-icons/hi'
import TechOverflowBadge from '@/components/TechOverflowBadge'
import { sortedAchievements, formatDateRange } from '@/util/data/Achievements'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

interface AchievementsPreviewProps {
    title: string
    subtitle?: string
}

const categoryLabel = (c: string) =>
    c === 'personal' ? 'Solo' : c === 'team' ? 'Équipe' : c === 'academic' ? 'Académique' : 'Autre'

const typeLabel = (t: string) =>
    t === 'project' ? 'Projet' : t === 'competition' ? 'Compétition' : t === 'recognition' ? 'Reconnaissance' : 'Contribution'

const AchievementsPreview: React.FC<AchievementsPreviewProps> = ({ title, subtitle }) => {
    const [hero, ...rest] = sortedAchievements
    const previews = rest.slice(0, 2)

    return (
        <section className='w-full bg-gray-100 dark:bg-[unset]'>
            <div className='max-w-7xl mx-auto px-4 py-16'>
                <SectionHeader title={title} subtitle={subtitle} eyebrow='Portfolio & Projets' />

                {/* Hero card — full width, horizontal (desktop only) */}
                <div className='hidden md:block relative rounded-2xl border border-purple-200 dark:border-purple-500/20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/40 overflow-hidden mb-4 group hover:border-purple-300 dark:hover:border-purple-400/40 transition-all duration-500'
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}>

                    {/* Glows */}
                    <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-400/30 dark:group-hover:bg-purple-600/20 transition-all duration-700 pointer-events-none' />
                    <div className='absolute -top-10 right-32 w-48 h-48 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-400/30 dark:group-hover:bg-blue-600/20 transition-all duration-700 pointer-events-none' />

                    <div className='relative flex flex-col md:flex-row gap-8 p-8'>
                        {/* Left — info */}
                        <div className='flex-1 min-w-0'>
                            <div className='flex flex-wrap items-center gap-2 mb-5'>
                                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'>
                                    {typeLabel(hero.type)}
                                </span>
                                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-200/80 dark:bg-white/5 border border-gray-300/80 dark:border-white/10 text-gray-600 dark:text-gray-400'>
                                    {categoryLabel(hero.category)}
                                </span>
                                <span className='text-xs text-gray-500 ml-auto'>{formatDateRange(hero)}</span>
                            </div>

                            <h3 className='text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight'>
                                {hero.title}
                            </h3>

                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-xl'>
                                {hero.description}
                            </p>

                            {hero.link && (
                                <a
                                    href={hero.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-200'
                                >
                                    Voir le projet
                                    <HiExternalLink className='w-4 h-4' />
                                </a>
                            )}
                        </div>

                        {/* Right — tech stack */}
                        {hero.technologies && (
                            <div className='md:w-56 shrink-0 self-start pt-1'>
                                <div className='flex items-center gap-1.5 mb-3 text-gray-400 dark:text-gray-500'>
                                    <HiCode className='w-3.5 h-3.5' />
                                    <span className='text-xs font-semibold uppercase tracking-wider'>Stack</span>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {hero.technologies.map((tech, i) => (
                                        <span key={i} className='text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium'>
                                            {tech.displayName}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop bottom row — 2 compact cards + CTA */}
                <div className='hidden md:grid md:grid-cols-3 gap-4'>
                    {previews.map((achievement, i) => (
                        <div key={i} className='rounded-2xl p-5 border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 group'>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                                    achievement.type === 'project' ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' :
                                    achievement.type === 'contribution' ? 'bg-blue-500/15 border-blue-500/30 text-blue-700 dark:text-blue-300' :
                                    'bg-amber-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300'
                                }`}>
                                    {typeLabel(achievement.type)}
                                </span>
                                <span className='text-xs text-gray-400 ml-auto'>{formatDateRange(achievement)}</span>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                {achievement.title}
                            </h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3'>
                                {achievement.description}
                            </p>
                            {achievement.technologies && (
                                <div className='flex flex-wrap gap-1.5'>
                                    {achievement.technologies.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className='text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-300'>
                                            {tech.displayName}
                                        </span>
                                    ))}
                                    {achievement.technologies.length > 3 && (
                                        <TechOverflowBadge techs={achievement.technologies.slice(3).map(t => t.displayName)} />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href='/achievements'
                        className='group flex items-center justify-between rounded-2xl p-5 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200'
                    >
                        <div>
                            <p className='text-gray-900/40 dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5'>{sortedAchievements.length} projets</p>
                            <p className='text-gray-900 dark:text-white font-bold text-lg leading-tight'>Voir toutes<br />mes projets</p>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-gray-900/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-gray-900/20 dark:group-hover:bg-white/20 transition-colors duration-200 shrink-0'>
                            <HiArrowRight className='w-5 h-5 text-gray-900 dark:text-white group-hover:translate-x-0.5 transition-transform duration-200' />
                        </div>
                    </Link>
                </div>

                {/* Mobile carousel — hero + previews + CTA */}
                <div className='md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2'>
                    {/* Hero — same style as desktop */}
                    <div className='snap-center shrink-0 w-[82vw] relative rounded-2xl border border-purple-200 dark:border-purple-500/20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/40 overflow-hidden group'
                        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}>
                        <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none' />
                        <div className='absolute -top-10 right-32 w-48 h-48 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none' />
                        <div className='relative p-8'>
                            <div className='flex flex-wrap items-center gap-2 mb-5'>
                                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'>{typeLabel(hero.type)}</span>
                                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-200/80 dark:bg-white/5 border border-gray-300/80 dark:border-white/10 text-gray-600 dark:text-gray-400'>{categoryLabel(hero.category)}</span>
                                <span className='text-xs text-gray-500 ml-auto'>{formatDateRange(hero)}</span>
                            </div>
                            <h3 className='text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight'>{hero.title}</h3>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>{hero.description}</p>
                            {hero.link && (
                                <a href={hero.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors mb-6'>
                                    Voir le projet <HiExternalLink className='w-4 h-4' />
                                </a>
                            )}
                            {hero.technologies && (
                                <div className='flex flex-wrap gap-2'>
                                    {hero.technologies.map((tech, i) => (
                                        <span key={i} className='text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium'>{tech.displayName}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Preview cards */}
                    {previews.map((achievement, i) => (
                        <div key={i} className='snap-center shrink-0 w-[82vw] rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50'>
                            <div className='flex items-center gap-2 mb-5'>
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                                    achievement.type === 'project' ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' :
                                    'bg-blue-500/15 border-blue-500/30 text-blue-700 dark:text-blue-300'
                                }`}>{typeLabel(achievement.type)}</span>
                                <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-500'>{categoryLabel(achievement.category)}</span>
                                <span className='text-xs text-gray-400 ml-auto'>{formatDateRange(achievement)}</span>
                            </div>
                            <h3 className='text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight'>{achievement.title}</h3>
                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>{achievement.description}</p>
                            {achievement.technologies && (
                                <div className='flex flex-wrap gap-2'>
                                    {achievement.technologies.slice(0, 5).map((tech, idx) => (
                                        <span key={idx} className='text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 font-medium'>{tech.displayName}</span>
                                    ))}
                                    {achievement.technologies.length > 5 && (
                                        <span className='text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-500'>+{achievement.technologies.length - 5}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* CTA */}
                    <Link href='/achievements' className='snap-center shrink-0 w-[82vw] group flex items-center justify-between rounded-2xl p-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200'>
                        <div>
                            <p className='text-gray-900/40 dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5'>{sortedAchievements.length} projets</p>
                            <p className='text-gray-900 dark:text-white font-bold text-lg leading-tight'>Voir toutes<br />mes projets</p>
                        </div>
                        <div className='w-10 h-10 shrink-0 rounded-full bg-gray-900/10 dark:bg-white/10 flex items-center justify-center'>
                            <HiArrowRight className='w-5 h-5 text-gray-900 dark:text-white' />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AchievementsPreview
