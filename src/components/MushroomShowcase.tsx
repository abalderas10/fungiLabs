import React from 'react';

const mushrooms = [
  {
    name: "Melena de León",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQk1mWNoUdNVQtQ3rGKfvYmrX_9I7f4wteiz5fR4sCQWRXWbYm",
    description: "Conocido por sus propiedades nootrópicas, mejora la memoria y función cognitiva. Estimula la producción del Factor de Crecimiento Nervioso (NGF)."
  },
  {
    name: "Reishi",
    image: "https://www.bonza.dog/wp-content/uploads/Reishi-mushroom-adaptogen-with-excellent-health-benefits-for-dogs.webp",
    description: "El hongo de la inmortalidad. Adaptógeno que ayuda a reducir el estrés y fortalece el sistema inmunológico."
  },
  {
    name: "Cordyceps",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2010-08-06_Cordyceps_militaris_1.jpg/640px-2010-08-06_Cordyceps_militaris_1.jpg",
    description: "Mejora la energía, resistencia y rendimiento físico. Potente antioxidante y apoyo para la función pulmonar."
  },
  {
    name: "Chaga",
    image: "https://mejorconsalud.as.com/wp-content/uploads/2021/02/chaga-hongo.jpg",
    description: "Rey de los antioxidantes. Apoya la salud inmunológica y tiene propiedades antiinflamatorias naturales."
  },
  {
    name: "Maitake",
    image: "https://drvegan.com/cdn/shop/files/Maitake_Mushroom.jpg?v=1691011572&width=1200",
    description: "Conocido como el hongo danzante. Regula el sistema inmune y ayuda en el control de glucosa en sangre."
  },
  {
    name: "Shiitake",
    image: "https://notsi.mx/wp-content/uploads/2021/06/Shiitake.jpg",
    description: "Fortalece el sistema inmunológico y cardiovascular. Rico en compuestos bioactivos y aminoácidos esenciales."
  }
];

export default function MushroomShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nuestros Hongos Medicinales</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra selección de hongos medicinales cuidadosamente seleccionados por sus propiedades únicas y beneficios para la salud.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mushrooms.map((mushroom, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={mushroom.image}
                  alt={mushroom.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{mushroom.name}</h3>
                <p className="text-gray-600">{mushroom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}