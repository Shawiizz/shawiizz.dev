import React from 'react'

interface TechOverflowBadgeProps {
    techs: string[]
}

const TechOverflowBadge: React.FC<TechOverflowBadgeProps> = ({ techs }) => {
    return (
        <div className='relative group/overflow'>
            <span className='text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600/50 text-gray-500 dark:text-gray-400 cursor-default select-none'>
                +{techs.length}
            </span>
            <div className='absolute top-full left-0 mt-1.5 z-30 hidden group-hover/overflow:block'>
                <div className='flex flex-wrap gap-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-xl dark:shadow-black/40 max-w-[220px]'>
                    {techs.map((tech, i) => (
                        <span key={i} className='text-xs px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-700 dark:text-blue-300'>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechOverflowBadge
