import { Code2, Smartphone, CreditCard, Brain, Menu, X, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    {
      icon: Code2,
      title: 'Aplicaciones Web y Sitios',
      description: 'Desarrollamos plataformas web escalables y sitios corporativos con las últimas tecnologías para impulsar tu negocio.'
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Creamos aplicaciones nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.'
    },
    {
      icon: CreditCard,
      title: 'Automatización de Pagos',
      description: 'Integramos y automatizamos sistemas de pago seguros para optimizar tus procesos financieros.'
    },
    {
      icon: Brain,
      title: 'Soluciones con IA',
      description: 'Implementamos chatbots inteligentes, análisis predictivo y soluciones de machine learning adaptadas a tu industria.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/dumpling.png" alt="Dumpling" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900">dumpling</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Nosotros
              </button>
              <Link to="/proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Proyectos
              </Link>
              <button onClick={() => scrollToSection('equipo')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Equipo
              </button>
              <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contacto
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Nosotros
              </button>
              <Link
                to="/proyectos"
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <button
                onClick={() => scrollToSection('equipo')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacto
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Transformamos ideas en
                  <span className="text-blue-600"> soluciones tecnológicas</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Somos una agencia de desarrollo que impulsa negocios con aplicaciones web, móviles y soluciones inteligentes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    Empezar un proyecto
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    Ver servicios
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Desarrollo Web</p>
                        <p className="text-sm text-gray-600">React, Vue, Next.js</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Apps Móviles</p>
                        <p className="text-sm text-gray-600">iOS, Android, React Native</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-xl">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Inteligencia Artificial</p>
                        <p className="text-sm text-gray-600">ML, Chatbots, Análisis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones tecnológicas completas para hacer crecer tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Por qué elegir Dumpling?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales
                  que transforman negocios. Combinamos experiencia técnica con un profundo entendimiento
                  de las necesidades de nuestros clientes.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Años de experiencia</p>
                    <p className="text-gray-600 text-sm">Desarrollando soluciones innovadoras</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    50+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Proyectos exitosos</p>
                    <p className="text-gray-600 text-sm">En toda Latinoamérica</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2">Experiencia Local</h3>
                  <p className="text-gray-600">Entendemos el mercado argentino y latinoamericano</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2">Tecnología de Punta</h3>
                  <p className="text-gray-600">Utilizamos las últimas herramientas y frameworks</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2">Soporte Continuo</h3>
                  <p className="text-gray-600">Te acompañamos en cada etapa del proyecto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Equipo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Liderados por profesionales apasionados por la tecnología
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>
                    <div className="relative w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 200 200" className="w-32 h-32">
                          <circle cx="100" cy="80" r="35" fill="#93C5FD" />
                          <circle cx="85" cy="75" r="5" fill="#1E40AF" />
                          <circle cx="115" cy="75" r="5" fill="#1E40AF" />
                          <path d="M 85 90 Q 100 100 115 90" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round" />
                          <ellipse cx="100" cy="140" rx="50" ry="60" fill="#60A5FA" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Andrea Delgado
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    CEO & Cofundadora
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Con 20 años de experiencia en tecnología y liderazgo de proyectos, Andrea   lidera Dumpling con la visión de transformar ideas en soluciones digitales innovadoras.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      Liderazgo
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      Estrategia
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      Gestión
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-slate-600/20 rounded-full blur-2xl"></div>
                    <div className="relative w-40 h-40 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 200 200" className="w-32 h-32">
                          <circle cx="100" cy="80" r="35" fill="#CBD5E1" />
                          <circle cx="85" cy="75" r="5" fill="#334155" />
                          <circle cx="115" cy="75" r="5" fill="#334155" />
                          <path d="M 85 90 Q 100 100 115 90" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
                          <ellipse cx="100" cy="140" rx="50" ry="60" fill="#94A3B8" />
                          <rect x="75" y="60" width="50" height="4" fill="#334155" rx="2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Francisco Mendoza
                  </h3>
                  <p className="text-lg text-slate-600 font-semibold mb-4">
                    CTO & Cofundador
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Experto en arquitectura de software y tecnologías emergentes, Francisco dirige el desarrollo técnico
                    de Dumpling asegurando las mejores prácticas y herramientas.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      Arquitectura
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      DevOps
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      IA/ML
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hablemos de tu proyecto
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos listos para ayudarte a hacer realidad tu próxima idea
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">andrea.viviana.delgado.herrera@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+54 11 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Mensaje enviado exitosamente. Te contactaremos pronto!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="Tu nombre"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="+54 11 1234-5678"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/dumpling.png" alt="Dumpling" className="w-8 h-8" />
              <span className="text-xl font-bold">Dumpling</span>
            </div>
            <p className="text-gray-400">
              © 2024 Dumpling. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
