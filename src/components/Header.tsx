'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../app/favicon.ico'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'
import LanguageSelector from '@/components/i18n/LanguageSelector'
import { HiMenu, HiX, HiDocumentDownload } from 'react-icons/hi'

const CVButton = ({ strings, className }: { strings: Record<StringKey, string>, className?: string }) => {
    return (
        <a 
            href='/cv.pdf' 
            target='_blank'
            className={`${className ?? ''} inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
        >
            <HiDocumentDownload className="w-4 h-4 mr-2" />
            {strings['header.cv']}
        </a>
    )
}

const Header = () => {
    const strings = useAppSelector(selectTranslations)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    const closeNavBar = () => {
        setIsNavbarOpen(false)
    }

    const navItems = [
        { href: '/', label: strings['header.home'] },
        { href: '/#myself', label: strings['header.about'] },
        { href: '/experience', label: strings['header.experience'] },
        { href: '/achievements', label: 'Réalisations' },
        { href: '/#contact', label: strings['header.contact'] },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/10 dark:border-gray-700/10 shadow-sm w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="p-2 transition-all duration-300 group-hover:scale-110">
                            <Image src={logoImage} alt="Maël Feri" className="w-8 h-8" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                                Maël Feri
                            </span>
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                                Développeur Full-Stack
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center space-x-1 px-3 py-2 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="relative px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300 group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-white/80 dark:bg-gray-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        <CVButton strings={strings} />
                        <div className="flex items-center space-x-2 p-1 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                            <LanguageSelector />
                            <ThemeSwitcher />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center space-x-2 lg:hidden">
                        <div className="flex items-center space-x-1 p-1 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg">
                            <LanguageSelector />
                            <ThemeSwitcher />
                        </div>
                        <button
                            onClick={toggleNavbar}
                            className="p-2.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                        >
                            {isNavbarOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isNavbarOpen && (
                    <div className="lg:hidden py-6 border-t border-gray-200/20 dark:border-gray-700/20">
                        <div className="space-y-3">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={closeNavBar}
                                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 rounded-xl transition-all duration-300 mx-2"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-6 mx-2 border-t border-gray-200/20 dark:border-gray-700/20">
                                <CVButton strings={strings} className="w-full justify-center" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header