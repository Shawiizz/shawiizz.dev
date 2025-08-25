export type CompetencyId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6'

export interface Competency {
  id: CompetencyId
  title: string
  short: string
  description?: string
}

export const competencies: Record<CompetencyId, Competency> = {
  C1: {
    id: 'C1',
    title: "Réaliser un développement d’application",
    short: 'Concevoir, coder, tester et intégrer',
    description:
      "Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client en respectant les besoins, la qualité et les normes.",
  },
  C2: {
    id: 'C2',
    title: 'Optimiser des applications informatiques',
    short: 'Performance, ressources, précision',
    description:
      'Proposer des applications optimisées selon des critères (temps, mémoire, précision) en justifiant les choix et en validant les résultats.',
  },
  C3: {
    id: 'C3',
    title: 'Administrer des systèmes informatiques communicants complexes',
    short: 'Systèmes, réseaux, sécurité',
    description:
      'Installer, configurer, sécuriser et maintenir des infrastructures et services, en respectant performances, coûts et pérennité.',
  },
  C4: {
    id: 'C4',
    title: 'Gérer des données de l’information',
    short: 'Modéliser, stocker, exploiter',
    description:
      "Concevoir, administrer et exploiter des données en respectant les réglementations et en assurant cohérence et qualité.",
  },
  C5: {
    id: 'C5',
    title: 'Conduire un projet',
    short: 'Organisation, pilotage, communication',
    description:
      'Organiser et piloter un projet (classique ou agile), identifier besoins et enjeux, communiquer efficacement avec les acteurs.',
  },
  C6: {
    id: 'C6',
    title: 'Travailler dans une équipe informatique',
    short: 'Collaboration et communication',
    description:
      "S’inscrire dans une équipe pluridisciplinaire, partager l’information, accompagner les évolutions et rendre compte de son activité.",
  },
}
