import { FC } from 'react';
import { getScenariosByCategory } from './data';

interface PageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: FC<PageProps> = ({ params }) => {
  const categoryId = params.categoryId;
  const formatted = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  const scenarios = getScenariosByCategory(categoryId);

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Scenarios: {formatted}</h1>

      {scenarios.length === 0 ? (
        <p className="text-gray-500">No scenarios available for this category yet.</p>
      ) : (
        <ul className="space-y-4">
          {scenarios.map((scenario) => (
            <li key={scenario.id} className="p-4 border rounded-xl shadow-sm">
              <a href={`/categories/${categoryId}/${scenario.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                {scenario.title}</a>
              <p className="text-sm text-gray-600">Difficulty: {scenario.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default CategoryPage;
