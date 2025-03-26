import React from 'react';
import { Star, Check, X } from 'lucide-react';

const products = [
  {
    name: "Casque Premium A",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    price: "199,99 €",
    rating: 4.5,
    features: [
      "Réduction Active du Bruit",
      "40h d'Autonomie",
      "Qualité Audio Premium",
      "Port Confortable"
    ]
  },
  {
    name: "Casque Premium B",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    price: "249,99 €",
    rating: 4.8,
    features: [
      "Réduction Active du Bruit",
      "30h d'Autonomie",
      "Audio Haute Résolution",
      "Qualité de Construction Premium"
    ]
  },
  {
    name: "Casque Premium C",
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
    price: "179,99 €",
    rating: 4.2,
    features: [
      "Isolation Passive du Bruit",
      "35h d'Autonomie",
      "Son Équilibré",
      "Design Léger"
    ]
  }
];

const ProductComparison = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Comparez les Casques Premium</h1>
          <p className="text-gray-600">Trouvez le casque parfait pour vos besoins</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                </div>
                <p className="text-2xl font-bold text-indigo-600 mb-4">{product.price}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Voir les Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Tableau Comparatif Détaillé</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Caractéristiques
                  </th>
                  {products.map((product, index) => (
                    <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Prix
                  </td>
                  {products.map((product, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Note
                  </td>
                  {products.map((product, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.rating}/5
                    </td>
                  ))}
                </tr>
                {['Réduction du Bruit', 'Autonomie', 'Qualité Audio', 'Design'].map((feature, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature}
                    </td>
                    {products.map((product, index) => (
                      <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.features[idx] ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;