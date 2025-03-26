import React from 'react';
import { Star, Award, ThumbsUp } from 'lucide-react';
import AffiliateButton from './AffiliateButton';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
  pros: string[];
  cons: string[];
  price: string;
  oldPrice?: string;
  affiliateUrl: string;
  platform: 'Amazon' | 'AliExpress' | 'Cdiscount' | 'Fnac';
  bestChoice?: boolean;
  bestValue?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  description,
  rating,
  pros,
  cons,
  price,
  oldPrice,
  affiliateUrl,
  platform,
  bestChoice,
  bestValue
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {(bestChoice || bestValue) && (
        <div className={`${bestChoice ? 'bg-indigo-600' : 'bg-green-600'} text-white py-2 px-4 flex items-center justify-center space-x-2`}>
          {bestChoice && (
            <>
              <Award className="h-5 w-5" />
              <span className="font-medium">Meilleur Choix</span>
            </>
          )}
          {bestValue && (
            <>
              <ThumbsUp className="h-5 w-5" />
              <span className="font-medium">Meilleur Rapport Qualité/Prix</span>
            </>
          )}
        </div>
      )}
      
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="font-medium">{rating.toFixed(1)}/5</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="mb-4">
          <div className="mb-2">
            <h4 className="font-medium text-green-600 mb-1">Points Forts</h4>
            <ul className="text-sm space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-600 mb-1">Points Faibles</h4>
            <ul className="text-sm space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-red-500">✗</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <AffiliateButton
            platform={platform}
            affiliateUrl={affiliateUrl}
            price={price}
            oldPrice={oldPrice}
            label="Voir le prix"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
