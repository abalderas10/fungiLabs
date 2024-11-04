import React, { useState } from 'react';
import { Plus, Minus, Brain, Shield, Zap, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Inmunomoduladores",
    icon: <Shield className="w-6 h-6" />,
    mushrooms: [
      {
        name: "Maitake",
        image: "https://drvegan.com/cdn/shop/files/Maitake_Mushroom.jpg?v=1691011572&width=1200",
        compounds: "Beta-glucanos, proteoglucanos"
      },
      {
        name: "Shiitake",
        image: "https://notsi.mx/wp-content/uploads/2021/06/Shiitake.jpg",
        compounds: "Lentinan, eritadenina"
      },
      {
        name: "Reishi",
        image: "https://www.bonza.dog/wp-content/uploads/Reishi-mushroom-adaptogen-with-excellent-health-benefits-for-dogs.webp",
        compounds: "Ganodéridos, beta-glucanos"
      }
    ],
    description: "Fortalecen el sistema inmunológico de forma inteligente",
    details: "Los beta-glucanos y otros polisacáridos bioactivos modulan la respuesta inmune, activando células NK y macrófagos. Estos compuestos mejoran la comunicación entre células inmunes y aumentan la producción de citoquinas antiinflamatorias.",
    benefits: [
      "Aumento de células NK y macrófagos",
      "Modulación de citoquinas",
      "Mejora de la respuesta inmune adaptativa",
      "Propiedades antiinflamatorias"
    ]
  },
  {
    title: "Adaptógenos y Antiinflamatorios",
    icon: <Sparkles className="w-6 h-6" />,
    mushrooms: [
      {
        name: "Reishi",
        image: "https://www.bonza.dog/wp-content/uploads/Reishi-mushroom-adaptogen-with-excellent-health-benefits-for-dogs.webp",
        compounds: "Triterpenos, ácido ganodérico"
      },
      {
        name: "Chaga",
        image: "https://mejorconsalud.as.com/wp-content/uploads/2021/02/chaga-hongo.jpg",
        compounds: "Ácido betulínico, melanina"
      }
    ],
    description: "Ayudan al cuerpo a adaptarse al estrés físico y mental",
    details: "Los triterpenos y otros compuestos adaptogénicos ayudan al cuerpo a mantener la homeostasis y resistir el estrés. Regulan el eje hipotalámico-pituitario-adrenal (HPA) y tienen efectos antiinflamatorios.",
    benefits: [
      "Reducción del estrés oxidativo",
      "Equilibrio hormonal",
      "Mejora del sueño",
      "Reducción de la inflamación crónica"
    ]
  },
  {
    title: "Antioxidantes",
    icon: <Shield className="w-6 h-6" />,
    mushrooms: [
      {
        name: "Chaga",
        image: "https://mejorconsalud.as.com/wp-content/uploads/2021/02/chaga-hongo.jpg",
        compounds: "SOD, melanina"
      },
      {
        name: "Cordyceps",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2010-08-06_Cordyceps_militaris_1.jpg/640px-2010-08-06_Cordyceps_militaris_1.jpg",
        compounds: "Cordycepina, ergosterol"
      }
    ],
    description: "Combaten el daño oxidativo y el envejecimiento celular",
    details: "Contienen potentes antioxidantes como la superóxido dismutasa (SOD) y otros compuestos que neutralizan los radicales libres. La melanina del Chaga es uno de los antioxidantes más potentes encontrados en la naturaleza.",
    benefits: [
      "Protección celular",
      "Anti-envejecimiento",
      "Apoyo cardiovascular",
      "Desintoxicación"
    ]
  },
  {
    title: "Nootrópicos",
    icon: <Brain className="w-6 h-6" />,
    mushrooms: [
      {
        name: "Melena de león",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQk1mWNoUdNVQtQ3rGKfvYmrX_9I7f4wteiz5fR4sCQWRXWbYm",
        compounds: "Hericenones, erinacinas"
      },
      {
        name: "Cordyceps",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2010-08-06_Cordyceps_militaris_1.jpg/640px-2010-08-06_Cordyceps_militaris_1.jpg",
        compounds: "Cordycepina, adenosina"
      }
    ],
    description: "Potencian la función cognitiva y la salud cerebral",
    details: "Las erinacinas y hericenones estimulan la producción del Factor de Crecimiento Nervioso (NGF), crucial para la salud neuronal. La cordycepina mejora el flujo sanguíneo cerebral y la utilización de oxígeno.",
    benefits: [
      "Mejora de la memoria",
      "Mayor claridad mental",
      "Neuroplasticidad",
      "Neuroprotección"
    ]
  }
];

export default function MushroomCards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Clasificación de Hongos Medicinales</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Descubre los beneficios específicos de cada categoría de hongos medicinales y sus compuestos bioactivos
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <button className="text-emerald-600">
                    {expandedCard === index ? <Minus /> : <Plus />}
                  </button>
                </div>
              </div>
              
              {expandedCard === index && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {category.mushrooms.map((mushroom, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="aspect-square rounded-lg overflow-hidden mb-3">
                          <img
                            src={mushroom.image}
                            alt={mushroom.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-sm mb-1">{mushroom.name}</h4>
                        <p className="text-xs text-gray-500">{mushroom.compounds}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2">Detalles científicos</h4>
                    <p className="text-gray-700 text-sm">{category.details}</p>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-emerald-800">Beneficios principales</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-emerald-700 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}