import React from 'react';
import { Book, ChevronRight, Filter, Search } from 'lucide-react';

const categories = [
  {
    name: "High-Tech",
    subcategories: [
      "Smartphones",
      "Casques Audio",
      "Ordinateurs Portables",
      "Tablettes",
      "Montres Connectées"
    ]
  },
  {
    name: "Maison",
    subcategories: [
      "Électroménager",
      "Domotique",
      "Meubles",
      "Décoration",
      "Jardin"
    ]
  },
  {
    name: "Sport & Loisirs",
    subcategories: [
      "Fitness",
      "Running",
      "Vélos",
      "Camping",
      "Sports d'Hiver"
    ]
  }
];

const guides = [
  {
    title: "Guide Complet : Comment Choisir son Casque Audio en 2025",
    excerpt: "Découvrez tous les critères à prendre en compte pour choisir le casque audio parfait : qualité sonore, confort, autonomie, réduction de bruit...",
    category: "High-Tech",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    url: "/guides/choisir-casque-audio"
  },
  {
    title: "Les Meilleurs Smartphones à Moins de 500€ (2025)",
    excerpt: "Notre sélection des smartphones offrant le meilleur rapport qualité-prix, avec comparatif détaillé des performances, photos et autonomie.",
    category: "High-Tech",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    url: "/guides/smartphones-moins-500-euros"
  },
  {
    title: "Comment Choisir sa Montre Connectée ?",
    excerpt: "Guide complet pour choisir la montre connectée adaptée à vos besoins : sport, santé, notifications, autonomie...",
    category: "High-Tech",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    url: "/guides/choisir-montre-connectee"
  }
];

const BuyingGuides = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guides d'Achat & Comparatifs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des guides détaillés et des comparatifs pour vous aider à faire les meilleurs choix d'achat
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un guide d'achat..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar des catégories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Catégories
              </h2>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-indigo-600 flex items-center text-sm"
                          >
                            <ChevronRight className="h-4 w-4 mr-1" />
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Liste des guides */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {guides.map((guide, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="h-48 w-full md:w-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {guide.category}
                        </span>
                        <span className="ml-4 text-sm text-gray-500 flex items-center">
                          <Book className="h-4 w-4 mr-1" />
                          {guide.readTime} de lecture
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        <a href={guide.url} className="text-gray-900 hover:text-indigo-600">
                          {guide.title}
                        </a>
                      </h2>
                      <p className="text-gray-600 mb-4">{guide.excerpt}</p>
                      <a
                        href={guide.url}
                        className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
                      >
                        Lire le guide complet
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Précédent
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Suivant
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuides;
