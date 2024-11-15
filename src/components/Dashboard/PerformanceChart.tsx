import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

const performanceData = [
  { date: '01/03', views: 120000, revenue: 180 },
  { date: '02/03', views: 145000, revenue: 220 },
  { date: '03/03', views: 180000, revenue: 270 },
  { date: '04/03', views: 165000, revenue: 250 },
  { date: '05/03', views: 190000, revenue: 285 },
  { date: '06/03', views: 210000, revenue: 315 },
  { date: '07/03', views: 200000, revenue: 300 },
];

export function PerformanceChart() {
  const maxViews = Math.max(...performanceData.map(d => d.views));
  const maxRevenue = Math.max(...performanceData.map(d => d.revenue));

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Performance Hebdomadaire
        </h2>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-purple-300" />
          <span className="text-purple-300 text-sm">7 derniers jours</span>
        </div>
      </div>
      
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between">
          {performanceData.map((data, index) => (
            <div key={data.date} className="flex flex-col items-center w-1/7 space-y-2">
              <div className="relative w-full">
                <div
                  className="w-2 bg-purple-500/50 rounded-t mx-auto"
                  style={{ height: `${(data.views / maxViews) * 180}px` }}
                />
                <div
                  className="w-2 bg-green-500/50 rounded-t mx-auto mt-1"
                  style={{ height: `${(data.revenue / maxRevenue) * 60}px` }}
                />
              </div>
              <span className="text-purple-200 text-xs">{data.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500/50 rounded" />
          <span className="text-purple-200 text-sm">Vues</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500/50 rounded" />
          <span className="text-purple-200 text-sm">Revenus</span>
        </div>
      </div>
    </div>
  );
}