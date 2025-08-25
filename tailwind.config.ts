import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.js',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'title-gradient': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
            },
            animation: {
                'gradient': 'gradient 3s ease infinite',
            },
            backgroundSize: {
                '300%': '300%',
            }
        }
    },
    plugins: [require('flowbite/plugin')]
}
export default config
