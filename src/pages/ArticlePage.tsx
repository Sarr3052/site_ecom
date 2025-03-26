import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Share2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Données de démonstration
const articleData = {
  title: "Les Meilleurs Casques Audio Sans Fil en 2024",
  author: "Jean Dupont",
  date: "15 février 2024",
  readTime: "8 min",
  heroImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
  content: [
    {
      type: "paragraph",
      content: "Le marché des casques audio sans fil a considérablement évolué ces dernières années. Avec l'amélioration des technologies Bluetooth et de réduction de bruit, il n'a jamais été aussi agréable d'écouter de la musique sans fil."
    },
    {
      type: "heading",
      content: "Notre Top 3 des Casques Sans Fil"
    },
    {
      type: "product",
      product: {
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
    },
    {
      type: "paragraph",
      content: "Le Sony WH-1000XM4 reste notre choix numéro un pour sa combinaison imbattable de qualité sonore, de réduction de bruit et d'autonomie. C'est simplement le meilleur casque sans fil que vous puissiez acheter aujourd'hui."
    }
  ],
  relatedProducts: [
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
  ]
};

const ArticlePage = () => {
  const { articleSlug } = useParams();

  const renderContent = (content: any) => {
    switch (content.type) {
      case "paragraph":
        return <p className="text-gray-700 leading-relaxed mb-6">{content.content}</p>;
      case "heading":
        return <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.content}</h2>;
      case "product":
        return (
          <div className="mb-6">
            <ProductCard {...content.product} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <article className="max-w-4xl mx-auto px-4">
        {/* En-tête de l'article */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {articleData.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{articleData.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{articleData.readTime} de lecture</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://ui-avatars.com/api/?name=Jean+Dupont&background=random"
                alt={articleData.author}
                className="h-6 w-6 rounded-full mr-2"
              />
              <span>Par {articleData.author}</span>
            </div>
          </div>

          {/* Boutons de partage */}
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Share2 className="h-5 w-5 mr-2" />
              Partager
            </button>
          </div>
        </header>

        {/* Image principale */}
        <div className="mb-8">
          <img
            src={articleData.heroImage}
            alt={articleData.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none">
          {articleData.content.map((section, index) => (
            <div key={index}>
              {renderContent(section)}
            </div>
          ))}
        </div>

        {/* Produits connexes */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Produits mentionnés dans cet article
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articleData.relatedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
