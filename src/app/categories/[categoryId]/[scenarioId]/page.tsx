'use client';
import { useState } from 'react';
import { getScenarioById } from '../../../../lib/scenarioData';

interface ScenarioPageProps {
  params: {
    categoryId: string;
    scenarioId: string;
  };
}

export default function ScenarioPage({ params }: ScenarioPageProps) {
  const scenario = getScenarioById(params.scenarioId);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!scenario) {
    return (
      <main className="p-8">
        <h1 className="text-xl text-red-500">Scenario not found!</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">{scenario.title}</h1>
      <p className="mb-6 text-gray-700">{scenario.description}</p>

      <div className="space-y-4">
        {scenario.options.map((option) => (
          <div key={option.id}>
            <button
              onClick={() => setSelectedOption(option.id)}
              className={`w-full text-left p-4 border rounded-xl transition 
                ${selectedOption === option.id ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`}
            >
              {option.text}
            </button>

            {selectedOption === option.id && (
              <p className="mt-2 text-sm text-gray-700">{option.feedback}</p>
            )}
          </div>
        ))}
      </div>
      <Link href={`/categories/${params.categoryId}`}>
      <button className="mt-8 text-sm text-blue-600 hover:underline">
    ← Back to {params.categoryId.charAt(0).toUpperCase() + params.categoryId.slice(1)} Scenarios
      </button>
</Link>

    </main>
  );
}

import Link from 'next/link';
