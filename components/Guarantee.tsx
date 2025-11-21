import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full shadow-sm text-emerald-400 mb-6 border border-slate-700">
          <Shield className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Risco Zero para Você</h3>
        <p className="text-slate-400">
          Você tem <span className="font-bold text-white">7 dias para testar</span> o curso. 
          Se não gostar do conteúdo ou achar que não é para você, devolvemos 100% do seu dinheiro 
          sem complicações.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;