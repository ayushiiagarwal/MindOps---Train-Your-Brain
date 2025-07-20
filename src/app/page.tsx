"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const categories = [
    { id: "tech", title: "Technical Problems", description: "Solve IT-related situations" },
    { id: "business", title: "Business Thinking", description: "Tackle product/strategy challenges" },
    { id: "realworld", title: "Real-World Problems", description: "Practical, everyday decision making" },
    { id: "logicalthinking", title: "Logical Thinking", description: "Make your Logics stronger" },
    { id: "criticalthinking", title: "Critical Thinking", description: "Solve critical problems" },
    { id: "communication", title: "Communication", description: "Communicate like a pro" }
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">MindOps: Train your brain</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/categories/${cat.id}`)}
            className="cursor-pointer bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{cat.title}</h2>
            <p className="text-gray-600 mt-2">{cat.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
