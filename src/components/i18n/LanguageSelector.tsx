'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { LocaleState, selectTranslations, setLocale } from '@/features/i18n/TranslatorSlice'
import { getFlag, getLocales, locales } from '@/i18n/Language'
import { useAppSelector } from '@/util/redux/Hooks'

const LanguageSelector = () => {
    const strings = useAppSelector(selectTranslations)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    function handleLanguageChange(locale: LocaleState, saveToStorage: boolean = true) {
        locales.current = locale
        const mergedStrings = Object.assign({}, locales.default.strings, locale.strings)
        dispatch(setLocale({ ...locale, strings: mergedStrings }))
        saveToStorage && localStorage.setItem('locale', locales.current.initials)
        setOpen(false)
    }

    useEffect(() => {
        const getBrowserLanguage = () =>
            localStorage.getItem('locale') || (navigator.language.includes('-') ? navigator.language.split('-')[0] : navigator.language)
        handleLanguageChange(locales.available.find(l => l.initials === getBrowserLanguage()) || locales.current, false)
    }, [dispatch])

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const available = getLocales().available
    const CurrentFlag = getFlag(locales.current)

    return (
        <div className='relative' ref={ref}>
            <button
                onClick={() => setOpen(v => !v)}
                className='flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                aria-label='Changer de langue'
            >
                <CurrentFlag />
                <span className='uppercase text-xs tracking-wider'>{locales.current.initials}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
            </button>

            {open && (
                <div className='absolute right-0 top-full mt-1 z-50 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg dark:shadow-black/30 overflow-hidden min-w-[130px]'>
                    {available.map((locale, i) => {
                        const Flag = getFlag(locale)
                        const active = locales.current.initials === locale.initials
                        return (
                            <button
                                key={i}
                                onClick={() => handleLanguageChange(locale)}
                                className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                                    active
                                        ? 'text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/60'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40'
                                }`}
                            >
                                <Flag />
                                {locale.name}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
