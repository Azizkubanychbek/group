import React from 'react';
import { ArrowDown, Zap, Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-amber-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">IT компания в мире мёда</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Код встречает
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"> мёд</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Мы применили технологический подход к производству натурального мёда. 
                Инновации в каждой капле, качество в каждом байте.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
                Попробовать мёд
              </button>
              <button className="px-8 py-4 border-2 border-amber-500 text-amber-400 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
                Наша история
              </button>
            </div>

            <div className="flex items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>100% натуральный</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Tech контроль качества</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Hexagonal honey container */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 transform rotate-12 rounded-3xl opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                          <path d="M8 11h8v2H8v-2zm0 4h8v2H8v-2z" fill="rgba(255,255,255,0.8)"/>
                        </svg>
                      </div>
                      <div className="text-white font-bold text-xl">ANTEYKO</div>
                      <div className="text-amber-100 text-sm">Tech Honey</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-amber-400" />
      </div>
    </section>
  );
};

export default Hero;