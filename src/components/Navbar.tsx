import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">WebXNet</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Serviços</a>
              <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Sobre</a>
              <a href="#contact" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;