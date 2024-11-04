import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadGuide() {
  return (
    <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Descarga Nuestra Guía de Tinturas Medicinales
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Aprende todo sobre los hongos medicinales, sus beneficios y cómo incorporarlos en tu rutina diaria.
          </p>
          <button className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 hover:bg-emerald-50 transition-colors">
            <Download className="w-5 h-5" />
            Descargar Guía Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}