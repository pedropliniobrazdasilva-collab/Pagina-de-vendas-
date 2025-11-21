import React from 'react';
import { FEATURES } from '../constants';
import { Layout, PiggyBank, TrendingUp, ShieldCheck, ShoppingCart } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Layout,
  PiggyBank,
  TrendingUp,
  ShieldCheck,
  ShoppingCart
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Um método passo a passo para sair do caos financeiro e começar a construir sua tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-emerald-900/20 border border-slate-800">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;