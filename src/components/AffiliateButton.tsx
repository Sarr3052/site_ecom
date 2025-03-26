import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface AffiliateButtonProps {
  platform: 'Amazon' | 'AliExpress' | 'Cdiscount' | 'Fnac';
  affiliateUrl: string;
  price: string;
  oldPrice?: string;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const platformColors = {
  Amazon: 'bg-[#FF9900] hover:bg-[#FF9900]/90',
  AliExpress: 'bg-[#FF4747] hover:bg-[#FF4747]/90',
  Cdiscount: 'bg-[#00A0E4] hover:bg-[#00A0E4]/90',
  Fnac: 'bg-[#FFF000] hover:bg-[#FFF000]/90 text-black'
};

const platformLogos = {
  Amazon: '🛒',
  AliExpress: '🌟',
  Cdiscount: '💫',
  Fnac: '📚'
};

const AffiliateButton: React.FC<AffiliateButtonProps> = ({
  platform,
  affiliateUrl,
  price,
  oldPrice,
  label = 'Voir le prix',
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const handleClick = () => {
    // Ajouter ici le tracking des clics si nécessaire
    window.open(affiliateUrl, '_blank');
  };

  const discount = oldPrice ? Math.round(((parseFloat(oldPrice.replace('€', '').replace(',', '.')) - 
    parseFloat(price.replace('€', '').replace(',', '.'))) / 
    parseFloat(oldPrice.replace('€', '').replace(',', '.'))) * 100) : 0;

  return (
    <div className="inline-block">
      <button
        onClick={handleClick}
        className={`
          ${platformColors[platform]}
          ${sizeClasses[size]}
          rounded-lg
          text-white
          font-medium
          transition-all
          duration-200
          flex
          items-center
          space-x-2
          shadow-md
          hover:shadow-lg
          transform
          hover:-translate-y-0.5
        `}
      >
        <span>{platformLogos[platform]}</span>
        <span>{label}</span>
        <span className="flex items-center space-x-2">
          <span className="font-bold">{price}</span>
          {oldPrice && (
            <span className="text-xs line-through opacity-75">{oldPrice}</span>
          )}
        </span>
        {discount > 0 && (
          <span className="bg-white text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
            -{discount}%
          </span>
        )}
        <ExternalLink className="h-4 w-4" />
      </button>
      <div className="text-xs text-gray-500 mt-1 text-center">
        *Le prix peut varier depuis la dernière mise à jour
      </div>
    </div>
  );
};

export default AffiliateButton;
