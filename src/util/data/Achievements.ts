import { Technology, Technologies } from './Technologies';
import { Person, persons } from './Person';
import type { CompetencyId } from './Competencies';

export interface Achievement {
    title: string;
    description: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate?: string; // Format: YYYY-MM-DD, undefined si projet en cours
    type: 'project' | 'competition' | 'recognition' | 'contribution';
    category: 'personal' | 'team' | 'academic' | 'achievement';
    link?: string;
    technologies?: Technology[];
    persons?: Person[];
    competencies?: Partial<Record<CompetencyId, string[]>>;
}

export const achievements: Achievement[] = [
    {
        title: 'DevOps Framework',
        description: 'Outil open source de déploiement automatisé d\'applications Docker via des pipelines CI/CD. Framework complet pour l\'automatisation des déploiements.',
        startDate: '2025-01-01',
        type: 'project',
        category: 'personal',
        link: 'https://github.com/Shawiizz/devops',
        technologies: [Technologies.ansible, Technologies.bash, Technologies.docker, Technologies.github, Technologies.gitlab],
        competencies: {
            C1: [
                'Conception et développement d’un framework CLI',
                'Tests de bout en bout sur des apps Dockerisées'
            ],
            C2: [
                'Optimisation du temps d’exécution des pipelines',
                'Réduction de la duplication via templates réutilisables'
            ],
            C3: [
                'Provisioning et orchestration (Docker, Ansible)',
                'Sécurisation basique des secrets CI'
            ],
            C5: [
                'Découpage en modules et roadmap publique'
            ],
            C6: [
                'Collaboration open source (issues, PR)'
            ],
        }
    },
    {
        title: 'Pluméo',
        description: 'Application web de messagerie sécurisée et instantanée. Développement complet d\'une solution de communication moderne et sécurisée.',
        startDate: '2020-01-01',
        endDate: '2022-12-31',
        type: 'project',
        category: 'team',
        technologies: [Technologies.js, Technologies.expressjs, Technologies.node, Technologies.ts, Technologies.react, Technologies.next, Technologies.cloudflare, Technologies.git],
        persons: [persons.vrock691],
        competencies: {
            C1: ['Backend API + Front Next.js', 'Auth et messagerie temps réel'],
            C2: ['Optimisation perfs front (SSR, cache CDN)'],
            C3: ['CI/CD et hébergement (Cloudflare)'],
            C5: ['Organisation tâches et jalons'],
            C6: ['Travail en binôme, revues de code']
        }
    },
    {
        title: '12cm3',
        description: 'Jeu vidéo de rallye développé en Java dans le cadre d\'un projet à l\'IUT. Projet académique démontrant les compétences en développement logiciel.',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.php, Technologies.java, Technologies.git],
        persons: [persons.elouanrival, persons.rayantail, persons.lomebordes],
        competencies: {
            C1: ['Architecture du jeu, moteur logique'],
            C2: ['Optimisation de pathfinding rudimentaire'],
            C6: ['Répartition des rôles et intégration continue']
        }
    },
    {
        title: 'Mohist',
        description: 'Contribution au projet open source Mohist, serveur Minecraft hybride Forge/Paper. Participation active au développement et à la maintenance.',
        startDate: '2019-01-01',
        type: 'contribution',
        category: 'team',
        link: 'https://github.com/MohistMC/Mohist',
        technologies: [Technologies.java, Technologies.git],
        persons: [persons.mgazul],
        competencies: {
            C1: ['Correction de bugs, intégration multi-plateformes'],
            C2: ['Analyse de performances côté serveur'],
            C6: ['Collaboration communauté open source']
        }
    },
    {
        title: 'Pathfinder',
        description: 'Algorithme de pathfinding développé en Java. Projet académique d\'optimisation d\'algorithmes de recherche de chemin.',
        startDate: '2023-03-01',
        endDate: '2023-05-31',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.java, Technologies.git],
        persons: [persons.mylanrobinet],
        competencies: {
            C1: ['Implémentation d’algos de recherche'],
            C2: ['Comparaison complexités et heuristiques']
        }
    },
    {
        title: 'Platine (ERP)',
        description: 'Projet académique d\'ERP développé dans le cadre d\'une SAÉ à l\'IUT qui permet de centraliser les différents services de l\'IUT (Tomuss, emploi du temps, etc.).',
        startDate: '2024-02-01',
        endDate: '2025-06-30',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.java, Technologies.php, Technologies.mysql, Technologies.html, Technologies.css, Technologies.js, Technologies.git],
        competencies: {
            C1: ['Full stack: back + front + intégration'],
            C4: ['Modélisation et accès BD MySQL'],
            C5: ['Cadre SAÉ, jalons, livrables'],
            C6: ['Travail d’équipe académique']
        }
    },
    {
        title: 'Annuaire',
        description: 'Projet d\'annuaire en ligne de commande développé en C dans le cadre d\'un projet à l\'IUT. Démonstration des compétences en programmation système.',
        startDate: '2023-01-15',
        endDate: '2023-03-30',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.c, Technologies.git],
        persons: [persons.elouanrival, persons.rayantail, persons.lomebordes],
        competencies: {
            C1: ['Programmation système en C'],
            C2: ['Gestion mémoire et structures de données']
        }
    },
    {
        title: 'Kebab 12',
        description: 'Site web vitrine pour une boutique de kebab développé dans le cadre d\'un projet à l\'IUT. Projet de développement web front-end.',
        startDate: '2023-09-01',
        endDate: '2023-11-30',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.html, Technologies.css, Technologies.js, Technologies.git],
        persons: [persons.martinducros],
        competencies: {
            C1: ['Intégration front et responsive'],
            C5: ['Recueil besoin client fictif, livrables']
        }
    },
    {
        title: 'TCL routes',
        description: 'Application mobile pour visualiser les itinéraires des TCL de Lyon développée en Kotlin dans le cadre d\'un projet à l\'IUT.',
        startDate: '2024-04-01',
        endDate: '2024-06-15',
        type: 'project',
        category: 'academic',
        technologies: [Technologies.kotlin, Technologies.java, Technologies.git],
        persons: [persons.lucaslaiguillon],
        competencies: {
            C1: ['App mobile Kotlin, UI + logique'],
            C4: ['Consommation et parsing de données'],
            C6: ['Collaboration et intégration']
        }
    },
    {
        title: 'Github Auto Pull',
        description: 'Outil d\'automatisation pour la synchronisation de repositories Git. Script utilitaire pour faciliter les workflows de développement.',
        startDate: '2023-08-01',
        endDate: '2023-10-31',
        type: 'project',
        category: 'personal',
        link: 'https://github.com/Shawiizz/github-auto-pull',
        technologies: [Technologies.js, Technologies.git],
        competencies: {
            C1: ['Script Node.js, automatisation Git'],
            C2: ['Réduction des I/O et gestion des erreurs']
        }
    }
];

export const getDateForSorting = (achievement: Achievement): Date => {
    return new Date(achievement.endDate || achievement.startDate);
}

export const formatDateRange = (achievement: Achievement): string => {
    const startDate = new Date(achievement.startDate);
    const startYear = startDate.getFullYear();
    
    if (achievement.endDate) {
        const endDate = new Date(achievement.endDate);
        const endYear = endDate.getFullYear();
        
        if (startYear === endYear) {
            return `${startYear}`;
        } else {
            return `${startYear} - ${endYear}`;
        }
    } else {
        return `${startYear} - Présent`;
    }
}

export const sortedAchievements = [...achievements].sort((a, b) => {
    const dateA = getDateForSorting(a);
    const dateB = getDateForSorting(b);
    return dateB.getTime() - dateA.getTime();
});
