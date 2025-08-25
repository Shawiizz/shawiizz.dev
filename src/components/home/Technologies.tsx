import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import Image from 'next/image'
import { useState } from 'react'
import {
    Technologies as technologyObject,
    TECHNOLOGIES_TYPES,
    TechnologyTypeKeys
} from '@/util/data/Technologies'

const Technologies = () => {
    const mode = useSelector(selectTheme)
    const [activeTab, setActiveTab] = useState<TechnologyTypeKeys>('language')
    
    // Grouper les technologies par type et par priorité
    const groupedTechnologies = Object.values(technologyObject).reduce((acc, tech) => {
        tech.type.forEach(type => {
            if (!acc[type]) {
                acc[type] = { top: [], middle: [], bottom: [] }
            }
            acc[type][tech.showPriority].push(tech)
        })
        return acc
    }, {} as Record<TechnologyTypeKeys, { top: any[], middle: any[], bottom: any[] }>)

    const getCurrentTechnologies = () => {
        const group = groupedTechnologies[activeTab]
        if (!group) return []
        return [...group.top, ...group.middle, ...group.bottom]
    }

    const tabs = Object.entries(TECHNOLOGIES_TYPES).filter(([key]) => 
        groupedTechnologies[key as TechnologyTypeKeys]
    )

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Navigation par onglets */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map(([key, type]) => {
                    const Icon = type.icon
                    const isActive = activeTab === key
                    const techCount = groupedTechnologies[key as TechnologyTypeKeys]
                    const totalCount = techCount ? techCount.top.length + techCount.middle.length + techCount.bottom.length : 0
                    
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as TechnologyTypeKeys)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/70 dark:hover:bg-gray-700/70 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30'
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="capitalize">{key === 'language' ? 'Langages' : key === 'framework' ? 'Frameworks' : key === 'tool' ? 'Outils' : key === 'database' ? 'Bases de données' : key === 'platform' ? 'Plateformes' : key === 'software' ? 'Logiciels' : key === 'hardware' ? 'Hardware' : 'Autres'}</span>
                            <span className="text-xs opacity-75">({totalCount})</span>
                        </button>
                    )
                })}
            </div>

            {/* Contenu des technologies */}
            <div className="min-h-[200px] flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
                    {getCurrentTechnologies().map((tech, index) => {
                        const isTopPriority = tech.showPriority === 'top'
                        const isMiddlePriority = tech.showPriority === 'middle'
                        
                        return (
                            <div
                                key={`${tech.displayName}-${index}`}
                                className="flex flex-col items-center group cursor-pointer"
                                title={tech.displayName}
                            >
                                <div className={`relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl
                                    ${isTopPriority 
                                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-500/30 dark:border-purple-500/30' 
                                        : isMiddlePriority
                                        ? 'bg-white/60 dark:bg-gray-800/60 border border-gray-300/40 dark:border-gray-600/40'
                                        : 'bg-white/40 dark:bg-gray-800/40 border border-gray-200/30 dark:border-gray-700/30'
                                    } backdrop-blur-sm`}
                                >
                                    {/* Badge de priorité pour les technologies top */}
                                    {isTopPriority && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                                    )}
                                    
                                    <Image 
                                        src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                                        alt={tech.displayName}
                                        width={40} 
                                        height={40} 
                                        className={`transition-all duration-300 ${
                                            isTopPriority 
                                                ? 'w-10 h-10 md:w-12 md:h-12 opacity-90 group-hover:opacity-100' 
                                                : 'w-8 h-8 md:w-10 md:h-10 opacity-75 group-hover:opacity-90'
                                        }`}
                                    />
                                </div>
                                <span className={`mt-2 text-center font-medium transition-all duration-300 ${
                                    isTopPriority 
                                        ? 'text-sm text-gray-800 dark:text-gray-200 opacity-100' 
                                        : 'text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100'
                                }`}>
                                    {tech.displayName}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Technologies
