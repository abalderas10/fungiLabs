import React, { useState } from 'react';
import { Menu, ShoppingCart, ChevronRight, ChevronDown } from 'lucide-react';

const products = [
  {
    name: "Extracto de Melena de León",
    description: "Mejora la memoria y función cognitiva",
    price: "$799",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQk1mWNoUdNVQtQ3rGKfvYmrX_9I7f4wteiz5fR4sCQWRXWbYm"
  },
  {
    name: "Tintura de Reishi",
    description: "Adaptógeno para el estrés",
    price: "$699",
    image: "https://www.bonza.dog/wp-content/uploads/Reishi-mushroom-adaptogen-with-excellent-health-benefits-for-dogs.webp"
  },
  {
    name: "Extracto de Cordyceps",
    description: "Energía y rendimiento",
    price: "$899",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2010-08-06_Cordyceps_militaris_1.jpg/640px-2010-08-06_Cordyceps_militaris_1.jpg"
  },
  {
    name: "Tintura de Chaga",
    description: "Potente antioxidante",
    price: "$749",
    image: "https://mejorconsalud.as.com/wp-content/uploads/2021/02/chaga-hongo.jpg"
  },
  {
    name: "Extracto de Maitake",
    description: "Apoyo inmunológico",
    price: "$649",
    image: "https://drvegan.com/cdn/shop/files/Maitake_Mushroom.jpg?v=1691011572&width=1200"
  },
  {
    name: "Tintura de Shiitake",
    description: "Salud cardiovascular",
    price: "$599",
    image: "https://notsi.mx/wp-content/uploads/2021/06/Shiitake.jpg"
  }
];

export default function Header() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-emerald-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm font-medium">
            Extractos Nootrópicos para el rendimiento, concentración, energía
          </p>
          <button className="text-sm bg-emerald-700 hover:bg-emerald-600 px-4 py-1 rounded-full flex items-center gap-1 transition-colors">
            Conoce más
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Main Header - Sticky */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-bold tracking-tight">Fungi Labs</h1>
              <nav className="hidden md:flex gap-8">
                <div className="relative">
                  <button
                    className="text-gray-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}
                  >
                    Productos
                    <ChevronDown size={16} />
                  </button>
                  
                  {/* Products Dropdown */}
                  {showProducts && (
                    <div
                      className="absolute top-full left-0 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-3 gap-6"
                      onMouseEnter={() => setShowProducts(true)}
                      onMouseLeave={() => setShowProducts(false)}
                    >
                      {products.map((product, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-1">{product.description}</p>
                          <p className="text-emerald-600 font-medium">{product.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <a href="#propiedades" className="text-gray-600 hover:text-emerald-700 transition-colors">Propiedades</a>
                <a href="#faq" className="text-gray-600 hover:text-emerald-700 transition-colors">Preguntas frecuentes</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}