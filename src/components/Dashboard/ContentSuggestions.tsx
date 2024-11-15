import React from 'react';
import { Sparkles, TrendingUp, ThumbsUp, DollarSign } from 'lucide-react';

interface ContentSuggestion {
  id: string;
  title: string;
  description: string;
  potentialViews: string;
  estimatedRevenue: string;
  confidence: number;
}

const suggestions: ContentSuggestion[] = [
  {
    id: '1',
    title: 'Guide: Gagner 1000€/mois sur TikTok',
    description: 'Tutoriel détaillé sur la monétisation TikTok avec des conseils pratiques',
    potentialViews: '100K-200K',
    estimatedRevenue: '300-500€',
    confidence: 92
  },
  {
    id: '2',
    title: 'Les Secrets du Creator Fund',
    description: 'Analyse approfondie et stratégies pour maximiser vos revenus',
    potentialViews: '150K-300K',
    estimatedRevenue: '400-800€',
    confidence: 88
  }
];

export function ContentSuggestions() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          Suggestions de l'IA
        </h2>
        <button className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
          Générer plus
        </button>
      </div>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{suggestion.title}</h3>
              <span className="text-purple-200 text-sm">
                {suggestion.confidence}% de confiance
              </span>
            </div>
            <p className="text-purple-200 text-sm mb-3">{suggestion.description}</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm">{suggestion.potentialViews} vues</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">{suggestion.estimatedRevenue}</span>
              </div>
              <button className="flex items-center justify-center space-x-1 text-sm bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 rounded-lg py-1 px-3 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Créer</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}