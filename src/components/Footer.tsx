import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">AffiliateHub</span>
            </div>
            <p className="text-gray-400 mb-4">Votre source de confiance pour les recommandations et tests de produits.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/compare" className="text-gray-400 hover:text-white transition-colors">Comparer les Produits</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'Utilisation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories Populaires</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Électronique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maison & Jardin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mode</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beauté</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sports & Plein Air</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gadgets Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">contact@affiliatehub.fr</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">123 Rue des Affiliés, Paris</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AffiliateHub. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de Confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique des Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;