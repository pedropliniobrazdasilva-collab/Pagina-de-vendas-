import React from 'react';
import { DIFFERENTIALS } from '../constants';
import { CheckCircle2, Clock, Smile, Zap } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  CheckCircle2,
  Clock,
  Smile,
  Zap
};

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Por que este curso é <span className="text-emerald-400">diferente?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Chega de cursos complexos com planilhas que ninguém entende. 
              Criamos algo pensado para a vida real, para quem precisa de resultados rápidos.
            </p>
            <div className="space-y-6">
              {DIFFERENTIALS.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
             {/* Abstract visual representation of growth/simplicity */}
             <div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                  <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                  <div className="py-8 flex justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
                      <div className="text-slate-300 font-medium">Prático e Direto</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-20 bg-emerald-500/20 rounded-xl flex-1"></div>
                    <div className="h-20 bg-emerald-500/40 rounded-xl flex-1"></div>
                    <div className="h-20 bg-emerald-500 rounded-xl flex-1"></div>
                  </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;