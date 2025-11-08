import { Code2, Smartphone, ShoppingCart, Users, TrendingUp, Calendar, ArrowRight, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Boutique',
      category: 'Tienda Online',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      icon: ShoppingCart,
      color: 'from-emerald-400 to-teal-600'
    },
    {
      id: 2,
      title: 'App de Gestión de Proyectos',
      category: 'Productividad',
      description: 'Aplicación móvil y web para equipos que necesitan coordinar tareas, deadlines y recursos en tiempo real.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      icon: Calendar,
      color: 'from-blue-400 to-sky-600'
    },
    {
      id: 3,
      title: 'Portal de Reservas Médicas',
      category: 'Salud',
      description: 'Sistema integral para clínicas y consultorios con agendamiento online, historial de pacientes y notificaciones.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'PostgreSQL', 'WebSockets'],
      icon: Users,
      color: 'from-rose-400 to-pink-600'
    },
    {
      id: 4,
      title: 'Dashboard Analítico',
      category: 'Business Intelligence',
      description: 'Herramienta de visualización de datos con reportes en tiempo real, métricas personalizadas y predicciones con IA.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
      icon: TrendingUp,
      color: 'from-amber-400 to-orange-600'
    },
    {
      id: 5,
      title: 'App de Delivery',
      category: 'Logística',
      description: 'Aplicación móvil para restaurantes con seguimiento en vivo, integración de pagos y sistema de calificaciones.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Google Maps', 'Firebase'],
      icon: Smartphone,
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 6,
      title: 'Plataforma de E-Learning',
      category: 'Educación',
      description: 'Sistema completo de cursos online con streaming de video, evaluaciones interactivas y certificaciones.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'AWS', 'GraphQL', 'Stripe'],
      icon: Code2,
      color: 'from-cyan-400 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/dumpling.png" alt="Dumpling" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900">Dumpling</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link to="/proyectos" className="text-blue-600 font-semibold">
                Proyectos
              </Link>
              <Link to="/#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contacto
              </Link>
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
              <Link
                to="/"
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/proyectos"
                className="block w-full text-left text-blue-600 font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                to="/#contacto"
                className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          )}
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ejemplos de <span className="text-blue-600">Proyectos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce el tipo de soluciones digitales que podemos desarrollar para tu negocio.
            Cada proyecto está diseñado para resolver necesidades específicas con tecnología de punta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Estos son solo ejemplos. Podemos desarrollar la solución perfecta para tu negocio,
            adaptada a tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/#contacto"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
            >
              Hablar con el equipo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
              Ver más ejemplos
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tecnología Moderna</h3>
            <p className="text-gray-600 text-sm">
              Utilizamos los frameworks y herramientas más actuales del mercado
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Escalabilidad</h3>
            <p className="text-gray-600 text-sm">
              Diseñamos soluciones que crecen junto con tu negocio
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">UX Centrado en el Usuario</h3>
            <p className="text-gray-600 text-sm">
              Priorizamos la experiencia del usuario en cada detalle
            </p>
          </div>
        </div>
      </div>

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

export default Projects;
