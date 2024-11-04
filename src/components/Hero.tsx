import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://funginatur.com/wp-content/uploads/2024/01/il_1140xN.5614049851_1arm-1-1024x768.jpg"
          alt="Extracto de Melena de León"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-6">
            Potencia tu mente naturalmente
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Descubre el poder de los extractos de Melena de León, científicamente probados para mejorar la función cognitiva, memoria y concentración.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 transition-colors">
            Comienza ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}