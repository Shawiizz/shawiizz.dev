'use client'

import { HiUserCircle } from 'react-icons/hi'
import { List, Tabs } from 'flowbite-react'
import { skills } from '@/util/data/Skills'
import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { replaceLocaleStringArgs } from '@/util/LocaleHelper'
import { HiCheckCircle } from 'react-icons/hi2'
import { projects, projectsPerCategory } from '@/util/data/Projects'
import ProjectView from '@/components/home/ProjectView'
import { ProjectCard } from '@/components/home/ProjectCard'

const Skills = () => {
    const strings = useAppSelector(selectTranslations)

    return (
        <section className="pt-16">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}>Compétences</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Ici sont présentées les compétences acquises à l'IUT, ainsi que les projets associés réalisés au cours de mes deux premières années de BUT Informatique.</p>
            </div>
            <div className="overflow-x-auto">
                <Tabs aria-label="Full width tabs" style={`fullWidth`}>
                    {
                        Object.values(skills).map((skill, index) => {
                            return (
                                <Tabs.Item key={`tab-${index}`} active title={replaceLocaleStringArgs(strings['iut.skill'], index+1)} icon={HiUserCircle}>
                                    <div className={`flex flex-col ml-6`}>
                                        <div className={`pt-4 pb-8`}>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300">{skill.name}</h2>
                                            <ul>
                                                {skill.description.map((desc, index) => {
                                                    return (
                                                        <li key={`tab-item-${index}`}
                                                            className='font-semibold text-gray-700 dark:text-gray-300 text-left flex gap-1 items-center'>
                                                            <HiCheckCircle />
                                                            {desc}
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>
                                        </div>
                                        {projects.filter(project => project.skills?.includes(skill)).length > 0 &&
                                            <div>
                                            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-300'>Projets
                                                associés</h2>
                                            <div
                                                className={`flex flex-col w-full flex-wrap md:flex-row md:gap-8 md:items-stretch mt-8`}>
                                                {
                                                    projects
                                                        .filter(project => project.skills?.includes(skill))
                                                        .map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                }
                                            </div>
                                        </div>}
                                    </div>
                                </Tabs.Item>
                            )
                        })
                    }
                </Tabs>
            </div>
        </section>
    )
}

export default Skills