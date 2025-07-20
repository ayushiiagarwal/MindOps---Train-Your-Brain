// src/app/categories/[categoryId]/data.ts

export const getScenariosByCategory = (categoryId: string) => {
  const allScenarios: Record<string, { id: string; title: string; difficulty: string }[]> = {
    tech: [
      { id: 's1', title: 'Debugging a Login Bug', difficulty: 'Easy' },
      { id: 's2', title: 'Handling a Server Outage', difficulty: 'Hard' },
    ],
    business: [
      { id: 's3', title: 'Launching a New Product', difficulty: 'Medium' },
      { id: 's4', title: 'Pricing Dilemma', difficulty: 'Hard' },
    ],
    realworld: [
      { id: 's5', title: 'Managing Rent & Groceries', difficulty: 'Easy' },
      { id: 's6', title: 'Friend Conflict at Work', difficulty: 'Medium' },
    ],
    logicalthinking: [
      { id: 's7', title: 'The 3 Light Switch Puzzle', difficulty: 'Medium' },
    ],
    criticalthinking: [
      { id: 's8', title: 'Bridge Crossing Challenge', difficulty: 'Hard' },
    ],
    communication: [
      { id: 's9', title: 'Giving Constructive Feedback', difficulty: 'Medium' },
      { id: 's10', title: 'Handling Misunderstanding', difficulty: 'Easy' },
    ],
  };

  return allScenarios[categoryId] || [];
};

