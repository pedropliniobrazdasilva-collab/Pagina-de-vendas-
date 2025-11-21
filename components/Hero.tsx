import React from 'react';
import Button from './Button';
import { ShieldCheck, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Método comprovado e 100% prático</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Domine o Seu Dinheiro e <br className="hidden sm:block" />
            <span className="text-emerald-500">Transforme Seu Futuro</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            O curso prático e simples que ensina a organizar, guardar e usar seu dinheiro do jeito certo — mesmo ganhando pouco.
          </p>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 max-w-md mx-auto mb-10 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              40% OFF
            </div>
            
            <div className="text-slate-400 text-sm font-medium mb-1 line-through">
              De R$ 49,90 por apenas
            </div>
            
            <div className="flex items-baseline justify-center gap-1 text-white mb-6">
              <span className="text-2xl font-bold">R$</span>
              <span className="text-6xl font-extrabold text-emerald-400">29,90</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-emerald-400/80 text-sm font-medium bg-emerald-500/5 p-2 rounded-lg mb-6 border border-emerald-500/10">
              <CreditCard className="w-4 h-4" />
              <span>Acesso imediato após o pagamento</span>
            </div>
            
            <Button text="Quero começar agora" className="w-full" />
          </div>
          
          <p className="text-sm text-slate-500">
            Compra 100% Segura • Satisfação Garantida
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;