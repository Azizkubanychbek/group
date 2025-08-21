import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo_honey.png" 
                alt="Anteyko Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Anteyko Honey
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Революционное сочетание IT-технологий и традиционного пчеловодства. 
              Создаём мёд будущего уже сегодня.
            </p>
            <div className="flex items-center space-x-4">
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Продукция</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Цветочный мёд</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Липовый мёд</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Гречишный мёд</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Акациевый мёд</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Все сорта</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Компания</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">О нас</a></li>
              <li><a href="#technology" className="hover:text-amber-400 transition-colors">Технологии</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Партнёрам</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Контакты</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>0500303000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>honey@anteyko.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>г. Бишкек, ул. Горького, 1/2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Anteyko. Все права защищены. Сделано с ❤️ и 🍯
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🐝 Каждая пчела в наших ульях работает в комфортных условиях с применением современных технологий
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;