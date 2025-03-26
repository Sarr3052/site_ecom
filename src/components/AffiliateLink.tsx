import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface AffiliateLinkProps {
  title: string;
  price: string;
  oldPrice?: string;
  affiliateUrl: string;
  platform: string;
  discount?: number;
  image?: string;
}

const AffiliateLink: React.FC<AffiliateLinkProps> = ({
  title,
  price,
  oldPrice,
  affiliateUrl,
  platform,
  discount,
  image
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // Ici, vous pouvez ajouter le tracking des clics
    console.log(`Clic sur le lien d'affiliation: ${title}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative mb-4">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
          {discount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </span>
          )}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xl font-bold text-indigo-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">{oldPrice}</span>
          )}
        </div>
        <span className="text-sm text-gray-500">{platform}</span>
      </div>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Voir l'Offre
        <ExternalLink className="h-4 w-4 ml-2" />
      </a>
    </div>
  );
};

export default AffiliateLink;
