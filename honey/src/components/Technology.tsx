import React from 'react';
import { Cpu, Wifi, BarChart3, Database, Zap, Settings } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Технологии <span className="text-amber-400">будущего</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы интегрируем передовые IT-решения в традиционное пчеловодство, 
            создавая новые стандарты качества и эффективности
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wifi className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">IoT мониторинг ульев</h3>
                <p className="text-gray-300">
                  Датчики температуры, влажности и веса в реальном времени. 
                  Система предупреждений о критических изменениях в улье.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI анализ поведения пчёл</h3>
                <p className="text-gray-300">
                  Машинное обучение для прогнозирования роения, 
                  оптимизации времени сбора мёда и диагностики заболеваний.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Аналитика производительности</h3>
                <p className="text-gray-300">
                  Дашборд с метриками продуктивности каждого улья, 
                  прогнозы урожайности и оптимизация расположения.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Блокчейн сертификация</h3>
                <p className="text-gray-300">
                  Каждая банка мёда имеет уникальный QR-код с полной 
                  историей происхождения, записанной в блокчейне.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700">
                  <Zap className="w-8 h-8 text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white">99.8%</div>
                  <div className="text-gray-400 text-sm">Uptime ульев</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700">
                  <Settings className="w-8 h-8 text-green-400 mb-2" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 text-sm">Автомониторинг</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Температура улья</span>
                  <span className="text-green-400 font-semibold">35.2°C</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-4/5"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Влажность</span>
                  <span className="text-blue-400 font-semibold">62%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-3/5"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Активность пчёл</span>
                  <span className="text-amber-400 font-semibold">Высокая</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-400 h-2 rounded-full w-5/6"></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Все системы работают нормально</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Process */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Процесс производства</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Мониторинг</h4>
            <p className="text-gray-400 text-sm">Постоянное отслеживание состояния ульев через IoT датчики</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">AI анализ</h4>
            <p className="text-gray-400 text-sm">Искусственный интеллект определяет оптимальное время сбора</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Сбор мёда</h4>
            <p className="text-gray-400 text-sm">Бережный сбор с минимальным стрессом для пчелиной семьи</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2">Контроль качества</h4>
            <p className="text-gray-400 text-sm">100+ автоматизированных тестов перед упаковкой</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;