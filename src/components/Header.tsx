'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../app/favicon.ico'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'
import LanguageSelector from '@/components/i18n/LanguageSelector'
import { HiMenu, HiX } from 'react-icons/hi'
import { passionOne } from '@/app/fonts'

const Header = () => {
    const strings = useAppSelector(selectTranslations)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const navItems = [
        { href: '/', label: strings['header.home'] },
        { href: '/experience', label: strings['header.experience'] },
        { href: '/achievements', label: 'Projets' },
        { href: '/#contact', label: strings['header.contact'] },
    ]

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/60 w-full'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='relative flex items-center h-16'>

                    {/* Logo */}
                    <Link href='/' className='shrink-0 flex items-center gap-2.5'>
                        <Image src={logoImage} alt='Maël Feri' className='w-7 h-7' />
                        <span className={`${passionOne.className} text-lg font-black uppercase tracking-tight text-gray-900 dark:text-white`}>
                            Maël Feri
                        </span>
                    </Link>

                    {/* Desktop nav — truly centered */}
                    <nav className='hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8'>
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className='text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop actions */}
                    <div className='hidden md:flex items-center gap-3 ml-auto'>
                        <LanguageSelector />
                        <ThemeSwitcher />
                        <a
                            href='/cv.pdf'
                            target='_blank'
                            className='px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-80 transition-opacity duration-200'
                        >
                            {strings['header.cv']}
                        </a>
                    </div>

                    {/* Mobile controls */}
                    <div className='flex items-center gap-1 lg:hidden ml-auto'>
                        <LanguageSelector />
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsNavbarOpen(v => !v)}
                            className='p-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                            aria-label='Toggle menu'
                        >
                            {isNavbarOpen ? <HiX className='w-5 h-5' /> : <HiMenu className='w-5 h-5' />}
                        </button>
                    </div>
                </div>

                {/* Mobile nav */}
                {isNavbarOpen && (
                    <div className='lg:hidden border-t border-gray-100 dark:border-gray-800/60 py-6 space-y-1'>
                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                onClick={() => setIsNavbarOpen(false)}
                                className='block px-2 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className='pt-4 border-t border-gray-100 dark:border-gray-800/60'>
                            <a
                                href='/cv.pdf'
                                target='_blank'
                                className='inline-flex px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-80 transition-opacity duration-200'
                            >
                                {strings['header.cv']}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
