'use client'

import { passionOne, poppins } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/Footer'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'
import { Profile, getAge } from '@/util/data/Profile'
import Technologies from '@/components/home/Technologies'
import ExperiencePreview from '@/components/home/ExperiencePreview'
import AchievementsPreview from '@/components/home/AchievementsPreview'
import EnhancedContact from '@/components/home/EnhancedContact'
import SectionHeader from '@/components/SectionHeader'
import HeroMarquee from '@/components/home/HeroMarquee'

export default function Home() {
    const strings = useAppSelector(selectTranslations)
    const age = getAge()

    return (
        <main className='flex min-h-screen flex-col items-center'>

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden'>
                {/* Background */}
                <div className='absolute inset-0 bg-white dark:bg-gray-950' />
                <div className='absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-25 dark:opacity-15 -top-40 -right-40 bg-blue-100 dark:bg-blue-900 pointer-events-none' />
                <div className='absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 dark:opacity-10 -bottom-20 -left-20 bg-purple-100 dark:bg-purple-900 pointer-events-none' />

                <div className='relative z-10 text-center px-6 w-full max-w-7xl mx-auto'>
                    {/* Name */}
                    <h1 className={`${passionOne.className} font-black uppercase leading-none tracking-tight select-none`}>
                        <span className='block sm:inline text-[28vw] sm:text-[17vw] md:text-[14vw] lg:text-[12vw] text-gray-900 dark:text-white'>MAËL</span>
                        <span className='hidden sm:inline-block w-[2vw]' />
                        <span className='block sm:inline text-[28vw] sm:text-[17vw] md:text-[14vw] lg:text-[12vw] text-outlined'>FERI</span>
                    </h1>

                </div>

                {/* Ghost marquee — full bleed, below name */}
                <div className='relative z-10 w-full mt-8'>
                    <HeroMarquee />
                </div>

                <div className='relative z-10 text-center px-6 w-full max-w-7xl mx-auto mt-14'>
                    {/* CTAs */}
                    <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                        <Link
                            href='#about'
                            className='px-7 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-85 transition-opacity'
                        >
                            {strings['home.hero.cta.discover']}
                        </Link>
                        <Link
                            href='/achievements'
                            className='px-7 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors'
                        >
                            {strings['home.hero.cta.achievements']}
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30'>
                    <div className='w-5 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex justify-center pt-1.5'>
                        <div className='w-0.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll-dot' />
                    </div>
                </div>
            </section>

            {/* ── ABOUT ────────────────────────────────────────────── */}
            <section
                id='about'
                className='w-full border-t border-gray-100 dark:border-gray-800/60 py-24 md:py-32'
            >
                <div className='max-w-6xl mx-auto px-6'>
                    <div className='grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-12 md:gap-20 items-start'>

                        {/* Left — stats (hidden on mobile) */}
                        <div className='hidden md:block space-y-10'>
                            <p className={`text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-600 ${poppins.className}`}>
                                {strings['home.about.eyebrow']}
                            </p>
                            {[
                                { number: String(age), label: strings['home.about.stat.age.label'], sub: Profile.location },
                                { number: String(Profile.startYear), label: '', sub: strings['home.about.stat.code.sub'] },
                                { number: Profile.school, label: '', sub: strings['home.about.stat.school.sub'] },
                            ].map((stat, i) => (
                                <div key={i} className='border-l-2 border-gray-900 dark:border-white pl-5'>
                                    <div className={`${passionOne.className} text-3xl font-black text-gray-900 dark:text-white leading-none`}>
                                        {stat.number}{stat.label && <span className='text-lg ml-1 text-gray-400'>{stat.label}</span>}
                                    </div>
                                    <p className={`text-xs text-gray-400 dark:text-gray-500 mt-1 ${poppins.className}`}>{stat.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right — text */}
                        <div className='space-y-8 md:pt-12'>
                            <p className={`text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light ${poppins.className}`}>
                                {getLocaleStringAsArgs(strings['home.section.1.text'])[0]}{age}{getLocaleStringAsArgs(strings['home.section.1.text'])[2]}
                            </p>

                            <div className='w-12 h-px bg-gray-200 dark:bg-gray-700' />

                            <p className={`text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed ${poppins.className}`}>
                                {strings['home.section.2.text']}
                            </p>

                            <div className='flex flex-wrap gap-6 pt-2'>
                                <Link
                                    href='/experience'
                                    className='inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:gap-3 transition-all duration-200'
                                >
                                    {strings['home.about.link.career']}
                                    <span className='text-gray-400'>→</span>
                                </Link>
                                <Link
                                    href='/experience#formation'
                                    className='inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:gap-3 transition-all duration-200'
                                >
                                    {strings['home.about.link.education']}
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCES ──────────────────────────────────────── */}
            <section className='w-full border-t border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-900/30'>
                <div className='flex flex-col items-center max-w-7xl mx-auto px-4 py-16'>
                    <ExperiencePreview title={strings['experience.preview.title']} />
                </div>
            </section>

            {/* ── ACHIEVEMENTS ─────────────────────────────────────── */}
            <section className='w-full border-t border-gray-100 dark:border-gray-800/60'>
                <AchievementsPreview title={strings['achievements.preview.title']} />
            </section>

            {/* ── TECHNOLOGIES ─────────────────────────────────────── */}
            <section className='w-full border-t border-gray-100 dark:border-gray-800/60 py-16'>
                <div className='max-w-6xl mx-auto px-6'>
                    <SectionHeader title={strings['home.section.tech.title']} eyebrow={strings['home.section.tech.eyebrow']} />
                    <Technologies />
                </div>
            </section>

            {/* ── CONTACT ──────────────────────────────────────────── */}
            <section className='w-full border-t border-gray-100 dark:border-gray-800/60'>
                <EnhancedContact strings={strings} />
            </section>

            <Footer />
        </main>
    )
}
