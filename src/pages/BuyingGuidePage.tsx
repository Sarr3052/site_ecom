import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, HelpCircle, Award, DollarSign, Target, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Données de démonstration
const guideData = {
  title: "Guide d'Achat : Comment Choisir son Casque Audio Sans Fil",
  lastUpdated: "15 février 2024",
  introduction: "Choisir un casque audio sans fil peut s'avérer complexe avec la multitude d'options disponibles sur le marché. Ce guide vous aidera à comprendre les critères essentiels pour faire le meilleur choix selon vos besoins.",
  sections: [
    {
      title: "Les critères essentiels",
      icon: Target,
      content: [
        "La qualité audio est primordiale : recherchez des casques avec de bons drivers et une réponse en fréquence étendue.",
        "L'autonomie de la batterie détermine la durée d'utilisation : visez au minimum 20 heures.",
        "Le confort est crucial pour une utilisation prolongée : attention au poids et aux matériaux.",
        "La réduction de bruit active (ANC) est importante pour l'isolation.",
        "La connectivité (Bluetooth, multipoint, codecs) influence la qualité et la praticité."
      ]
    },
    {
      title: "Les différentes gammes de prix",
      icon: DollarSign,
      priceRanges: [
        {
          range: "Moins de 100€",
          description: "Casques basiques avec une qualité audio correcte et des fonctionnalités limitées.",
          example: "Anker Soundcore Life Q30"
        },
        {
          range: "100€ - 200€",
          description: "Bon compromis avec des fonctionnalités avancées et une qualité audio satisfaisante.",
          example: "JBL Live 660NC"
        },
        {
          range: "Plus de 200€",
          description: "Haut de gamme avec les meilleures technologies et une qualité audio exceptionnelle.",
          example: "Sony WH-1000XM4"
        }
      ]
    }
  ],
  recommendations: [
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
    }
  ],
  faqs: [
    {
      question: "Quelle est la différence entre un casque Bluetooth et un casque sans fil ?",
      answer: "Un casque Bluetooth utilise spécifiquement la technologie Bluetooth pour la connexion sans fil, tandis qu'un casque sans fil peut utiliser d'autres technologies comme la radio fréquence. Aujourd'hui, la plupart des casques sans fil utilisent le Bluetooth."
    },
    {
      question: "La réduction de bruit active est-elle vraiment nécessaire ?",
      answer: "Cela dépend de votre utilisation. Si vous voyagez souvent ou travaillez dans un environnement bruyant, la réduction de bruit active peut grandement améliorer votre expérience d'écoute. Cependant, elle augmente le prix du casque."
    }
  ]
};

const BuyingGuidePage = () => {
  const { guideSlug } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* En-tête */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {guideData.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <BookOpen className="h-5 w-5 mr-2" />
            <span>Dernière mise à jour : {guideData.lastUpdated}</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            {guideData.introduction}
          </p>
        </div>

        {/* Sections principales */}
        {guideData.sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center mb-6">
              <section.icon className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {section.title}
              </h2>
            </div>

            {'content' in section && (
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {'priceRanges' in section && (
              <div className="space-y-6">
                {section.priceRanges.map((range, rangeIndex) => (
                  <div key={rangeIndex} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {range.range}
                    </h3>
                    <p className="text-gray-700 mb-2">{range.description}</p>
                    <p className="text-indigo-600 font-medium">
                      Exemple : {range.example}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Nos recommandations */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Nos recommandations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideData.recommendations.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            {guideData.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-indigo-50 rounded-xl p-6">
          <div className="flex items-start">
            <ShoppingCart className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Prêt à faire votre choix ?
              </h3>
              <p className="text-indigo-700">
                Consultez notre comparatif détaillé des meilleurs casques audio sans fil
                pour trouver celui qui correspond parfaitement à vos besoins et votre budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuidePage;
