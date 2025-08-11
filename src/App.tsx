import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Coins, 
  MapPin, 
  Utensils, 
  Heart, 
  ChevronRight, 
  Mail, 
  Globe,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  Play,
  Award,
  Briefcase,
  PieChart,
  Languages,
  Send,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { BACKEND_URL } from './config';

type Language = 'ru' | 'en' | 'zh';

const translations = {
  ru: {
    nav: {
      about: 'О нас',
      business: 'Направления',
      career: 'Карьера',
      contact: 'Контакты',
      contactBtn: 'Связаться'
    },
    hero: {
      title: 'Создаем экосистему',
      titleAccent: 'будущего',
      description: 'Многопрофильный холдинг, объединяющий передовые технологии, инновационные решения и устойчивое развитие бизнеса на глобальном уровне.',
      learnMore: 'Узнать больше',
      ourProjects: 'Наши проекты'
    },
    stats: {
      directions: 'Направлений бизнеса',
      employees: 'Сотрудников',
      years: 'Лет на рынке',
      clients: 'Довольных клиентов'
    },
    about: {
      title: 'Кто мы',
      description1: 'Anteyko Group — амбициозный многопрофильный холдинг, создающий инновационную экосистему бизнесов в ключевых отраслях мировой экономики.',
      description2: 'Мы верим в силу диверсификации и технологических инноваций. Наша цель — объединить передовые решения в единую платформу, которая формирует будущее бизнеса и улучшает жизнь людей по всему миру.',
      reliability: 'Надежность',
      reliabilityDesc: 'Проверенное качество и стабильность во всех проектах',
      growth: 'Рост',
      growthDesc: 'Постоянное развитие и расширение сфер деятельности',
      innovation: 'Инновации',
      innovationDesc: 'Внедрение передовых технологий и решений'
    },
    mission: {
      title: 'Наша миссия и видение',
      missionTitle: 'Миссия',
      missionText: 'Создавать инновационную экосистему бизнесов, которая объединяет передовые технологии, качественные продукты и услуги, формируя новые стандарты в каждой отрасли нашего присутствия.',
      visionTitle: 'Видение',
      visionText: 'Стать глобальным лидером в создании интегрированных бизнес-решений, которые определяют будущее ключевых отраслей экономики и устанавливают новые стандарты качества.'
    },
    business: {
      title: 'Направления деятельности',
      subtitle: 'Диверсифицированный портфель бизнесов в ключевых отраслях экономики',
      active: 'Активно',
      development: 'В разработке',
      learnMore: 'Подробнее',
      areas: {
        software: {
          title: 'Разработка ПО',
          description: 'Создаем современные цифровые решения для бизнеса и государственных структур',
          achievements: ['50+ проектов', 'Корпоративные системы', 'Мобильные приложения']
        },
        blockchain: {
          title: 'Блокчейн и Криптовалюты',
          description: 'Разработка смарт-контрактов и DeFi решений для финансового сектора',
          achievements: ['25+ смарт-контрактов', 'DeFi протоколы', 'NFT платформы']
        },
        tokenization: {
          title: 'Токенизация Активов',
          description: 'Цифровизация реальных активов через блокчейн технологии',
          achievements: ['Недвижимость', 'Искусство', 'Инвестиционные токены']
        },
        tourism: {
          title: 'Туризм',
          description: 'Премиальные туристические услуги и экотуризм по Кыргызстану',
          achievements: ['1000+ туристов', 'Эко-туры', 'Культурные программы']
        },
        restaurant: {
          title: 'Ресторанный бизнес',
          description: 'Сеть ресторанов и суши-баров премиум класса',
          achievements: ['8 заведений', 'Авторская кухня', 'Кейтеринг']
        },
        textile: {
          title: 'Производство мёда',
          description: 'Пчеловодство и производство натурального мёда высшего качества для экспорта',
          achievements: ['Органический мёд', 'Собственные пасеки', 'Экспорт в 15+ стран']
        }
      }
    },
    cta: {
      title: 'Готовы к сотрудничеству?',
      subtitle: 'Свяжитесь с нами, чтобы обсудить возможности партнерства или узнать больше о наших услугах',
      contact: 'Связаться с нами',
      download: 'Скачать презентацию'
    },
    contact: {
      title: 'Контактная информация',
      formTitle: 'Отправить сообщение',
      email: 'Email',
      address: 'Адрес',
      name: 'Имя',
      message: 'Сообщение',
      send: 'Отправить сообщение'
    }
  },
  en: {
    nav: {
      about: 'About',
      business: 'Business',
      career: 'Career',
      contact: 'Contact',
      contactBtn: 'Contact Us'
    },
    hero: {
      title: 'Creating ecosystem of',
      titleAccent: 'the future',
      description: 'A diversified holding company combining cutting-edge technologies, innovative solutions and sustainable business development on a global scale.',
      learnMore: 'Learn More',
      ourProjects: 'Our Projects'
    },
    stats: {
      directions: 'Business Directions',
      employees: 'Employees',
      years: 'Years in Market',
      clients: 'Happy Clients'
    },
    about: {
      title: 'Who We Are',
      description1: 'Anteyko Group is an ambitious diversified holding company creating an innovative ecosystem of businesses in key sectors of the global economy.',
      description2: 'We believe in the power of diversification and technological innovation. Our goal is to unite advanced solutions into a unified platform that shapes the future of business and improves lives worldwide.',
      reliability: 'Reliability',
      reliabilityDesc: 'Proven quality and stability in all projects',
      growth: 'Growth',
      growthDesc: 'Continuous development and expansion of business areas',
      innovation: 'Innovation',
      innovationDesc: 'Implementation of advanced technologies and solutions'
    },
    mission: {
      title: 'Our Mission and Vision',
      missionTitle: 'Mission',
      missionText: 'To create an innovative ecosystem of businesses that unites advanced technologies, quality products and services, setting new standards in every industry of our presence.',
      visionTitle: 'Vision',
      visionText: 'To become a global leader in creating integrated business solutions that define the future of key economic sectors and establish new quality standards.'
    },
    business: {
      title: 'Business Directions',
      subtitle: 'Diversified portfolio of businesses in key economic sectors',
      active: 'Active',
      development: 'In Development',
      learnMore: 'Learn More',
      areas: {
        software: {
          title: 'Software Development',
          description: 'Creating modern digital solutions for business and government structures',
          achievements: ['50+ projects', 'Corporate systems', 'Mobile applications']
        },
        blockchain: {
          title: 'Blockchain & Crypto',
          description: 'Development of smart contracts and DeFi solutions for the financial sector',
          achievements: ['25+ smart contracts', 'DeFi protocols', 'NFT platforms']
        },
        tokenization: {
          title: 'Asset Tokenization',
          description: 'Digitization of real assets through blockchain technologies',
          achievements: ['Real Estate', 'Art', 'Investment tokens']
        },
        tourism: {
          title: 'Tourism',
          description: 'Premium tourism services and ecotourism in Kyrgyzstan',
          achievements: ['1000+ tourists', 'Eco-tours', 'Cultural programs']
        },
        restaurant: {
          title: 'Restaurant Business',
          description: 'Network of premium restaurants and sushi bars',
          achievements: ['8 establishments', 'Signature cuisine', 'Catering']
        },
        textile: {
          title: 'Honey Production',
          description: 'Beekeeping and production of premium natural honey for export',
          achievements: ['Organic honey', 'Own apiaries', 'Export to 15+ countries']
        }
      }
    },
    cta: {
      title: 'Ready to Collaborate?',
      subtitle: 'Contact us to discuss partnership opportunities or learn more about our services',
      contact: 'Contact Us',
      download: 'Download Presentation'
    },
    contact: {
      title: 'Contact Information',
      formTitle: 'Send Message',
      email: 'Email',
      address: 'Address',
      name: 'Name',
      message: 'Message',
      send: 'Send Message'
    }
  },
  zh: {
    nav: {
      about: '关于我们',
      business: '业务方向',
      career: '职业发展',
      contact: '联系我们',
      contactBtn: '联系我们'
    },
    hero: {
      title: '创造',
      titleAccent: '未来生态系统',
      description: '多元化控股公司，结合尖端技术、创新解决方案和全球范围内的可持续商业发展。',
      learnMore: '了解更多',
      ourProjects: '我们的项目'
    },
    stats: {
      directions: '业务方向',
      employees: '员工',
      years: '市场年限',
      clients: '满意客户'
    },
    about: {
      title: '我们是谁',
      description1: 'Anteyko集团是一家雄心勃勃的多元化控股公司，在全球经济关键领域创建创新的商业生态系统。',
      description2: '我们相信多元化和技术创新的力量。我们的目标是将先进解决方案整合到统一平台中，塑造商业未来，改善全世界人们的生活。',
      reliability: '可靠性',
      reliabilityDesc: '所有项目中经过验证的质量和稳定性',
      growth: '增长',
      growthDesc: '业务领域的持续发展和扩张',
      innovation: '创新',
      innovationDesc: '先进技术和解决方案的实施'
    },
    mission: {
      title: '我们的使命和愿景',
      missionTitle: '使命',
      missionText: '创建创新的商业生态系统，整合先进技术、优质产品和服务，在我们涉足的每个行业中设立新标准。',
      visionTitle: '愿景',
      visionText: '成为创建综合商业解决方案的全球领导者，定义关键经济部门的未来并建立新的质量标准。'
    },
    business: {
      title: '业务方向',
      subtitle: '关键经济部门的多元化业务组合',
      active: '活跃',
      development: '开发中',
      learnMore: '了解更多',
      areas: {
        software: {
          title: '软件开发',
          description: '为企业和政府机构创建现代数字解决方案',
          achievements: ['50+项目', '企业系统', '移动应用']
        },
        blockchain: {
          title: '区块链和加密货币',
          description: '为金融部门开发智能合约和DeFi解决方案',
          achievements: ['25+智能合约', 'DeFi协议', 'NFT平台']
        },
        tokenization: {
          title: '资产代币化',
          description: '通过区块链技术实现实物资产数字化',
          achievements: ['房地产', '艺术品', '投资代币']
        },
        tourism: {
          title: '旅游业',
          description: '吉尔吉斯斯坦的优质旅游服务和生态旅游',
          achievements: ['1000+游客', '生态旅游', '文化项目']
        },
        restaurant: {
          title: '餐饮业务',
          description: '高端餐厅和寿司吧网络',
          achievements: ['8家门店', '招牌菜', '餐饮服务']
        },
        textile: {
          title: '蜂蜜生产',
          description: '养蜂业和优质天然蜂蜜生产出口',
          achievements: ['有机蜂蜜', '自有蜂场', '出口15+国家']
        }
      }
    },
    cta: {
      title: '准备合作了吗？',
      subtitle: '联系我们讨论合作机会或了解更多关于我们的服务',
      contact: '联系我们',
      download: '下载演示文稿'
    },
    contact: {
      title: '联系信息',
      formTitle: '发送消息',
      email: '邮箱',
      address: '地址',
      name: '姓名',
      message: '消息',
      send: '发送消息'
    }
  }
};

