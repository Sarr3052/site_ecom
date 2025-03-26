import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';

// Données de démonstration d'un produit
const productData = {
  title: "Sony WH-1000XM4",
  description: "Le meilleur casque à réduction de bruit active du marché",
  rating: 4.8,
  reviewCount: 1250,
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
  ],
  specs: {
    "Type": "Casque sans fil",
    "Autonomie": "30 heures",
    "Connectivité": "Bluetooth 5.0",
    "Réduction de bruit": "Active",
    "Poids": "254g",
    "Charge rapide": "Oui (5h en 10min)",
  },
  pros: [
    "Réduction de bruit exceptionnelle",
    "Autonomie de 30 heures",
    "Son de haute qualité",
    "Multipoint Bluetooth",
    "Application complète"
  ],
  cons: [
    "Prix élevé",
    "Pas de résistance à l'eau",
    "Micro moyen pour les appels"
  ],
  price: "279,99 €",
  oldPrice: "379,99 €",
  affiliateLinks: [
    {
      platform: "Amazon" as const,
      url: "https://amazon.fr/sony-wh1000xm4?tag=votrecodedaffiliation",
      price: "279,99 €",
      oldPrice: "379,99 €",
      inStock: true
    },
    {
      platform: "Fnac" as const,
      url: "https://fnac.com/sony-wh1000xm4?tag=votrecodedaffiliation",
      price: "289,99 €",
      oldPrice: "379,99 €",
      inStock: true
    }
  ],
  verdict: "Le Sony WH-1000XM4 est tout simplement le meilleur casque à réduction de bruit active que nous ayons testé. Il combine une excellente qualité audio, une réduction de bruit performante et une autonomie impressionnante.",
  score: 9.5
};

const ProductPage = () => {
  const { productSlug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* En-tête du produit */}
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(productData.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{productData.rating}</span>
              <span className="text-gray-500">({productData.reviewCount} avis)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Galerie d'images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={productData.images[currentImageIndex]}
                  alt={productData.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? 'ring-2 ring-indigo-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productData.title} - Vue ${index + 1}`}
                      className="w-full h-full object-center object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informations produit */}
            <div className="space-y-6">
              {/* Prix et boutons d'achat */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{productData.price}</span>
                  {productData.oldPrice && (
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      {productData.oldPrice}
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  {productData.affiliateLinks.map((link, index) => (
                    <AffiliateButton
                      key={index}
                      platform={link.platform}
                      affiliateUrl={link.url}
                      price={link.price}
                      oldPrice={link.oldPrice}
                      inStock={link.inStock}
                    />
                  ))}
                </div>
              </div>

              {/* Pros et Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="flex items-center text-lg font-semibold text-green-700 mb-3">
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    Points forts
                  </h3>
                  <ul className="space-y-2">
                    {productData.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">+</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="flex items-center text-lg font-semibold text-red-700 mb-3">
                    <ThumbsDown className="h-5 w-5 mr-2" />
                    Points faibles
                  </h3>
                  <ul className="space-y-2">
                    {productData.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Caractéristiques */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Caractéristiques</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-2">
                  {Object.entries(productData.specs).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-1/3 text-gray-500">{key}</dt>
                      <dd className="w-2/3 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Verdict et note finale */}
          <div className="border-t p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Notre verdict</h2>
              <div className="flex items-center bg-indigo-100 rounded-full px-4 py-2">
                <span className="text-2xl font-bold text-indigo-600">{productData.score}</span>
                <span className="text-indigo-600 ml-1">/10</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg">{productData.verdict}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
