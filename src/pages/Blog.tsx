import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Top 10 des Casques Sans Fil pour 2025",
    excerpt: "Découvrez les meilleurs casques sans fil alliant qualité sonore supérieure, confort et rapport qualité-prix.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    date: "15 Mars 2025",
    author: "Jean Dupont",
    category: "Guides"
  },
  {
    title: "Comment Choisir le Bracelet Connecté Parfait",
    excerpt: "Un guide complet pour sélectionner le bon bracelet connecté en fonction de vos besoins et de votre mode de vie.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    date: "12 Mars 2025",
    author: "Sophie Martin",
    category: "Guides d'Achat"
  },
  {
    title: "Le Guide Ultime pour l'Achat d'un Appareil Photo",
    excerpt: "Tout ce que vous devez savoir pour choisir l'appareil photo adapté à vos besoins en photographie.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    date: "10 Mars 2025",
    author: "Michel Dubois",
    category: "Photographie"
  }
];

const Blog = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Derniers Articles & Avis</h1>
          <p className="text-gray-600">Conseils d'experts, guides d'achat et tests de produits</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                  Lire la Suite
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Voir Tous les Articles
          </button>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Restez Informé des Dernières Tendances
              </h2>
              <p className="text-indigo-100 mb-8">
                Abonnez-vous à notre newsletter pour recevoir les derniers articles, guides et tests de produits.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;