// Contact Form Component
const ContactForm = ({ t }: { t: any }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Сообщение успешно отправлено!');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage('Ошибка при отправке сообщения. Попробуйте еще раз.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Ошибка соединения. Проверьте подключение к интернету.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-3">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span className="text-green-800 font-medium">{statusMessage}</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-3">
          <XCircle className="h-5 w-5 text-red-500" />
          <span className="text-red-800 font-medium">{statusMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.contact.name}
          </label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-all duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.contact.email}
          </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Компания (необязательно)
          </label>
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-all duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.contact.message}
          </label>
          <textarea 
            rows={5}
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Отправка...
            </>
          ) : (
            <>
              {t.contact.send}
              <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');

  const t = translations[currentLanguage];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'business', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessAreas = [
    {
      icon: Code,
      title: t.business.areas.software.title,
      description: t.business.areas.software.description,
      status: t.business.active,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.software.achievements
    },
    {
      icon: Coins,
      title: t.business.areas.blockchain.title,
      description: t.business.areas.blockchain.description,
      status: t.business.active,
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.blockchain.achievements
    },
    {
      icon: PieChart,
      title: t.business.areas.tokenization.title,
      description: t.business.areas.tokenization.description,
      status: t.business.development,
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.tokenization.achievements
    },
    {
      icon: MapPin,
      title: t.business.areas.tourism.title,
      description: t.business.areas.tourism.description,
      status: t.business.active,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.tourism.achievements
    },
    {
      icon: Utensils,
      title: t.business.areas.restaurant.title,
      description: t.business.areas.restaurant.description,
      status: t.business.active,
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.restaurant.achievements
    },
    {
      icon: Heart,
      title: t.business.areas.textile.title,
      description: t.business.areas.textile.description,
      status: t.business.active,
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: t.business.areas.textile.achievements
    }
  ];

  const stats = [
    { number: "6", label: t.stats.directions, icon: Briefcase },
    { number: "100+", label: t.stats.employees, icon: Users },
    { number: "5", label: t.stats.years, icon: Award },
    { number: "1000+", label: t.stats.clients, icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-900 transition-transform duration-300 hover:scale-110" />
              <div>
                <span className="text-2xl font-bold text-gray-900">ANTEYKO</span>
                <span className="text-sm text-gray-600 ml-2">GROUP</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: t.nav.about, id: 'about' },
                { name: t.nav.business, id: 'business' },
                { name: t.nav.career, id: 'career' },
                { name: t.nav.contact, id: 'contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`text-gray-700 hover:text-blue-900 transition-all duration-200 font-medium relative ${
                    activeSection === item.id ? 'text-blue-900' : ''
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-900 transition-all duration-300" />
                  )}
                </a>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <select 
                  value={currentLanguage} 
                  onChange={(e) => setCurrentLanguage(e.target.value as Language)}
                  className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-all duration-200 cursor-pointer border-none outline-none appearance-none pr-8"
                >
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                  <option value="zh">中文</option>
                </select>
                <Languages className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
              
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                {t.nav.contactBtn}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.hero.title}
                <span className="block text-blue-900">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                  <Play className="mr-2 h-5 w-5" />
                  {t.hero.learnMore}
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold hover:border-gray-400 transition-all duration-200 hover:scale-105 hover:shadow-md">
                  {t.hero.ourProjects}
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-200">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Business team" 
                className="rounded-lg shadow-xl w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Icon className="h-8 w-8 mx-auto text-blue-900 mb-3 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-700" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description2}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <Shield className="h-6 w-6 text-blue-900 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.about.reliability}</h3>
                    <p className="text-gray-600">{t.about.reliabilityDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <TrendingUp className="h-6 w-6 text-blue-900 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.about.growth}</h3>
                    <p className="text-gray-600">{t.about.growthDesc}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <Target className="h-6 w-6 text-blue-900 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.about.innovation}</h3>
                    <p className="text-gray-600">{t.about.innovationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern office" 
                className="rounded-lg shadow-xl w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.mission.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center group cursor-pointer">
              <Target className="h-12 w-12 mx-auto mb-6 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-2xl font-bold mb-4">{t.mission.missionTitle}</h3>
              <p className="text-blue-100 leading-relaxed">
                {t.mission.missionText}
              </p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <Award className="h-12 w-12 mx-auto mb-6 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-2xl font-bold mb-4">{t.mission.visionTitle}</h3>
              <p className="text-blue-100 leading-relaxed">
                {t.mission.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section id="business" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t.business.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.business.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, index) => {
              const Icon = area.icon;
              
              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index + 100)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-48">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        area.status === t.business.active
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-blue-900 mr-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {area.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                    
                    <button className="text-blue-900 font-semibold hover:text-blue-700 transition-all duration-200 flex items-center group-hover:translate-x-2">
                      {t.business.learnMore}
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-lg group">
              <Mail className="mr-2 h-5 w-5" />
              {t.cta.contact}
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold hover:border-gray-400 transition-all duration-200 hover:scale-105 hover:shadow-md">
              {t.cta.download}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.contact.title}
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: t.contact.email, info: "info@anteykogroup.kg" },
                  { icon: Globe, title: t.contact.address, info: "г. Бишкек, ул. Чуй 123, Кыргызстан" }
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                      <Icon className="h-6 w-6 text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.formTitle}
              </h3>
              <ContactForm t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-400 transition-transform duration-300 hover:scale-110" />
              <div>
                <span className="text-2xl font-bold">ANTEYKO GROUP</span>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 Anteyko Group. Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}

export default App;