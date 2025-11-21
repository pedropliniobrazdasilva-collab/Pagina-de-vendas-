import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Não deixe para depois. O preço promocional pode acabar a qualquer momento.
            Comece hoje por apenas <span className="text-emerald-400 font-bold">R$ 29,90</span>.
          </p>
          <Button text="Acessar o curso agora" className="w-full sm:w-auto px-12" />
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
          <p className="mb-2">Domine o Seu Dinheiro © {new Date().getFullYear()}</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;