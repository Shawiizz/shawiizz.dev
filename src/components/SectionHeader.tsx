import React from 'react'
import { passionOne, poppins } from '@/app/fonts'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    eyebrow?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, eyebrow }) => {
    const words = title.split(' ')

    return (
        <div className='text-center mb-12'>
            {eyebrow && (
                <p className={`${poppins.className} text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-5`}>
                    {eyebrow}
                </p>
            )}

            <h2 className={`${passionOne.className} text-[3.8rem] md:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight`}>
                {words.map((word, i) => (
                    <span
                        key={i}
                        className={`inline-block mr-[0.2em] last:mr-0 ${
                            i % 2 === 0
                                ? 'text-gray-900 dark:text-white'
                                : 'text-outlined'
                        }`}
                    >
                        {word}
                    </span>
                ))}
            </h2>

            {subtitle && (
                <p className='mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed'>
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
