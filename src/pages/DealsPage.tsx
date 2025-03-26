import React, { useState } from 'react';
import { Percent, Timer, Tag, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Données de démonstration
const dealsData = {
  featuredDeals: [
    {
      title: "Sony WH-1000XM4",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      description: "Le meilleur casque à réduction de bruit active du marché",
      rating: 4.8,
      pros: [
        "Réduction de bruit exceptionnelle",
        "Autonomie de 30 heures",
        "Son de haute qualité"
      ],
      cons: [
        "Prix élevé",
        "Pas de résistance à l'eau"
      ],
      price: "279,99 €",
      oldPrice: "379,99 €",
      affiliateUrl: "https://amazon.fr/sony-wh1000xm4?tag=votrecodedaffiliation",
      platform: "Amazon" as const,
      discount: "-26%",
      endDate: "2024-02-20",
      bestChoice: true
    },
    {
      title: "Apple AirPods Pro 2",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      description: "Les écouteurs parfaits pour l'écosystème Apple",
      rating: 4.7,
      pros: [
        "Intégration parfaite iOS",
        "Excellent confort",
        "Audio spatial"
      ],
      cons: [
        "Prix premium",
        "Batterie moyenne"
      ],
      price: "249,99 €",
      oldPrice: "279,99 €",
      affiliateUrl: "https://amazon.fr/airpods-pro-2?tag=votrecodedaffiliation",
      platform: "Amazon" as const,
      discount: "-11%",
      endDate: "2024-02-18"
    }
  ],
  categories: [
    "Tous les deals",
    "Casques Audio",
    "Écouteurs",
    "Enceintes",
    "Smartphones",
    "Ordinateurs",
    "Accessoires"
  ],
  priceRanges: [
    "Moins de 50€",
    "50€ - 100€",
    "100€ - 200€",
    "200€ - 500€",
    "Plus de 500€"
  ],
  discountRanges: [
    "10% et plus",
    "20% et plus",
    "30% et plus",
    "50% et plus"
  ],
  platforms: [
    "Amazon",
    "Fnac",
    "Darty",
    "Boulanger"
  ]
};

const DealsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les deals");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedDiscountRange, setSelectedDiscountRange] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Calcul du temps restant
  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) {
      return `${days}j ${hours}h restants`;
    }
    return `${hours}h restants`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bons Plans Tech
          </h1>
          <p className="text-gray-600">
            Les meilleures offres tech sélectionnées et vérifiées par nos experts.
            Mise à jour quotidienne.
          </p>
        </div>

        {/* Barre de filtres mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
          >
            <Filter className="h-5 w-5" />
            <span>Filtres</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar des filtres */}
          <div className={`
            md:w-64 bg-white rounded-lg shadow-sm p-6
            ${isFilterOpen ? 'block' : 'hidden md:block'}
            fixed md:relative top-0 left-0 right-0 bottom-0 md:top-auto md:left-auto md:right-auto md:bottom-auto
            z-50 md:z-auto
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filtres</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Catégories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Catégories</h3>
              <div className="space-y-2">
                {dealsData.categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      selectedCategory === category
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Fourchette de prix */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Prix</h3>
              <div className="space-y-2">
                {dealsData.priceRanges.map(range => (
                  <label key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      value={range}
                      checked={selectedPriceRange.includes(range)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPriceRange([...selectedPriceRange, range]);
                        } else {
                          setSelectedPriceRange(selectedPriceRange.filter(r => r !== range));
                        }
                      }}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Réduction minimum */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Réduction minimum</h3>
              <div className="space-y-2">
                {dealsData.discountRanges.map(range => (
                  <label key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      value={range}
                      checked={selectedDiscountRange.includes(range)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedDiscountRange([...selectedDiscountRange, range]);
                        } else {
                          setSelectedDiscountRange(selectedDiscountRange.filter(r => r !== range));
                        }
                      }}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Plateformes */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Plateformes</h3>
              <div className="space-y-2">
                {dealsData.platforms.map(platform => (
                  <label key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      value={platform}
                      checked={selectedPlatform.includes(platform)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPlatform([...selectedPlatform, platform]);
                        } else {
                          setSelectedPlatform(selectedPlatform.filter(p => p !== platform));
                        }
                      }}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700">{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bouton d'application des filtres (mobile) */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="md:hidden w-full bg-indigo-600 text-white py-2 rounded-lg mt-4"
            >
              Appliquer les filtres
            </button>
          </div>

          {/* Liste des deals */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {dealsData.featuredDeals.map((deal, index) => (
                <div key={index} className="relative">
                  {/* Badge de réduction */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full">
                      <Percent className="h-4 w-4 mr-1" />
                      <span className="font-medium">{deal.discount}</span>
                    </div>
                  </div>
                  
                  {/* Timer */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full">
                      <Timer className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">
                        {getTimeRemaining(deal.endDate)}
                      </span>
                    </div>
                  </div>

                  <ProductCard {...deal} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
