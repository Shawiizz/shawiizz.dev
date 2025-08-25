import Image from 'next/image'
import { Achievement, formatDateRange } from '@/util/data/Achievements'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'
import { Button, Card, Tooltip, Badge } from 'flowbite-react'
import React from 'react'
import { selectTheme } from '@/features/theme/ThemeSlice'
import { UsersIcon } from '@/components/icons/UsersIcon'
import { TECHNOLOGIES_TYPES } from '@/util/data/Technologies'
import { UserIcon } from '@/components/icons/UserIcon'
import { HiCalendar } from 'react-icons/hi'

export const AchievementCard = ({ title, description, link, technologies, persons, startDate, endDate, category }: Achievement) => {
    const strings = useAppSelector(selectTranslations)
    const mode = useAppSelector(selectTheme)

    const [technologyVisible, setTechnologyVisible] = React.useState(false)

    const technologyClick = () => {
        setTechnologyVisible(!technologyVisible)
    }

    return (
        <Card
            className='max-w-sm dark:bg-gray-700 border border-gray-300 dark:border-none mr-4 ml-4 md:mr-0 md:ml-0 mt-4 md:mt-0 shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
            <div className='flex justify-between items-start mb-2'>
                <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row items-center'>
                    {title}
                    {persons?.length && <Tooltip content={
                        <div className={`flex flex-col dark:bg-gray-900 bg-gray-100`}>
                            <p className={`text-gray-800 dark:text-white font-bold text-center text-lg mt-2 mb-2`}>{strings['project.collaborators']}</p>
                            <div className='my-1 h-px bg-gray-300 dark:bg-gray-600'></div>
                            <div className={`flex justify-start mt-4 flex-wrap gap-4`}>
                                {
                                    persons?.map((person, index) => {
                                        return (
                                            <a key={index} className={`flex flex-row gap-2 items-center flex-wrap border border-gray-300 dark:border-gray-600 p-2 rounded-md`} href={person.link}
                                               target={`_blank`}>
                                                {person?.icon ? <Image src={person.icon as string} alt={person.name} width={32} height={32} /> : <UserIcon />}
                                                <p className={`dark:text-white text-gray-800`}>{person.name}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    } className={`bg-gray-100 dark:bg-gray-900 pb-4 max-w-sm`}>
                        <span
                            className='ml-3 bg-blue-600 rounded-full bg-opacity-75 w-14 h-7 p-1.5 flex items-center justify-center'>
                        <UsersIcon />
                        <p className={`text-lg ml-0.5 font-semibold text-white`}>{persons.length}</p>
                        </span>
                    </Tooltip>}
                </h5>
                <Badge color='gray' size='sm' className='capitalize'>
                    {category === 'personal' ? 'Solo' : 
                     category === 'team' ? 'Équipe' : 
                     category === 'academic' ? 'Académique' : 'Autre'}
                </Badge>
            </div>
            
            <div className='flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-2'>
                <HiCalendar />
                {formatDateRange({ title, description, startDate, endDate, type: 'project', category })}
            </div>
            
            <p className='font-normal text-gray-700 dark:text-gray-300 mb-4'>
                {description}
            </p>
            
            <div className={`flex flex-row gap-2`}>
                {technologies && technologies.length > 0 && <Tooltip content={
                    <div className={`flex flex-col dark:bg-gray-900 bg-gray-100`}>
                        <p className={`text-gray-800 dark:text-white font-bold text-center text-lg mt-2 mb-2`}>{strings['header.technologies']}</p>
                        <div className='my-1 h-px bg-gray-300 dark:bg-gray-600'></div>
                        <div className={`flex justify-start mt-4 flex-wrap gap-4`}>
                            {
                                Object.entries(TECHNOLOGIES_TYPES).map((type) => {
                                    const technologiesFiltered = technologies?.filter(tech => tech.type.includes(type[0])) ?? [];

                                    return technologiesFiltered.length ? (
                                        <div key={type[0]} className={`flex flex-col gap-2 border border-gray-300 dark:border-gray-600 p-2 rounded-md`}>
                                            <p className={`text-black dark:text-white`}>{strings[type[1].displayName]}</p>
                                            <div className='my-1 h-px bg-gray-300 dark:bg-gray-600'></div>
                                            {technologiesFiltered?.map((tech, index) => {
                                                    return (
                                                        <a key={index} className={`flex flex-row gap-2 items-center`} href={tech.homepage}
                                                           target={`_blank`}>
                                                            <Image src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                                                                   alt={tech.displayName} width={32} height={32} />
                                                            <p className={`dark:text-white text-gray-800`}>{tech.displayName}</p>
                                                        </a>
                                                    )
                                                }
                                            )}
                                        </div>
                                    ) : null
                                })
                            }
                        </div>
                    </div>
                } className={`bg-gray-100 dark:bg-gray-900 pb-4 max-w-sm`}>
                    <Button color={`gray`} onClick={technologyClick}>
                        {strings['header.technologies']}
                    </Button>
                </Tooltip>}
                {link && <Button color={`blue`} href={link} target='_blank'>
                    {strings['button.sourcecode']}
                    <svg className='-mr-1 ml-2 h-5 w-5' fill='currentColor' viewBox='0 0 20 20'
                         xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                        <path
                            d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                    </svg>
                </Button>}
            </div>
        </Card>
    )
}
