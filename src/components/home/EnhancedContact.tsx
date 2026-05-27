'use client'

import React from 'react'
import { poppins } from '@/app/fonts'
import SectionHeader from '@/components/SectionHeader'
import { StringKey } from '@/features/i18n/TranslatorSlice'
import { Profile } from '@/util/data/Profile'

interface EnhancedContactProps {
    strings: Record<StringKey, string>
}

const EnhancedContact: React.FC<EnhancedContactProps> = ({ strings }) => {
    return (
        <section className='w-full py-24 md:py-32' id='contact'>
            <div className='max-w-6xl mx-auto px-6'>
                <SectionHeader title={strings['home.section.contact.title']} eyebrow={strings['contact.eyebrow']} />

                {/* Email — primary CTA */}
                <div className='mt-12 mb-14 flex justify-center'>
                    <a href={`mailto:${Profile.email}`} className='group inline-block'>
                        <span className='text-[5vw] sm:text-[4vw] md:text-[3vw] font-bold leading-none text-gray-900 dark:text-white group-hover:opacity-60 transition-opacity duration-300 tracking-tight'>
                            {Profile.email}
                        </span>
                        <span className='block w-0 h-px bg-gray-900 dark:bg-white group-hover:w-full transition-all duration-500 mt-1' />
                    </a>
                </div>

                {/* Divider */}
                <div className='w-full h-px bg-gray-100 dark:bg-gray-800 mb-10' />

                {/* Bottom row */}
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8'>

                    {/* Social + location */}
                    <div className='flex items-center gap-6'>
                        <a
                            href={Profile.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                        >
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                            </svg>
                            {Profile.githubUsername}
                        </a>
                        <a
                            href={Profile.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                        >
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                            </svg>
                            LinkedIn
                        </a>
                        <p className={`ml-auto text-sm text-gray-400 dark:text-gray-600 ${poppins.className}`}>
                            {Profile.location}
                        </p>
                    </div>

                    {/* CV download */}
                    <a
                        href={Profile.cvUrl}
                        target='_blank'
                        className='self-start sm:self-center px-7 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 inline-flex items-center gap-2'
                    >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                        </svg>
                        {strings['home.section.contact.cta.cv']}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default EnhancedContact
