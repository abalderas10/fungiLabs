import React from 'react';
import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-emerald-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <Shield className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-4">
          Resultados garantizados o te devolvemos el dinero
        </h2>
        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
          Confiamos tanto en la calidad de nuestros productos que ofrecemos una garantía de satisfacción de 90 días. Si no estás completamente satisfecho, te devolvemos el 100% de tu dinero.
        </p>
      </div>
    </section>
  );
}