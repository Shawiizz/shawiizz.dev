'use client'

import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { passionOne, poppins } from '@/app/fonts'
import { experiences, experienceTypes } from '@/util/data/Experiences'
import { formations } from '@/util/data/Education'
import Footer from '@/components/Footer'

const ExperiencePage = () => {
    const strings = useAppSelector(selectTranslations)

    return (
        <main className='flex min-h-screen flex-col items-center pt-16 bg-white dark:bg-gray-950'>

            {/* ── HERO ── */}
            <section className='w-full border-b border-gray-100 dark:border-gray-800/60 py-24 md:py-32'>
                <div className='max-w-6xl mx-auto px-6'>
                    <p className={`${poppins.className} text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 mb-8`}>
                        {strings['experience.page.eyebrow']}
                    </p>
                    <h1 className={`${passionOne.className} text-[14vw] sm:text-[10vw] md:text-[8vw] font-black uppercase leading-none tracking-tight`}>
                        <span className='text-gray-900 dark:text-white'>Expé</span>
                        <span className='text-outlined'>riences</span>
                    </h1>
                    <p className={`mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed ${poppins.className}`}>
                        {strings['experience.subtitle']}
                    </p>
                </div>
            </section>

            {/* ── EXPERIENCES ── */}
            <section className='w-full'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className='relative'>
                        {/* Timeline bar */}
                        <div className='absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800' />

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className='relative pl-10 md:pl-16 py-14 md:py-16 border-b border-gray-100 dark:border-gray-800/60'
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-14 md:top-16 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white dark:border-gray-950 ${index === 0 ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`} />

                                <div className='grid md:grid-cols-[200px_1fr] gap-8 md:gap-16'>
                                    {/* Left — meta */}
                                    <div className='space-y-3'>
                                        <div className='flex flex-wrap gap-2'>
                                            <span className='text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300'>
                                                {experienceTypes[exp.type]}
                                            </span>
                                            {exp.tags?.map((tag, i) => (
                                                <span key={i} className='text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300'>
                                                    {tag}
                                                </span>
                                            ))}
                                            {index === 0 && (
                                                <span className='flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'>
                                                    <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block' />
                                                    {strings['experience.page.status.active']}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-sm text-gray-500 dark:text-gray-400 ${poppins.className}`}>
                                            {exp.period}
                                        </p>
                                        <p className={`text-sm text-gray-400 dark:text-gray-500 ${poppins.className}`}>
                                            {exp.location}
                                        </p>
                                    </div>

                                    {/* Right — content */}
                                    <div className='space-y-6'>
                                        <div>
                                            <h2 className={`${passionOne.className} text-4xl md:text-5xl font-black uppercase leading-none text-gray-900 dark:text-white mb-2`}>
                                                {exp.company}
                                            </h2>
                                            <p className={`text-base font-medium text-gray-500 dark:text-gray-400 ${poppins.className}`}>
                                                {exp.title}
                                            </p>
                                        </div>

                                        <div className='w-8 h-px bg-gray-200 dark:bg-gray-700' />

                                        <ul className={`space-y-2 ${poppins.className}`}>
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className='flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                                                    <span className='mt-2 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0' />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.technologies && (
                                            <div className='flex flex-wrap gap-1.5 pt-2'>
                                                {exp.technologies.map((tech, i) => (
                                                    <span key={i} className='text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 font-medium'>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORMATION ── */}
            <section className='w-full border-t border-gray-100 dark:border-gray-800/60' id='formation'>
                <div className='max-w-6xl mx-auto px-6 py-24 md:py-32'>
                    <p className={`${poppins.className} text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 mb-8`}>
                        {strings['experience.formation.eyebrow']}
                    </p>
                    <h2 className={`${passionOne.className} text-[10vw] sm:text-[7vw] md:text-[5.5vw] font-black uppercase leading-none tracking-tight mb-16`}>
                        <span className='text-gray-900 dark:text-white'>Par</span>
                        <span className='text-outlined'>cours</span>
                    </h2>

                    <div className='space-y-0'>
                        {formations.map((f, i) => (
                            <div key={i} className='border-t border-gray-100 dark:border-gray-800/60 py-10 grid md:grid-cols-[180px_1fr] gap-6 md:gap-16'>
                                {/* Period + status */}
                                <div className='space-y-3 pt-0.5'>
                                    <p className={`text-sm text-gray-500 dark:text-gray-400 ${poppins.className}`}>
                                        {f.period}
                                    </p>
                                    <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full border ${
                                        f.status === 'completed'
                                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                                            : f.status === 'in-progress'
                                            ? 'bg-amber-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300'
                                            : 'bg-gray-500/10 border-gray-400/30 text-gray-500 dark:text-gray-400'
                                    }`}>
                                        {f.status === 'completed' ? strings['experience.formation.status.completed'] : f.status === 'in-progress' ? strings['experience.formation.status.inprogress'] : strings['experience.formation.status.planned']}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className='space-y-2'>
                                    <h3 className='text-lg font-bold text-gray-900 dark:text-white leading-snug'>
                                        {f.title}
                                    </h3>
                                    <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                                        {f.institution}
                                    </p>
                                    {f.description && (
                                        <p className={`text-sm text-gray-500 dark:text-gray-500 leading-relaxed pt-1 ${poppins.className}`}>
                                            {f.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default ExperiencePage
