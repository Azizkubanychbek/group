import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Hexagon, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {onBack && (
              <button
                onClick={onBack}
                className="mr-4 p-2 text-white hover:text-amber-500 transition-colors rounded-lg hover:bg-white/10"
                title="Вернуться на главную"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="relative">
              <img 
                src="/logo_honey.png" 
                alt="Anteyko Logo" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Anteyko Honey
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-amber-500 transition-colors font-medium">
              Главная
            </a>
            <a href="#about" className="text-white hover:text-amber-500 transition-colors font-medium">
              О нас
            </a>
            <a href="#products" className="text-white hover:text-amber-500 transition-colors font-medium">
              Продукция
            </a>
            <a href="#technology" className="text-white hover:text-amber-500 transition-colors font-medium">
              Технологии
            </a>
            <a href="#contact" className="text-white hover:text-amber-500 transition-colors font-medium">
              Контакты
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-white hover:text-amber-500 transition-colors font-medium">
                Главная
              </a>
              <a href="#about" className="text-white hover:text-amber-500 transition-colors font-medium">
                О нас
              </a>
              <a href="#products" className="text-white hover:text-amber-500 transition-colors font-medium">
                Продукция
              </a>
              <a href="#technology" className="text-white hover:text-amber-500 transition-colors font-medium">
                Технологии
              </a>
              <a href="#contact" className="text-white hover:text-amber-500 transition-colors font-medium">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;