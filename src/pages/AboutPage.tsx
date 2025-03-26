import React from 'react';
import { Users, Award, Shield, Target, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "Fondateur & Testeur Principal",
      image: "https://ui-avatars.com/api/?name=Jean+Dupont&background=random",
      bio: "Passionné de tech depuis plus de 15 ans, Jean teste et analyse les derniers gadgets pour vous aider à faire les meilleurs choix."
    },
    {
      name: "Marie Martin",
      role: "Rédactrice Tech",
      image: "https://ui-avatars.com/api/?name=Marie+Martin&background=random",
      bio: "Spécialiste en audio et smartphones, Marie rédige des guides détaillés et des comparatifs approfondis."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparence",
      description: "Nous sommes transparents sur nos partenariats affiliés et notre processus de test."
    },
    {
      icon: Target,
      title: "Objectivité",
      description: "Nos tests sont réalisés de manière impartiale, sans influence de nos partenaires."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Notre équipe combine plus de 20 ans d'expérience dans le domaine de la tech."
    },
    {
      icon: MessageSquare,
      title: "Proximité",
      description: "Nous sommes à l'écoute de nos lecteurs et répondons à toutes vos questions."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de TechAffiliates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous vous aidons à faire les meilleurs choix tech en vous proposant
            des tests approfondis, des comparatifs détaillés et des guides d'achat complets.
          </p>
        </div>

        {/* Notre mission */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Notre Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dans un monde où la technologie évolue rapidement, il peut être difficile
            de faire les bons choix. Notre mission est de vous guider vers les
            produits qui correspondent le mieux à vos besoins et à votre budget.
            Nous testons rigoureusement chaque produit que nous recommandons et
            maintenons une totale transparence sur notre processus de sélection.
          </p>
        </div>

        {/* Nos valeurs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 p-3 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notre équipe */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notre processus */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Notre Processus de Test
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Chaque produit que nous recommandons passe par un processus de test
              rigoureux qui comprend :
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Tests approfondis en conditions réelles d'utilisation</li>
              <li>Évaluation comparative avec les produits concurrents</li>
              <li>Analyse du rapport qualité-prix</li>
              <li>Suivi à long terme pour évaluer la durabilité</li>
              <li>Prise en compte des retours utilisateurs</li>
            </ul>
            <p className="text-gray-700">
              Nous mettons régulièrement à jour nos tests et comparatifs pour
              refléter l'évolution des produits et du marché.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
