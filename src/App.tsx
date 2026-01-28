import { useState } from 'react';
import { Truck, Mail, Phone, Menu, X } from 'lucide-react';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900/95 backdrop-blur-sm fixed w-full z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="text-white font-bold text-xl tracking-wide">
                Saveway Investments
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-blue-500 shadow-lg shadow-blue-500/50'
                      : 'text-blue-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-blue-500'
                      : 'text-blue-400 hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Truck className="h-6 w-6 text-blue-400" />
              <span className="font-semibold text-white">
                Saveway Investments Limited
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a
                href="mailto:savewaylimited@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>savewaylimited@gmail.com</span>
              </a>
              <a
                href="tel:+254748019186"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+254 748 019 186</span>
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm">
            &copy; 2026 Saveway Investments Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
