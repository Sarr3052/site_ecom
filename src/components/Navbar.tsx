import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Percent } from 'lucide-react';

const categories = [
  {
    name: "High-Tech",
    slug: "high-tech",
    subcategories: [
      { name: "Smartphones", slug: "smartphones" },
      { name: "Ordinateurs", slug: "ordinateurs" },
      { name: "Accessoires", slug: "accessoires" },
      { name: "Audio", slug: "audio" }
    ]
  },
  {
    name: "Gaming",
    slug: "gaming",
    subcategories: [
      { name: "Consoles", slug: "consoles" },
      { name: "Jeux Vidéo", slug: "jeux-video" },
      { name: "Accessoires Gaming", slug: "accessoires-gaming" }
    ]
  }
];

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Guides d\'Achat', href: '/guides' },
  { name: 'Comparatifs', href: '/comparatifs' },
  { name: 'Bons Plans', href: '/bons-plans' },
  { name: 'À Propos', href: '/a-propos' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Barre de promotion */}
        <div className="bg-indigo-600 text-white text-sm text-center py-2 px-4 flex items-center justify-center space-x-2">
          <Percent className="h-4 w-4" />
          <span>Découvrez nos meilleurs bons plans du moment !</span>
          <Link to="/bons-plans" className="underline font-medium">Voir les offres</Link>
        </div>

        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              TechDeals
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher un produit, un guide, un comparatif..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block border-t">
          <div className="flex items-center space-x-8 py-3">
            {navigation.map((nav, index) => (
              <div key={index}>
                <Link to={nav.href} className="text-gray-700 hover:text-indigo-600">
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            {/* Mobile Search */}
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Categories */}
            {categories.map((category, index) => (
              <div key={index} className="py-2">
                <div className="px-4 py-2 font-medium text-gray-900">{category.name}</div>
                <div className="pl-8">
                  {category.subcategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={`/categorie/${category.slug}/${sub.slug}`}
                      className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Navigation Links */}
            {navigation.map((nav, index) => (
              <div key={index} className="py-2">
                <Link to={nav.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;