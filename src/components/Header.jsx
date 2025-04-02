import { useState, useCallback, memo } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// Componente de ícone memoizado para melhor performance
const MenuIcon = memo(({ path, isActive }) => {
  const icons = {
    '/': (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    '/imoveis': (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zm-11 0h7v7H3v-7z" />
      </svg>
    ),
    '/sobre': (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
      </svg>
    ),
    '/servicos': (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
  };

  return icons[path] || null;
});

// Componente de link de menu memoizado
const MenuLink = memo(({ item, isActive }) => (
  <Link
    to={item.path}
    className={`text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
      isActive ? 'text-[#FF5722]' : 'text-white hover:text-[#FF5722] hover:animate-subtle-bounce'
    }`}
  >
    <MenuIcon path={item.path} isActive={isActive} />
    {item.label}
  </Link>
));

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Início' },
    { path: '/imoveis', label: 'Imóveis' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="bg-[#1E1E1E] text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            FERNANDO SANTOS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {menuItems.map(item => (
              <MenuLink
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
              />
            ))}
            <a
              href="https://wa.me/5583993002121"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF5722] text-white px-8 py-3 rounded-full font-medium hover:bg-[#F4511E] transition-all duration-300 hover:animate-glow"
            >
              <span className="flex items-center gap-2">
                <FaWhatsapp className="text-xl" />
                Fale Comigo
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="fixed inset-y-0 right-0 w-72 bg-[#1E1E1E] transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <span className="text-lg font-bold">FERNANDO SANTOS</span>
              <button
                className="text-gray-400 hover:text-white"
                onClick={toggleMenu}
                aria-label="Fechar menu"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <nav className="p-6 space-y-6">
              {menuItems.map(item => (
                <MenuLink
                  key={item.path}
                  item={item}
                  isActive={location.pathname === item.path}
                />
              ))}
              <a
                href="https://wa.me/5583993002121"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FF5722] text-white px-8 py-3 rounded-full font-medium hover:bg-[#F4511E] transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  Fale Comigo
                </span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Header); 