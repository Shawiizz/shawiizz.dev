export interface Skill {
    name: string;
    description: string[];
}

export const skills: Record<string, Skill> = {
    realizeapplications: {
        name: 'Réaliser des applications',
        description: [
            'Maîtrise des concepts de la programmation orientée objet et événementielle.',
            'Compétence dans divers langages : Java, PHP, JavaScript/Typescript, C, Python, PL/SQL, HTML, CSS.',
            'Écriture de code de qualité avec tests unitaires et documentation.',
            'Création d\'algorithmes pour la résolution de problèmes.'
        ]
    },
    optimiseapplications: {
        name: 'Optimiser des applications informatiques',
        description: [
            'Analyse et optimisation d\'algorithmes.',
            'Utilisation d\'outils mathématiques pour l\'optimisation.',
            'Utilisation d\'outils de profiling pour optimiser les applications.'
        ]
    },
    administercomplexsystems: {
        name: 'Administrer des systèmes informatiques communicants complexes',
        description: [
            'Installation, configuration et gestion des systèmes d\'exploitation (Windows et Linux).',
            'Maîtrise des concepts de base des réseaux et de la sécurité informatique.',
            'Maîtrise des concepts de base de la virtualisation.',
            'Résolution des problèmes sur un système d\'exploitation.'
        ]
    },
    datainformationmanagement: {
        name: 'Gérer des données de l\'information',
        description: [
            'Maîtrise des langages PL/SQL.',
            'Utilisation de différents SGBD : Oracle, MySQL, MariaDB, SQLite.',
            'Conception d\'un MCD et d\'un MLD.',
            'Conception d\'API pour manipuler des données dans une base de données.'
        ]
    },
    driveproject: {
        name: 'Conduire un projet',
        description: [
            'Identification des besoins d\'un client.',
            'Planification d\'un projet.',
            'Réalisation d\'un projet en équipe.',
            'Rédaction de documents de projet (cahier des charges, spécifications techniques, etc.).',
            'Communication avec un client et une équipe.'
        ]
    },
    workincomputerteam: {
        name: 'Travailler dans une équipe informatique',
        description: [
            'Gestion d\'une petite équipe informatique.',
            'Communication efficace au sein d\'une équipe.',
            'Connaissance des différentes méthodes de développement et leur application.',
            'Gestion du temps de chaque membre de l\'équipe et supervision du bon fonctionnement du projet.',
            'Résolution des conflits au sein de l\'équipe.',
            'Veille constante sur les nouveautés dans le domaine de l\'informatique.'
        ]
    }

}