import type { CompetencyId } from './Competencies';

export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    type: 'internship' | 'work' | 'alternance' | 'freelance';
    description: string[];
    technologies?: string[];
    achievements?: string[];
    logo?: string;
    competencies?: Partial<Record<CompetencyId, string[]>>;
}

export const experiences: Experience[] = [
    {
        title: 'Stage et alternance - Développeur fullstack',
        company: 'AXOPEN',
        location: 'Lyon, France',
        period: 'Avril 2024 - Septembre 2025',
        type: 'alternance',
        description: [
            'Développement et maintenance d\'un extranet et d\'un logiciel de traitement d\'images pour un industriel de la sérigraphie et du textile',
            'Maintenance d\'une application d\'écrans de veille interactifs (client lourd et web)',
            'Montée de version de différentes applications web',
            'Collaboration avec les équipes métier pour l\'analyse des besoins et l\'évolution des applications',
            'Participation aux cycles de développement agile et gestion de projets'
        ],
        technologies: ['Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Symfony', 'Angular', 'React', 'NextJS', 'SQL', 'Git', 'Docker', 'CI/CD'],
        competencies: {
            C1: [
                'Conception/implémentation front/back, corrections de bugs',
                'Qualité et documentation (revues GitLab, SonarQube)'
            ],
            C2: [
                'Optimisation d’algorithmes de traitement d’images',
                'Amélioration des performances et robustesse'
            ],
            C3: [
                'Déploiements Azure, Nginx, Linux, CI/CD',
                'Self-host Tolgee (traductions), sécurité de base'
            ],
            C4: [
                'Gestion JSON/Traductions, MySQL/PostgreSQL',
                'Intégration API et cohérence des données'
            ],
            C5: [
                'Sprints, milestones GitLab, phases de recette',
                'CoProj: suivi, priorisation et planification'
            ],
            C6: [
                'Travail en équipe, communication client/chef de projet',
                'Pair programming et relectures de code'
            ],
        }
    },
    {
        title: 'Stage d\'observation',
        company: 'INETUM',
        location: 'Lyon, France',
        period: 'Janvier 2019',
        type: 'internship',
        description: [
            'Observation et information sur le métier de développeur',
            'Découverte de l\'environnement professionnel IT',
            'Première approche des méthodologies de développement en entreprise',
            'Échanges avec les équipes techniques sur les projets en cours'
        ],
        technologies: ['Découverte des technologies web', 'Méthodologies de développement'],
        competencies: {
            C5: ['Compréhension du cycle projet et des pratiques de suivi'],
            C6: ['Immersion dans une équipe IT et échanges professionnels'],
            C1: ['Observation des workflows de développement']
        }
    }
];

export const experienceTypes = {
    internship: 'Stage',
    work: 'Emploi',
    alternance: 'Alternance',
    freelance: 'Freelance'
};
