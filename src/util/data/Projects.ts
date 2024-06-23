import githubImage from '../../../public/github.png'
import plumeoImage from '../../../public/plumeo.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Technologies, Technology } from '@/util/data/Technologies'
import { Person, persons } from '@/util/data/Person'

export interface Project {
    name: string;
    description: string;
    link?: { href: string; image: StaticImport };
    technologies?: Technology[],
    persons?: Person[]
}

export interface Projects {
    personal: Project[];
    team: Project[];
}

export const projectsPerCategory: Projects = {
    personal: [
        {
            name: 'Github auto pull',
            description: 'project.ghpull.description',
            link: { href: 'https://github.com/Shawiizz/github-auto-pull', image: githubImage },
            technologies: [Technologies.js, Technologies.git]
        },
        {
            name: 'ShaLibUpdate',
            description: 'project.autodl.description',
            link: { href: 'https://github.com/Shawiizz/ShaLibUpdate', image: githubImage },
            technologies: [Technologies.java, Technologies.php, Technologies.git]
        },
        {
            name: 'Minecraft Assets Downloader',
            description: 'project.assetsdl.description',
            link: { href: 'https://github.com/Shawiizz/MinecraftAssetsDownloader', image: githubImage },
            technologies: [Technologies.java, Technologies.git]
        },
        {
            name: 'LLA Menu Story',
            description: 'project.lla.description',
            link: { href: 'https://github.com/Shawiizz/lla-menu-story', image: githubImage },
            technologies: [Technologies.js, Technologies.node, Technologies.git]
        },
        {
            name: 'PufferPanel API Wrapper',
            description: 'project.pufferpanel.description',
            link: { href: 'https://github.com/Shawiizz/pufferpanel-api-wrapper', image: githubImage },
            technologies: [Technologies.ts, Technologies.node, Technologies.git]
        },
        {
            name: 'Tomuss API',
            description: 'project.tomuss.description',
            link: { href: 'https://github.com/Shawiizz/tomuss-api', image: githubImage },
            technologies: [Technologies.ts, Technologies.node, Technologies.git]
        },
        {
            name: 'project.mohistweb.title',
            description: 'project.mohistweb.description',
            link: { href: 'https://github.com/MohistMC/website', image: githubImage },
            technologies: [Technologies.ts, Technologies.node, Technologies.next, Technologies.react, Technologies.tailwind, Technologies.cloudflare, Technologies.git]
        }
    ],
    team: [
        {
            name: 'Mohist',
            description: 'project.mohist.description',
            link: { href: 'https://github.com/MohistMC/Mohist', image: githubImage },
            technologies: [Technologies.java, Technologies.git],
            persons: [persons.mgazul]
        },
        {
            name: 'Pluméo',
            description: 'project.plumeo.description',
            technologies: [Technologies.js, Technologies.expressjs, Technologies.node, Technologies.ts, Technologies.react, Technologies.next, Technologies.cloudflare, Technologies.git],
            persons: [persons.vrock691]
        },
        {
            name: '12cm3',
            description: 'project.12cm3.description',
            technologies: [Technologies.php, Technologies.java, Technologies.git],
            persons: [persons.elouanrival, persons.rayantail, persons.lomebordes]
        },
        {
            name: 'Pathfinder',
            description: 'project.pathfinder.description',
            technologies: [Technologies.java, Technologies.git],
            persons: [persons.mylanrobinet]
        },
        {
            name: 'Annuaire',
            description: 'project.annuaire.description',
            technologies: [Technologies.c, Technologies.git],
            persons: [persons.elouanrival, persons.rayantail, persons.lomebordes]
        },
        {
            name: 'Kebab 12',
            description: 'project.kebab12.description',
            technologies: [Technologies.html, Technologies.css, Technologies.js, Technologies.git],
            persons: [persons.martinducros]
        },
        {
            name: 'TCL routes',
            description: 'project.tclroutes.description',
            technologies: [Technologies.kotlin, Technologies.java, Technologies.git],
            persons: [persons.lucaslaiguillon]
        }
    ]
}

export const projects: Project[] = [...projectsPerCategory.personal, ...projectsPerCategory.team]