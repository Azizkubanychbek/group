import React, { useState } from 'react';
import { Sparkles, Shield, Leaf, Award } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  badge?: string;
}

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Цветочный мёд",
      description: "Наш флагманский продукт - натуральный мёд, собранный с разнообразных полевых цветов.",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "1,200 сом",
      features: ["100% полевые цветы", "Натуральный вкус", "Прозрачность происхождения"],
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Липовый мёд",
      description: "Премиальный мёд из липы, собранный в экологически чистых липовых рощах.",
      image: "https://images.pexels.com/photos/302163/pexels-photo-302163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "1,800 сом",
      features: ["Премиум качество", "Натуральный липовый аромат", "Ограниченная серия"],
      badge: "Premium"
    },
    {
      id: 3,
      name: "Гречишный мёд",
      description: "Тёмный мёд с насыщенным вкусом, богатый микроэлементами и витаминами.",
      image: "https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "1,400 сом",
      features: ["Богат микроэлементами", "Насыщенный вкус", "Высокая питательность"]
    },
    {
      id: 4,
      name: "Акациевый мёд",
      description: "Светлый мёд деликатного вкуса, собранный с акациевых деревьев в экологически чистых районах.",
      image: "https://images.pexels.com/photos/32489540/pexels-photo-32489540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "1,600 сом",
      features: ["Деликатный вкус", "Долго не кристаллизуется", "Гипоаллергенный"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-800 to-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Наша <span className="text-amber-500">продукция</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Каждый сорт мёда создан с применением современных технологий и постоянным контролем качества
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={products[activeProduct].image}
                    alt={products[activeProduct].name}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  {products[activeProduct].badge && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {products[activeProduct].badge}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {products[activeProduct].name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {products[activeProduct].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {products[activeProduct].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-amber-600">
                      {products[activeProduct].price}
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-gray-800 shadow-lg border-2 border-amber-500/50'
                    : 'bg-gray-800/50 hover:bg-gray-800 hover:shadow-md'
                }`}
                onClick={() => setActiveProduct(index)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{product.name}</h4>
                    <p className="text-amber-600 font-medium">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-md">
            <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">Сертифицировано</h4>
            <p className="text-gray-300 text-sm">Все продукты имеют сертификаты качества</p>
          </div>
          <div className="text-center p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-md">
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">100% Натуральный</h4>
            <p className="text-gray-300 text-sm">Без добавок и консервантов</p>
          </div>
          <div className="text-center p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-md">
            <Leaf className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">Эко-производство</h4>
            <p className="text-gray-300 text-sm">Забота об окружающей среде</p>
          </div>
          <div className="text-center p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-md">
            <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h4 className="font-semibold text-white mb-2">Премия качества</h4>
            <p className="text-gray-300 text-sm">Победители конкурса "Мёд России 2024"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;