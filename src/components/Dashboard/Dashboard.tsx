import React from 'react';
import { Users, TrendingUp, DollarSign, Wallet } from 'lucide-react';
import { Header } from '../Layout/Header';
import { StatsCard } from './StatsCard';
import { ContentQueue } from './ContentQueue';
import { ContentSuggestions } from './ContentSuggestions';
import { PerformanceChart } from './PerformanceChart';
import { TrendingTopics } from './TrendingTopics';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Tableau de Bord</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Abonnés Totaux"
            value="124,5K"
            change={12.5}
            icon={Users}
          />
          <StatsCard
            title="Vues Hebdomadaires"
            value="2,1M"
            change={8.2}
            icon={TrendingUp}
          />
          <StatsCard
            title="Revenus du Mois"
            value="1 245€"
            change={-2.4}
            icon={DollarSign}
            subtitle="Projection: 1 800€"
          />
          <StatsCard
            title="Solde Creator Fund"
            value="845€"
            change={15.8}
            icon={Wallet}
            subtitle="Prochain paiement: 5 avril"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PerformanceChart />
          <TrendingTopics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentQueue />
          <ContentSuggestions />
        </div>
      </main>
    </div>
  );
}