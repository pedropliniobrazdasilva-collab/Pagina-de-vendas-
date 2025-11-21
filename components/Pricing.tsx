import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Tudo o que você precisa:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Acesso vitalício ao conteúdo",
                  "Acesso pelo celular e computador",
                  "Planilha de Controle Financeiro",
                  "Suporte para dúvidas",
                  "Certificado de conclusão"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-600 p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-black/20 px-4 py-1 rounded-bl-xl text-sm font-medium text-white backdrop-blur-sm">
                40% OFF
              </div>
              
              <p className="text-emerald-100 text-lg mb-1">De <span className="line-through decoration-emerald-300/70">R$ 49,90</span> por</p>
              
              <div className="flex items-baseline gap-1 justify-center mb-8 text-white">
                <span className="text-3xl font-bold">R$</span>
                <span className="text-6xl font-bold">29,90</span>
              </div>
              
              <Button 
                text="Quero garantir agora" 
                variant="secondary"
                className="w-full shadow-xl hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;