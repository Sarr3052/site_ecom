import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Données de démonstration
const products = [
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
    platform: "Amazon" as const
  }
];

const sortOptions = [
  { label: "Popularité", value: "popularity" },
  { label: "Prix croissant", value: "price-asc" },
  { label: "Prix décroissant", value: "price-desc" },
  { label: "Meilleures notes", value: "rating" }
];

const priceRanges = [
  { label: "Moins de 100€", value: "0-100" },
  { label: "100€ - 200€", value: "100-200" },
  { label: "200€ - 300€", value: "200-300" },
  { label: "Plus de 300€", value: "300+" }
];

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Convertir le slug en nom lisible
  const categoryName = categorySlug
    ?.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête de la catégorie */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryName}</h1>
          <p className="text-gray-600">
            Découvrez notre sélection des meilleurs produits {categoryName}, 
            testés et approuvés par nos experts.
          </p>
        </div>

        {/* Barre de filtres mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
          >
            <Filter className="h-5 w-5" />
            <span>Filtres et tri</span>
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

            {/* Tri */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Trier par</h3>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtres de prix */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Prix</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <label key={range.value} className="flex items-center">
                    <input
                      type="checkbox"
                      value={range.value}
                      checked={selectedPriceRange.includes(range.value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPriceRange([...selectedPriceRange, range.value]);
                        } else {
                          setSelectedPriceRange(selectedPriceRange.filter(r => r !== range.value));
                        }
                      }}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700">{range.label}</span>
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

          {/* Liste des produits */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
