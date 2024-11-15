import React from 'react';
import { Clock, Video, Trash2, Sparkles } from 'lucide-react';

interface QueuedContent {
  id: string;
  title: string;
  scheduledFor: string;
  thumbnail: string;
  estimatedRevenue: string;
  aiGenerated: boolean;
}

const queuedContent: QueuedContent[] = [
  {
    id: '1',
    title: 'Les Tendances Tech à Surveiller en 2024',
    scheduledFor: '2024-03-20T14:00:00Z',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop',
    estimatedRevenue: '150-300€',
    aiGenerated: true
  },
  {
    id: '2',
    title: 'Comment Monétiser son Compte TikTok',
    scheduledFor: '2024-03-21T16:30:00Z',
    thumbnail: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=300&h=200&fit=crop',
    estimatedRevenue: '200-400€',
    aiGenerated: true
  }
];

export function ContentQueue() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Contenu Programmé
        </h2>
        <button className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
          Voir tout
        </button>
      </div>
      <div className="space-y-4">
        {queuedContent.map((content) => (
          <div key={content.id} className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img src={content.thumbnail} alt="" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Video className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center space-x-2">
                <h3 className="text-white font-medium">{content.title}</h3>
                {content.aiGenerated && (
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                )}
              </div>
              <p className="text-purple-200 text-sm">
                Programmé pour le {new Date(content.scheduledFor).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-green-400 text-sm mt-1">
                Revenus estimés: {content.estimatedRevenue}
              </p>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5 text-purple-300 hover:text-purple-200" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}