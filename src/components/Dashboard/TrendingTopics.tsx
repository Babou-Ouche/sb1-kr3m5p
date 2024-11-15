import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';

interface TrendingTopic {
  id: string;
  topic: string;
  growth: number;
  potentialRevenue: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
}

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    topic: 'Astuces Productivité',
    growth: 156,
    potentialRevenue: '200-400€',
    difficulty: 'Facile'
  },
  {
    id: '2',
    topic: 'Finance Personnelle',
    growth: 142,
    potentialRevenue: '300-600€',
    difficulty: 'Moyen'
  },
  {
    id: '3',
    topic: 'Tech Innovation',
    growth: 128,
    potentialRevenue: '250-500€',
    difficulty: 'Difficile'
  }
];

export function TrendingTopics() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Flame className="w-5 h-5 mr-2" />
          Sujets Tendances
        </h2>
      </div>
      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{topic.topic}</h3>
              <div className="flex items-center space-x-1 text-green-400">
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">{topic.growth}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-purple-200">Revenus potentiels: {topic.potentialRevenue}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                topic.difficulty === 'Facile' ? 'bg-green-500/20 text-green-300' :
                topic.difficulty === 'Moyen' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {topic.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}