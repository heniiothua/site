import { memo } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Componente de link de contato memoizado
const ContactItem = memo(({ icon: Icon, text }) => (
  <p className="flex items-center text-gray-300">
    <Icon className="mr-3 text-[#FF5722]" />
    {text}
  </p>
));

// Componente de link de navegação memoizado
const NavLink = memo(({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-gray-300 hover:text-[#FF5722] transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
));

// Componente de link social memoizado
const SocialLink = memo(({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#FF5722] transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="text-2xl" />
  </a>
));

function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/imoveis', label: 'Imóveis' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/contato', label: 'Contato' },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/fernando.pedro.33',
      icon: FaFacebook,
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/fernandosantos.corretor_/',
      icon: FaInstagram,
      label: 'Instagram',
    },
    {
      href: 'https://wa.me/5583993002121',
      icon: FaWhatsapp,
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <ContactItem icon={FaPhone} text="(83) 9300-2121" />
              <ContactItem icon={FaEnvelope} text="fernandopedro042@gmail.com" />
              <ContactItem icon={FaMapMarkerAlt} text="João Pessoa, PB" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {navLinks.map(({ to, label }) => (
                <NavLink key={to} to={to}>
                  {label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-6">
              {socialLinks.map(({ href, icon, label }) => (
                <SocialLink
                  key={href}
                  href={href}
                  icon={icon}
                  label={label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Fernando Santos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer); 