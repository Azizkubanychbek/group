import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Свяжитесь с <span className="text-amber-500">нами</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готовы попробовать мёд будущего? Напишите нам или оформите заказ прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-3xl p-8 border border-amber-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Отправить сообщение</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Спасибо за сообщение!</h4>
                  <p className="text-gray-300">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="Расскажите о ваших потребностях или задайте вопрос..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Отправить сообщение</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <p className="text-gray-300">0500303000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">honey@anteyko.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-gray-300">
                      г. Бишкек, ул. Горького, 1/2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-3xl p-8 border border-amber-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Время работы</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб:</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Вс:</span>
                  <span className="font-medium">Выходной</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl">
                <p className="text-sm text-gray-300">
                  💡 Онлайн-заказы принимаются круглосуточно через наш сайт!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;