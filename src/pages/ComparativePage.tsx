import React from 'react';
import { useParams } from 'react-router-dom';
import { Check, X, AlertTriangle } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';

// Données de démonstration
const comparisonData = {
  category: "Casques Audio Sans Fil",
  products: [
    {
      title: "Sony WH-1000XM4",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      rating: 4.8,
      price: "279,99 €",
      oldPrice: "379,99 €",
      affiliateUrl: "https://amazon.fr/sony-wh1000xm4?tag=votrecodedaffiliation",
      platform: "Amazon" as const,
      specs: {
        "Autonomie": "30 heures",
        "Réduction de bruit": "Excellente",
        "Qualité audio": "Exceptionnelle",
        "Confort": "Très bon",
        "Connectivité": "Bluetooth 5.0, Multipoint",
        "Résistance eau": "Non",
        "Charge rapide": "Oui",
        "Assistant vocal": "Oui",
        "Commandes tactiles": "Oui"
      },
      pros: [
        "Meilleure réduction de bruit",
        "Excellente qualité audio",
        "Autonomie impressionnante",
        "Multipoint Bluetooth"
      ],
      cons: [
        "Prix élevé",
        "Pas de résistance à l'eau",
        "Micro moyen pour les appels"
      ],
      verdict: "Le meilleur casque sans fil global",
      score: 9.5,
      bestFor: "Les voyageurs et audiophiles"
    },
    {
      title: "Bose QC45",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      rating: 4.6,
      price: "249,99 €",
      oldPrice: "349,99 €",
      affiliateUrl: "https://amazon.fr/bose-qc45?tag=votrecodedaffiliation",
      platform: "Amazon" as const,
      specs: {
        "Autonomie": "24 heures",
        "Réduction de bruit": "Très bonne",
        "Qualité audio": "Très bonne",
        "Confort": "Excellent",
        "Connectivité": "Bluetooth 5.1",
        "Résistance eau": "Non",
        "Charge rapide": "Oui",
        "Assistant vocal": "Oui",
        "Commandes tactiles": "Non"
      },
      pros: [
        "Confort exceptionnel",
        "Très bonne réduction de bruit",
        "Simple d'utilisation",
        "Son équilibré"
      ],
      cons: [
        "Pas de connexion multipoint",
        "Moins de fonctionnalités",
        "Application basique"
      ],
      verdict: "Le plus confortable",
      score: 8.8,
      bestFor: "Ceux qui privilégient le confort"
    }
  ]
};

const ComparativePage = () => {
  const { compareSlug } = useParams();

  // Fonction pour rendre la valeur d'une spécification
  const renderSpecValue = (value: string) => {
    if (value.toLowerCase() === "oui") {
      return <Check className="h-5 w-5 text-green-500" />;
    } else if (value.toLowerCase() === "non") {
      return <X className="h-5 w-5 text-red-500" />;
    }
    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Comparatif : {comparisonData.category}
          </h1>
          <p className="text-gray-600">
            Nous avons comparé les meilleurs produits de la catégorie pour vous aider à faire le meilleur choix.
          </p>
        </div>

        {/* Tableau de comparaison */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-[200px,1fr] md:grid-cols-[250px,1fr] lg:grid-cols-[300px,1fr]">
            {/* En-tête des produits */}
            <div className="bg-gray-50 border-r"></div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, index) => (
                <div key={index} className="p-6 text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-48 h-48 object-cover mx-auto mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <div className="flex justify-center items-center mb-4">
                    <span className="text-2xl font-bold text-indigo-600 mr-2">
                      {product.score}
                    </span>
                    <span className="text-gray-500">/10</span>
                  </div>
                  <AffiliateButton
                    platform={product.platform}
                    affiliateUrl={product.affiliateUrl}
                    price={product.price}
                    oldPrice={product.oldPrice}
                  />
                </div>
              ))}
            </div>

            {/* Spécifications */}
            <div className="bg-gray-50 border-r">
              <div className="p-4 font-semibold text-gray-900 border-b">
                Spécifications
              </div>
              {Object.keys(comparisonData.products[0].specs).map((spec) => (
                <div key={spec} className="p-4 border-b">
                  {spec}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, productIndex) => (
                <div key={productIndex}>
                  {Object.entries(product.specs).map(([spec, value], specIndex) => (
                    <div key={specIndex} className="p-4 border-b flex justify-center">
                      {renderSpecValue(value)}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Points forts */}
            <div className="bg-gray-50 border-r">
              <div className="p-4 font-semibold text-gray-900 border-b">
                Points forts
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, index) => (
                <div key={index} className="p-4 border-b">
                  <ul className="space-y-2">
                    {product.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Points faibles */}
            <div className="bg-gray-50 border-r">
              <div className="p-4 font-semibold text-gray-900 border-b">
                Points faibles
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, index) => (
                <div key={index} className="p-4 border-b">
                  <ul className="space-y-2">
                    {product.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="bg-gray-50 border-r">
              <div className="p-4 font-semibold text-gray-900 border-b">
                Verdict
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, index) => (
                <div key={index} className="p-4 border-b">
                  <p className="text-gray-700">{product.verdict}</p>
                </div>
              ))}
            </div>

            {/* Meilleur pour */}
            <div className="bg-gray-50 border-r">
              <div className="p-4 font-semibold text-gray-900 border-b">
                Meilleur pour
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x">
              {comparisonData.products.map((product, index) => (
                <div key={index} className="p-4 border-b">
                  <p className="text-gray-700">{product.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conseil d'achat */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Notre conseil d'achat
              </h3>
              <p className="text-yellow-700">
                Si vous recherchez les meilleures performances globales et que le budget n'est pas un problème,
                le Sony WH-1000XM4 est notre recommandation. Cependant, si le confort est votre priorité absolue,
                le Bose QC45 pourrait être un meilleur choix pour vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparativePage;
