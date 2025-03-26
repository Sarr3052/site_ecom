import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Award, ChevronRight, Percent, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
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
  },
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
];

const latestGuides = [
  {
    title: "Comment choisir son casque audio en 2025 ?",
    excerpt: "Guide complet pour choisir le meilleur casque selon vos besoins et votre budget",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Guide d'Achat",
    readTime: "15 min",
    url: "/guide/choisir-casque-audio"
  },
  {
    title: "Top 10 des Meilleurs Smartphones 2025",
    excerpt: "Comparatif détaillé des smartphones haut de gamme de l'année",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    category: "Comparatif",
    readTime: "20 min",
    url: "/comparatif/top-smartphones-2025"
  }
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trouvez les Meilleurs Produits Tech aux Meilleurs Prix
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Tests, comparatifs et guides d'achat pour faire les meilleurs choix
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/guides"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Voir nos guides d'achat
              </Link>
              <Link
                to="/bons-plans"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-400 transition-colors"
              >
                Découvrir les bons plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories populaires */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Catégories Populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/categorie/smartphones"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=80"
                alt="Smartphones"
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
              <span className="font-medium">Smartphones</span>
            </Link>
            {/* Ajoutez d'autres catégories similaires */}
          </div>
        </div>
      </section>

      {/* Produits du Moment */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Produits du Moment</h2>
            <Link to="/comparatifs" className="text-indigo-600 hover:text-indigo-700 flex items-center">
              Voir tous les comparatifs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Derniers Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Derniers Articles</h2>
            <Link to="/guides" className="text-indigo-600 hover:text-indigo-700 flex items-center">
              Voir tous les guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestGuides.map((guide, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <Link to={guide.url}>
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-indigo-600">{guide.category}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-500">{guide.readTime} de lecture</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-gray-600">{guide.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ne manquez aucun bon plan !</h2>
          <p className="mb-6">Recevez nos meilleurs deals et guides d'achat directement dans votre boîte mail.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;