import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  subtitle?: string;
}

export function StatsCard({ title, value, change, icon: Icon, subtitle }: StatsCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-purple-200 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
          {subtitle && <p className="text-purple-300 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-300" />
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
        <span className="text-purple-200 text-sm ml-1">vs semaine précédente</span>
      </div>
    </div>
  );
}