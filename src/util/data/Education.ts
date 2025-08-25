export interface Formation {
    title: string;
    institution: string;
    period: string;
    status: 'completed' | 'in-progress' | 'planned';
    description?: string;
    specialization?: string;
    grade?: string;
}

export const formations: Formation[] = [
    {
        title: 'École d\'Ingénieur en Informatique et Réseaux de Communication',
        institution: 'CPE Lyon - Villeurbanne',
        period: 'Septembre 2025 - 2028',
        status: 'planned',
        specialization: 'Ingénieur en informatique et réseaux de communication',
        description: 'Formation d\'ingénieur de 3 ans en informatique et réseaux de communication.',
        grade: 'À partir de Septembre 2025'
    },
    {
        title: 'Bachelor Universitaire de Technologie (BUT) Informatique',
        institution: 'IUT Lyon 1 - Villeurbanne',
        period: 'Depuis 2022',
        status: 'in-progress',
        specialization: 'Bachelor Universitaire de Technologie en Informatique',
        description: 'Formation complète en informatique couvrant le développement logiciel, l\'administration système, la gestion de bases de données, la conduite de projets et le travail en équipe. Formation théorique et pratique avec de nombreux projets concrets.',
        grade: 'En cours - Fin prévue en 2025'
    },
    {
        title: 'Baccalauréat Technologique STI2D',
        institution: 'Lycée Louis Armand - Villefranche-sur-Saône',
        period: '2019 - 2022',
        status: 'completed',
        specialization: 'Sciences et Technologies de l\'Industrie et du Développement Durable',
        description: 'Baccalauréat Technologique avec spécialisation dans les systèmes d\'information et le numérique. Première approche du développement logiciel et des technologies numériques.',
        grade: 'Obtenu en 2022'
    },
    {
        title: 'Autoformation continue',
        institution: 'Apprentissage autonome et projets personnels',
        period: '2019 - Présent',
        status: 'in-progress',
        description: 'Apprentissage continu des technologies modernes : développement web (HTML, CSS, JavaScript/TypeScript, PHP), frameworks (NodeJS, PHP Symfony, React/NextJS, VueJS, Angular), DevOps (Docker, Ansible, GitLab/GitHub CI/CD), et langages de programmation (Java, Python, C, C#).'
    }
];