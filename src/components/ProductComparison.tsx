import React from 'react';
import { Check, X, Star, Info } from 'lucide-react';
import AffiliateLink from './AffiliateLink';

interface Feature {
  name: string;
  description: string;
}

interface Product {
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  features: { [key: string]: boolean | string };
  affiliateUrl: string;
  platform: string;
  discount?: number;
}

interface ComparisonTableProps {
  products: Product[];
  features: Feature[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ products, features }) => {
  return (
    <div className="space-y-8">
      {/* Cartes de produits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <AffiliateLink
            key={index}
            title={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            affiliateUrl={product.affiliateUrl}
            platform={product.platform}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>

      {/* Tableau comparatif détaillé */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-indigo-600">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Note
                </td>
                {products.map((product, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2">{product.rating}/5</span>
                    </div>
                  </td>
                ))}
              </tr>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group relative">
                    {feature.name}
                    <div className="hidden group-hover:block absolute left-0 top-0 mt-8 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10">
                      {feature.description}
                    </div>
                  </td>
                  {products.map((product, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {typeof product.features[feature.name] === 'boolean' ? (
                        product.features[feature.name] ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        <span>{product.features[feature.name]}</span>
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
  );
};

export default ComparisonTable;
