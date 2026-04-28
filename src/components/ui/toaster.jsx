import React from 'react';
import { useToast } from '../../hooks/use-toast';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((t) => (
        <div 
          key={t.id} 
          className={`pointer-events-auto min-w-[320px] max-w-md p-5 rounded-2xl shadow-2xl animate-in slide-in-from-top-8 fade-in duration-500 flex gap-4 items-start ${
            t.variant === 'destructive' 
              ? 'bg-[#4a1818] text-[#ede4cf]' 
              : 'bg-[#ede4cf]/95 backdrop-blur-md text-[#4a1818] border border-[#4a1818]/10'
          }`}
        >
          {t.variant === 'destructive' ? (
            <AlertCircle className="shrink-0 mt-0.5" size={24} />
          ) : (
            <CheckCircle className="shrink-0 mt-0.5 opacity-80" size={24} />
          )}
          <div className="flex-1">
            {t.title && <h3 className="font-serif-icw font-medium text-xl leading-tight mb-1">{t.title}</h3>}
            {t.description && <p className="text-sm opacity-80 leading-snug">{t.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};
