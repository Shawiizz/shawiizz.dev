'use client'

import { passionOne, poppins } from '@/app/fonts'
import Image from 'next/image'
import meImage from '../../public/me.png'
import contactImage from '../../public/contact.png'
import schoolImage from '../../public/school.png'
import { projectsPerCategory } from '@/util/data/Projects'
import Link from 'next/link'
import React from 'react'
import { skills } from '@/util/data/Skills'
import ProjectView from '@/components/home/ProjectView'
import AnimatedTitle from '@/components/home/AnimatedTitle'
import Footer from '@/components/Footer'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'
import Technologies from '@/components/home/Technologies'

export default function Home() {
    const strings = useAppSelector(selectTranslations)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <section className='flex flex-col justify-center items-center h-screen mb-20'>
                <AnimatedTitle />
                <h2 className={`text-center text-gray-600 dark:text-white md:text-4xl text-3xl font-normal tracking-[.561em] mt-7`}>{strings['home.subtitle']}</h2>
                <Link href={`#myself`}
                      className={`box-border h-[5vw] w-[5vw] rotate-45 transition-[border-width] duration ease-[ease-in-out] absolute animate-[fadeIn_5s] border-solid border-black bottom-[10%] border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 dark:border-white`}>
                </Link>
            </section>
            <section
                className={`md:mb-10 mb-0 flex justify-between items-center md:w-full w-[90%] md:mt-20 bg-[#fff8f3] dark:bg-gray-800 md:rounded-none rounded-lg md:shadow-none shadow-xl lg:h-[30rem]`}
                id={`myself`}>
                <div className={`flex flex-col md:ml-20 mx-6 my-8`}>
                    <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(45deg,#0688fb_0%,#ac07f7_100%)] dark:bg-[linear-gradient(45deg,#2b9cff_0%,#ac07f7_100%)] font-semibold`}>{strings['home.section.1.title']}</h2>
                    <p className={`pt-5 tracking-[.054em] max-w-4xl text-gray-800 dark:text-white font-normal ${poppins.className} text-[1.35rem] md:text-[1.5rem] leading-[1.2em] md:mr-[5rem]`}>{getLocaleStringAsArgs(strings['home.section.1.text'])[0]}{new Date().getFullYear() - 2004}{getLocaleStringAsArgs(strings['home.section.1.text'])[2]}</p>
                </div>
                <div className={`hidden lg:flex h-full w-[35%] bg-[#6e8ef5] justify-center items-center`}>
                    <Image src={meImage} alt={'Computer science'}
                           className={`block w-auto max-h-[30rem]`} />
                </div>
            </section>
            <section
                className={`mt-20 md:mb-20 flex flex-row-reverse justify-between items-center md:w-full w-[90%] bg-[#fff8f3] dark:bg-gray-800 md:rounded-none rounded-lg md:shadow-none shadow-xl lg:h-[30rem] gap-x-8`}
                id={`studies`}>
                <div className={`flex flex-col md:mr-20 my-8 mx-6 md:mx-12`}>
                    <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(180deg,#377cef_0%,#fa4bc8_100%)] dark:bg-[linear-gradient(180deg,#A9C9FF_0%,#FFBBEC_100%)] font-semibold`}>{strings['home.section.2.title']}</h2>
                    <p className={`pt-5 tracking-[.054em] max-w-4xl text-gray-800 dark:text-white font-normal ${poppins.className} text-[1.35rem] md:text-[1.5rem] leading-[1.2em] md:mr-[5rem]`}>{strings['home.section.2.text']}</p>
                </div>
                <div className={`hidden lg:flex h-full w-[35%] bg-[#6e8ef5] justify-center items-center`}>
                    <Image src={schoolImage} alt={'School'} className={`block w-auto max-h-[20rem]`} />
                </div>
            </section>
            <section
                className={`pt-20 pb-20 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-16`}
                id={`projects`}>
                <ProjectView projects={projectsPerCategory.personal} title={strings['projects.solo']} />
                <ProjectView projects={projectsPerCategory.team} title={strings['projects.team']} />
            </section>
            <div className='w-full overflow-hidden leading-[0] rotate-180 dark:hidden'>
                <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'
                     className={`relative block w-[calc(100%_+_1.3px)] md:h-[60px] h-[30px]`}
                     preserveAspectRatio='none'>
                    <path d='M1200 120L0 16.48 0 0 1200 0 1200 120z' className='fill-[#fff8f3]'></path>
                </svg>
            </div>
            <section
                className={`flex justify-evenly items-center w-full md:pt-10 bg-[#fff8f3] dark:bg-transparent md:py-auto py-4`}
                id={`technologies`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} techGradient font-semibold`}>{strings['home.section.tech.title']}</h2>
                    <p className={`ml-6 mr-6 md:ml-0 md:mr-0 pt-5 tracking-[.054em] text-gray-800 dark:text-white font-semibold text-[1.3rem] md:text-[1.5rem] leading-[1.2em] text-center max-w-screen-md`}>{strings['home.section.tech.text']}</p>
                    <div className={`flex flex-row flex-wrap gap-10 justify-center mt-10 ml-5 mr-5`}>
                        <Technologies />
                    </div>
                </div>
            </section>
            <div className='w-full overflow-hidden leading-[0] relative bottom-1 dark:hidden'>
                <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'
                     className={`relative block w-[calc(100%_+_1.3px)] md:h-[60px] h-[30px]`}
                     preserveAspectRatio='none'>
                    <path
                        d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
                        className='fill-[#fff8f3]'></path>
                </svg>
            </div>
            <section
                className={`flex text-center justify-around items-center ml-10 mr-10 md:pt-20 md:w-full w-80%`}
                id={`contact`}>
                <div className={`text-left dark:text-white`}>
                    <h2 className={`text-[4.5em] ${passionOne.className} contactGradient font-semibold mb-5`}>{strings['home.section.contact.title']}</h2>
                    <p className={`pb-5 text-2xl tracking-[.054em] font-bold`}>{strings['home.section.contact.text']}</p>
                    <p>{strings['home.section.contact.discord']} <Link
                        href={`https://discord.com/users/436832490263412736`}
                        className={`decoration-0 tracking-[.054em] font-extralight`}>Maël Feri</Link>
                    </p>
                    <p>{strings['home.section.contact.mail']} <Link href={`mailto:shaweereso@gmail.com`}
                                                                    className={`decoration-0 tracking-[.054em] font-extralight`}>shaweereso@gmail.com</Link>
                    </p>
                    <h3 className={`text-3xl tracking-[.054em] font-bold mt-10`}>{getLocaleStringAsArgs(strings['home.section.contact.github'])[0]}
                        <Link
                            href={`https://github.com/Shawiizz`}
                            className={`decoration-dotted tracking-[.054em] font-extralight underline`}>{getLocaleStringAsArgs(strings['home.section.contact.github'])[1]}</Link>{getLocaleStringAsArgs(strings['home.section.contact.github'])[2]}
                    </h3>
                </div>
                <Image src={contactImage} alt={'Contact'}
                       className={`hidden md:block w-[30vw] h-auto mb-20`} />
            </section>
            <Footer />
        </main>
    )
}
