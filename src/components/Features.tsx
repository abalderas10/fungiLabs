import React from 'react';
import { Leaf, Shield, Award, Truck, RotateCcw } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Ingredientes Activos Naturales",
    description: "Principios activos naturales extraídos con precisión"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Científicamente Probado",
    description: "Comprobado por dermatólogos del Hospital Universitario Chapingo"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "No Psicodélicos",
    description: "Ingredientes naturales y efectivos para resultados probados"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Envío Gratis",
    description: "Por tiempo limitado a CDMX y Cancún"
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Garantía de 90 Días",
    description: "Devolución de tu dinero si no estás satisfecho"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}