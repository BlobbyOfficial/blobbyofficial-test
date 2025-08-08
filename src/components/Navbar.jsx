import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Games', href: '/games' },
  { name: 'Music', href: '/music' },
  { name: 'Videos', href: '/videos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300',
        isScrolled ? 'bg-black/70 border-b border-gray-800 shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-white text-lg font-semibold">
          BlobbyOfficial
        </a>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-300 hover:text-white font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
