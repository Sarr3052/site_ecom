import React from 'react';
import { Star, ThumbsUp, ThumbsDown, Award, Shield, Zap } from 'lucide-react';
import AffiliateLink from './AffiliateLink';

interface ProductReviewProps {
  title: string;
  image: string;
  rating: number;
  price: string;
  oldPrice?: string;
  platform: string;
  affiliateUrl: string;
  discount?: number;
  pros: string[];
  cons: string[];
  verdict: string;
  specifications: { [key: string]: string };
}

const ProductReview: React.FC<ProductReviewProps> = ({
  title,
  image,
  rating,
  price,
  oldPrice,
  platform,
  affiliateUrl,
  discount,
  pros,
  cons,
  verdict,
  specifications
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* En-tête */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{rating}/5</span>
          </div>
          <span className="text-sm text-gray-500">Note Globale</span>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Image et lien d'affiliation */}
        <div>
          <img src={image} alt={title} className="w-full rounded-lg mb-4" />
          <AffiliateLink
            title={title}
            price={price}
            oldPrice={oldPrice}
            affiliateUrl={affiliateUrl}
            platform={platform}
            discount={discount}
          />
        </div>

        {/* Pros et Cons */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center text-green-600">
              <ThumbsUp className="h-5 w-5 mr-2" />
              Points Forts
            </h2>
            <ul className="space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center text-red-600">
              <ThumbsDown className="h-5 w-5 mr-2" />
              Points Faibles
            </h2>
            <ul className="space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-indigo-50 p-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          <Award className="h-5 w-5 mr-2 text-indigo-600" />
          Notre Verdict
        </h2>
        <p className="text-gray-700">{verdict}</p>
      </div>

      {/* Spécifications techniques */}
      <div className="p-6 border-t">
        <h2 className="text-lg font-semibold mb-4">Spécifications Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(specifications).map(([key, value], index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-gray-600 font-medium">{key}:</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Badges de confiance */}
      <div className="bg-gray-50 p-6 border-t">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Shield className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
            <span className="text-sm text-gray-600">Produit Vérifié</span>
          </div>
          <div className="text-center">
            <Zap className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
            <span className="text-sm text-gray-600">Meilleur Prix Garanti</span>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
            <span className="text-sm text-gray-600">Test Approfondi</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductReview;
