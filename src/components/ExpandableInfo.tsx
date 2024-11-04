import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: "Compuestos Bioactivos",
    content: "Nuestros extractos contienen beta-glucanos, triterpenos y otros compuestos bioactivos extraídos mediante procesos de doble extracción."
  },
  {
    title: "Proceso de Extracción",
    content: "Utilizamos un método de extracción dual que combina extracción en agua caliente y alcohol para maximizar la biodisponibilidad."
  },
  {
    title: "Certificaciones",
    content: "Todos nuestros productos están certificados por laboratorios independientes y cumplen con los más altos estándares de calidad."
  },
  {
    title: "Dosificación Recomendada",
    content: "La dosis recomendada varía según el producto. Generalmente se recomienda tomar 1-2 ml dos veces al día con las comidas."
  }
];

export default function ExpandableInfo() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[600px]">
            <img
              src="https://img.freepik.com/fotos-premium/setas-medicinales-tintura-superficie-marmol-hojas-otono-hierbas_868797-61995.jpg"
              alt="Extractos de hongos medicinales"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Información Detallada</h2>
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                >
                  <span className="font-medium">{section.title}</span>
                  {openSection === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openSection === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}