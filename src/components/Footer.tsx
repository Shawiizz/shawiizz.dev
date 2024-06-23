import Image from 'next/image'
import shawiizzIcon from '@/app/favicon.ico'
import React from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'

const Footer = () => {
    const strings = useAppSelector(selectTranslations)

    return (
        <footer className={`flex justify-center items-center w-full h-[10vh] bg-gray-100 dark:bg-black mt-20`}>
            <Image src={shawiizzIcon} alt={'Shawiiz_z logo'} className={`w-[7vh] h-auto`} />
            <p className={`text-center font-extralight dark:text-white`}>Maël Feri
                 — {strings['footer.description']}</p>
        </footer>
    )
}

export default Footer