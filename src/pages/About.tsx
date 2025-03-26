import React from 'react';
import { Shield, Users, Target, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos d'AffiliateHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous nous engageons à vous aider à prendre des décisions d'achat éclairées grâce à des avis d'experts,
            des comparaisons détaillées et des recommandations honnêtes.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
            <p className="text-gray-600">
              Fournir des recommandations de produits honnêtes et impartiales qui aident nos lecteurs à prendre
              des décisions d'achat en toute confiance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Équipe</h3>
            <p className="text-gray-600">
              Un groupe diversifié d'experts passionnés par les tests et l'évaluation de produits pour
              trouver les meilleures options pour vous.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
            <p className="text-gray-600">
              Transparence, honnêteté et rigueur dans tout ce que nous faisons, des tests aux
              recommandations.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comment Nous Travaillons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Notre Processus d'Évaluation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Recherche Approfondie</h4>
                    <p className="text-gray-600">Nous étudions le marché et identifions les produits les plus prometteurs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Tests Rigoureux</h4>
                    <p className="text-gray-600">Nous testons chaque produit selon des critères stricts et objectifs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Analyse Comparative</h4>
                    <p className="text-gray-600">Nous comparons les produits avec leurs concurrents directs.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Notre Engagement</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">Indépendance</h4>
                    <p className="text-gray-600">Nos avis sont totalement indépendants et non influencés par les marques.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">Mise à Jour Continue</h4>
                    <p className="text-gray-600">Nous mettons régulièrement à jour nos avis pour refléter les dernières évolutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">Transparence Totale</h4>
                    <p className="text-gray-600">Nous expliquons clairement notre processus d'évaluation et nos critères.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-gray-600 mb-8">
            Des questions ou des suggestions ? N'hésitez pas à nous contacter.
          </p>
          <a
            href="mailto:contact@affiliatehub.com"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Envoyez-nous un Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;