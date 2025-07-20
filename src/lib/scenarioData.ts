// src/lib/scenarioData.ts

export type ScenarioOption = {
  id: number;
  text: string;
  feedback: string;
};

export type Scenario = {
  id: string;
  category: string;
  title: string;
  description: string;
  options: ScenarioOption[];
};

export const allScenarios: Scenario[] = [
  {
    id: 's1',
    category: 'tech',
    title: 'Debugging a Login Bug',
    description:
      'A user reports they cannot log in even after entering the correct credentials. What should you check first?',
    options: [
      {
        id: 1,
        text: 'Check if the database is online',
        feedback: '✅ Correct. Backend issues often block login.',
      },
      {
        id: 2,
        text: 'Ask them to refresh the page',
        feedback: '❌ Likely not helpful. This sounds like a backend issue.',
      },
      {
        id: 3,
        text: 'Reset their password',
        feedback: '⚠️ Premature. Investigate first.',
      },
    ],
  },
  {
    id: 's2',
    category: 'business',
    title: 'Product Launch Dilemma',
    description: 'You’re behind schedule. What do you prioritize?',
    options: [
      {
        id: 1,
        text: 'Polishing features',
        feedback: '⚠️ Not wise. Launch must ship, polish comes later.',
      },
      {
        id: 2,
        text: 'Fixing major bugs',
        feedback: '✅ Good. Bug-free is more important than flashy.',
      },
      {
        id: 3,
        text: 'Adding new features',
        feedback: '❌ Risky. Too late in the cycle.',
      },
    ],
  },
];

export const getScenarioById = (scenarioId: string) => {
  return allScenarios.find((s) => s.id === scenarioId);
};
