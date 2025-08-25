'use client'

import React from 'react'
import { Card } from 'flowbite-react'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { passionOne, poppins } from '@/app/fonts'
import Link from 'next/link'
import Image from 'next/image'
import contactImage from '../../../public/contact.png'
import { StringKey } from '@/features/i18n/TranslatorSlice'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'

interface ContactInfo {
    icon: React.ElementType
    label: string
    value: string
    href: string
    color: string
}

interface EnhancedContactProps {
    strings: Record<StringKey, string>
}

const EnhancedContact: React.FC<EnhancedContactProps> = ({ strings }) => {
    const contactInfos: ContactInfo[] = [
        {
            icon: HiMail,
            label: strings['home.section.contact.mail'],
            value: 'maelferi04@gmail.com',
            href: 'mailto:maelferi04@gmail.com',
            color: 'text-red-500'
        },
        {
            icon: HiLocationMarker,
            label: strings['home.section.contact.location.label'],
            value: strings['home.section.contact.location.value'],
            href: '#',
            color: 'text-green-500'
        }
    ]

    const socialLinks = [
        {
            name: strings['home.section.contact.social.linkedin'],
            href: 'https://www.linkedin.com/in/ma%C3%ABl-feri-2b2177251/',
            icon: (
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
            ),
            color: 'hover:text-blue-600'
        },
        {
            name: strings['home.section.contact.social.github'],
            href: 'https://github.com/Shawiizz',
            icon: (
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
            ),
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: strings['home.section.contact.social.email'],
            href: 'mailto:maelferi04@gmail.com',
            icon: (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
            ),
            color: 'hover:text-red-500'
        }
    ]

    return (
        <section className='w-full bg-gradient-to-b from-gray-50/30 via-gray-100/40 via-gray-150/50 to-gray-200/60 dark:from-gray-800/50 dark:via-gray-800/60 dark:via-gray-900/80 dark:to-gray-900 py-20' id='contact'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className={`text-[4.5em] ${passionOne.className} contactGradient font-semibold mb-5`}>
                        {strings['home.section.contact.title']}
                    </h2>
                    <p className={`text-2xl tracking-[.054em] font-bold text-gray-800 dark:text-white ${poppins.className} mb-8`}>
                        {strings['home.section.contact.text']}
                    </p>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                </div>

                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='space-y-6'>
                            <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
                                {strings['home.section.contact.stayintouch.title']}
                            </h3>
                            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                                {strings['home.section.contact.stayintouch.text']}
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className='space-y-4'>
                            {contactInfos.map((contact, index) => (
                                <Card key={index} className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105'>
                                    <div className='flex items-center gap-4'>
                                        <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600`}>
                                            <contact.icon className='text-white text-xl' />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900 dark:text-white'>
                                                {contact.label}
                                            </h4>
                                            <a href={contact.href} className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                                                {contact.value}
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className='pt-8'>
                            <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                                {strings['home.section.contact.social.title']}
                            </h4>
                            <div className='flex gap-4'>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={`p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* GitHub Special Mention */}
                        <div className='bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600'>
                            <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                                {getLocaleStringAsArgs(strings['home.section.contact.github'])[0]}
                                <Link href='https://github.com/Shawiizz' className='text-blue-600 dark:text-blue-400 hover:underline mx-1'>
                                    {getLocaleStringAsArgs(strings['home.section.contact.github'])[1]}
                                </Link>
                                {getLocaleStringAsArgs(strings['home.section.contact.github'])[2]}
                            </h4>
                            <p className='text-gray-600 dark:text-gray-300'>
                                {strings['home.section.contact.github.description']}
                            </p>
                        </div>
                    </div>

                    {/* Contact Image & CTA */}
                    <div className='text-center space-y-8'>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse'></div>
                            <Image 
                                src={contactImage} 
                                alt={strings['home.section.contact.image.alt']} 
                                className='relative w-full max-w-md mx-auto h-auto'
                                priority
                            />
                        </div>

                        {/* Call to Action */}
                        <div className='space-y-6'>
                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                {strings['home.section.contact.cta.title']}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300'>
                                {strings['home.section.contact.cta.text']}
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <a 
                                    href='mailto:maelferi04@gmail.com'
                                    className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg'
                                >
                                    <HiMail className='w-5 h-5 mr-2' />
                                    {strings['home.section.contact.cta.email']}
                                </a>
                                <a 
                                    href='/cv.pdf'
                                    target='_blank'
                                    className='inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-400 dark:hover:bg-gray-700'
                                >
                                    <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                    </svg>
                                    {strings['home.section.contact.cta.cv']}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnhancedContact
