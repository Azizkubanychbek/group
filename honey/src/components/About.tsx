import React from 'react';
import { Code2, Beaker, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            От <span className="text-amber-500">кода</span> к мёду
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы решили применить наш опыт в IT к одной из самых древних отраслей. 
            Результат - революция в производстве мёда.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">IT-экспертиза</h3>
                  <p className="text-gray-300">15+ лет разработки и автоматизации</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Научный подход</h3>
                  <p className="text-gray-300">Контроль качества на каждом этапе</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Страсть к качеству</h3>
                  <p className="text-gray-300">Каждый продукт создается с любовью</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 rounded-2xl border border-amber-500/30">
              <blockquote className="text-gray-300 italic">
                "Мы поняли, что принципы чистого кода отлично применимы к производству мёда - 
                прозрачность, качество и внимание к деталям."
              </blockquote>
              <cite className="block mt-4 text-amber-600 font-semibold">— Команда Anteyko</cite>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 p-6 rounded-2xl border border-amber-500/20">
                  <Target className="w-8 h-8 text-amber-600 mb-4" />
                  <h4 className="font-semibold text-white mb-2">Миссия</h4>
                  <p className="text-gray-300 text-sm">Объединить технологии и природу для создания идеального мёда</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 rounded-2xl border border-blue-500/20">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mb-4"></div>
                  <h4 className="font-semibold text-white mb-2">Качество</h4>
                  <p className="text-gray-300 text-sm">Каждая партия проходит 100+ автоматизированных тестов</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-2xl border border-green-500/20">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mb-4"></div>
                  <h4 className="font-semibold text-white mb-2">Экология</h4>
                  <p className="text-gray-300 text-sm">Умные ульи минимизируют стресс пчёл</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg mb-4"></div>
                  <h4 className="font-semibold text-white mb-2">Инновации</h4>
                  <p className="text-gray-300 text-sm">IoT мониторинг состояния ульев 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
            <div className="text-gray-300">Умных ульев</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">1000+</div>
            <div className="text-gray-300">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
            <div className="text-gray-300">Мониторинг качества</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-300">Натуральный продукт</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;