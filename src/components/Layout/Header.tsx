import React from 'react';
import { Bot, Settings, BarChart2, Home } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">TikAI Manager</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors">
            <Home className="w-5 h-5" />
            <span>Tableau de bord</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors">
            <BarChart2 className="w-5 h-5" />
            <span>Analyses</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Paramètres</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-white font-medium">MP</span>
          </div>
        </div>
      </nav>
    </header>
  );
}