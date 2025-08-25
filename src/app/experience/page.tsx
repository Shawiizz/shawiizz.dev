'use client'

import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { passionOne, poppins } from '@/app/fonts'
import { experiences, experienceTypes } from '@/util/data/Experiences'
import { formations } from '@/util/data/Education'
import { Badge, Card, Modal, Button } from 'flowbite-react'
import { HiCalendar, HiLocationMarker, HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import { competencies as competenciesDict, type CompetencyId } from '@/util/data/Competencies'
import Footer from '@/components/Footer'

type OpenCompetencyState = {
    id: CompetencyId;
    title: string;
    items: string[];
    sourceTitle: string;
} | null;

const ExperiencePage = () => {
    const strings = useAppSelector(selectTranslations)
    const [openCompetency, setOpenCompetency] = React.useState<OpenCompetencyState>(null);

    return (
        <>
        <main className='flex min-h-screen flex-col items-center pt-16'>
            {/* Section Expériences */}
            <section className='w-full max-w-7xl px-4 py-16'>
                <div className='text-center mb-12'>
                    <h1 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(45deg,#0688fb_0%,#ac07f7_100%)] dark:bg-[linear-gradient(45deg,#2b9cff_0%,#ac07f7_100%)] font-semibold`}>
                        {strings['experience.title']}
                    </h1>
                    <p className={`pt-5 tracking-[.054em] max-w-4xl mx-auto text-gray-800 dark:text-white font-normal ${poppins.className} text-[1.35rem] md:text-[1.5rem] leading-[1.2em]`}>
                        {strings['experience.subtitle']}
                    </p>
                </div>

                {/* Timeline des expériences */}
                <div className='relative'>
                    <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600'></div>
                    
                    {experiences.map((experience, index) => (
                        <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Timeline dot */}
                            <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10'></div>
                            
                            {/* Card */}
                            <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <Card className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                                    <div className='flex items-start justify-between'>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <HiBriefcase className='text-blue-500 text-xl' />
                                                <Badge color='purple' size='sm'>
                                                    {experienceTypes[experience.type]}
                                                </Badge>
                                            </div>
                                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                                                {experience.title}
                                            </h3>
                                            <h4 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>
                                                {experience.company}
                                            </h4>
                                            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4'>
                                                <div className='flex items-center gap-1'>
                                                    <HiLocationMarker />
                                                    {experience.location}
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <HiCalendar />
                                                    {experience.period}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-4'>
                                        <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                                            {experience.description.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Compétences BUT cliquables */}
                                    {experience.competencies && (
                                        <div className='mb-4'>
                                            <h5 className='font-semibold text-gray-900 dark:text-white mb-2'>Compétences BUT Informatique :</h5>
                                            <div className='flex flex-wrap gap-2'>
                                                {(Object.keys(experience.competencies) as CompetencyId[]).map((cid) => {
                                                    const comp = competenciesDict[cid]
                                                    const items = experience.competencies?.[cid] || []
                                                    if (!comp) return null
                                                    return (
                                                        <button
                                                            key={cid}
                                                            onClick={() => setOpenCompetency({ id: cid, title: comp.title, items, sourceTitle: experience.title })}
                                                            className='focus:outline-none'
                                                        >
                                                            <Badge color='success' size='sm' className='hover:brightness-110 cursor-pointer'>
                                                                {cid} — {comp.short}
                                                            </Badge>
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {experience.technologies && (
                                        <div>
                                            <h5 className='font-semibold text-gray-900 dark:text-white mb-2'>Technologies utilisées :</h5>
                                            <div className='flex flex-wrap gap-2'>
                                                {experience.technologies.map((tech, idx) => (
                                                    <Badge key={idx} color='info' size='sm'>{tech}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Formation */}
            <section className='w-full bg-gray-50 dark:bg-gray-900' id='formation'>
                <div className='max-w-7xl mx-auto px-4 py-16'>
                    <div className='text-center mb-12'>
                        <h2 className={`text-[3em] md:text-[3.5em] ${passionOne.className} text-gradient bg-[linear-gradient(180deg,#377cef_0%,#fa4bc8_100%)] dark:bg-[linear-gradient(180deg,#A9C9FF_0%,#FFBBEC_100%)] font-semibold`}>
                            {strings['education.title']}
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {formations.map((formation, index) => (
                            <Card key={index} className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
                                <div className='flex items-start gap-4'>
                                    <HiAcademicCap className='text-blue-500 text-2xl mt-1' />
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                                            {formation.title}
                                        </h3>
                                        <h4 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>
                                            {formation.institution}
                                        </h4>
                                        <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3'>
                                            <div className='flex items-center gap-1'>
                                                <HiCalendar />
                                                {formation.period}
                                            </div>
                                            <Badge 
                                                color={formation.status === 'completed' ? 'success' : formation.status === 'in-progress' ? 'warning' : 'info'}
                                                size='sm'
                                            >
                                                {formation.status === 'completed' ? 'Terminé' : formation.status === 'in-progress' ? 'En cours' : 'Prévu'}
                                            </Badge>
                                        </div>
                                        {formation.specialization && (
                                            <p className='text-purple-600 dark:text-purple-400 font-medium mb-2'>
                                                {formation.specialization}
                                            </p>
                                        )}
                                        {formation.description && (
                                            <p className='text-gray-700 dark:text-gray-300'>
                                                {formation.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        {/* Section Soft Skills supprimée */}
        <Footer/>
    </main>
    {/* Modal Compétence BUT */}
        <Modal show={!!openCompetency} onClose={() => setOpenCompetency(null)} size='lg'>
            <Modal.Header>
                {openCompetency ? `${openCompetency.id} — ${openCompetency.title}` : 'Compétence'}
            </Modal.Header>
            <Modal.Body>
                {openCompetency && (
                    <div className='space-y-4'>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>
                            Lié à : <span className='font-semibold'>{openCompetency.sourceTitle}</span>
                        </p>
                        <ul className='list-disc pl-5 space-y-2'>
                            {openCompetency.items.map((it, idx) => (
                                <li key={idx} className='text-gray-800 dark:text-gray-100'>{it}</li>
                            ))}
                        </ul>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                            Référentiel BUT Informatique — aperçu synthétique.
                        </p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button color='gray' onClick={() => setOpenCompetency(null)}>Fermer</Button>
            </Modal.Footer>
    </Modal>
    </>
    )
}

export default ExperiencePage
