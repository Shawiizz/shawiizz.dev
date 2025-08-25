'use client'

import { passionOne, poppins } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'
import AnimatedTitle from '@/components/home/AnimatedTitle'
import Footer from '@/components/Footer'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'
import Technologies from '@/components/home/Technologies'
import ExperiencePreview from '@/components/home/ExperiencePreview'
import AchievementsPreview from '@/components/home/AchievementsPreview'
import EnhancedContact from '@/components/home/EnhancedContact'

export default function Home() {
    const strings = useAppSelector(selectTranslations)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <section className='relative flex items-center min-h-screen overflow-hidden w-full'>
                {/* Background moderne et minimaliste */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-900/80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                
                {/* Grille subtile en arrière-plan */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
                
                {/* Contenu principal aligné à gauche */}
                <div className="relative z-10 w-full px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-start">
                        
                        {/* Colonne gauche - Titre et description */}
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-6">
                                <AnimatedTitle/>
                                <div className="space-y-4">
                                    <h2 className={`text-gray-300 md:text-2xl text-xl font-light tracking-[.3em] ${poppins.className}`}>
                                        {strings['home.subtitle']}
                                    </h2>
                                    <p className="text-gray-400 md:text-lg text-base leading-relaxed">
                                        Étudiant en informatique passionné par le développement web, mobile et DevOps.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link 
                                    href="#myself" 
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                                >
                                    <span className="relative z-10">Découvrir mon profil</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                                <Link 
                                    href="/achievements" 
                                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                                >
                                    <span className="relative z-10">Mes réalisations</span>
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                        </div>
                                          
                    </div>
                </div>
                
                {/* Indicateur de scroll moderne */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3">
                    <div className="flex space-x-1">
                        <div className="w-1 h-8 bg-white/20 rounded-full"></div>
                        <div className="w-1 h-8 bg-white/40 rounded-full animate-pulse delay-200"></div>
                        <div className="w-1 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <Link 
                        href="#myself" 
                        className="text-white/60 text-xs font-medium tracking-wider hover:text-white/80 transition-colors duration-300"
                    >
                        DÉFILER
                    </Link>
                </div>
            </section>
            <section
                className="w-full bg-gradient-to-b from-gray-900/60 via-gray-700/40 to-gray-50/40 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-800/60"
                id="myself">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className={`text-4xl md:text-5xl ${passionOne.className} font-bold text-gray-900 dark:text-white`}>
                                {strings['home.section.1.title']}
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        </div>
                        
                        <p className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl ${poppins.className}`}>
                            {getLocaleStringAsArgs(strings['home.section.1.text'])[0]}{new Date().getFullYear() - 2004}{getLocaleStringAsArgs(strings['home.section.1.text'])[2]}
                        </p>
                        
                        <Link 
                            href="/experience" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group"
                        >
                            Découvrir mon parcours
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className="w-full bg-gradient-to-b from-gray-50/40 via-purple-50/30 to-white/60 dark:from-gray-800/60 dark:via-gray-800/40 dark:to-gray-900/60"
                id="studies">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className={`text-4xl md:text-5xl ${passionOne.className} font-bold text-gray-900 dark:text-white`}>
                                {strings['home.section.2.title']}
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                        </div>
                        
                        <p className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl ${poppins.className}`}>
                            {strings['home.section.2.text']}
                        </p>
                        
                        <Link 
                            href="/experience#formation" 
                            className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors group"
                        >
                            Voir mes études en détail
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='w-full bg-gradient-to-b from-white/60 via-blue-50/20 to-gray-50/30 dark:from-gray-900/60 dark:via-gray-900/40 dark:to-gray-800/50'>
                <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-16">
                    <ExperiencePreview 
                        title={strings['experience.preview.title']} 
                        subtitle={strings['experience.preview.subtitle']} 
                    />
                    <AchievementsPreview 
                        title={strings['achievements.preview.title']} 
                        subtitle={strings['achievements.preview.subtitle']} 
                    />
                </div>
            </section>
            
            <section className="w-full py-16 bg-gradient-to-b from-gray-50/30 via-gray-100/20 to-white/40 dark:from-gray-800/50 dark:via-gray-900/40 dark:to-gray-900/60">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            {strings['home.section.tech.title']}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {strings['home.section.tech.text']}
                        </p>
                    </div>
                    <Technologies />
                </div>
            </section>
            <EnhancedContact strings={strings} />
            <Footer/>
        </main>
    )
}
