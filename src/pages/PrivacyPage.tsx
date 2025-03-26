import React from 'react';
import { Lock, Eye, Cookie, Database, Bell, Mail } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: Eye,
      title: "Données Collectées",
      content: [
        "Informations de navigation (pages visitées, temps passé)",
        "Données techniques (type d'appareil, navigateur)",
        "Informations de contact (si fournies via le formulaire)",
        "Préférences de communication"
      ]
    },
    {
      icon: Database,
      title: "Utilisation des Données",
      content: [
        "Amélioration de l'expérience utilisateur",
        "Personnalisation du contenu",
        "Communication sur nos nouveaux articles",
        "Analyses statistiques anonymes"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies",
      content: [
        "Cookies essentiels pour le fonctionnement du site",
        "Cookies analytiques (Google Analytics)",
        "Cookies publicitaires (réseaux d'affiliation)",
        "Cookies de réseaux sociaux"
      ]
    },
    {
      icon: Bell,
      title: "Vos Droits",
      content: [
        "Droit d'accès à vos données",
        "Droit de rectification",
        "Droit à l'effacement",
        "Droit à la portabilité",
        "Droit d'opposition"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
            <Lock className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Protection et utilisation de vos données personnelles
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Chez TechAffiliates, nous accordons une grande importance à la protection
            de vos données personnelles. Cette politique de confidentialité détaille
            la manière dont nous collectons, utilisons et protégeons vos informations
            lorsque vous utilisez notre site.
          </p>
        </div>

        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <section.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sécurité des données */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sécurité des Données
          </h2>
          <div className="prose prose-indigo max-w-none">
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles pour protéger vos données personnelles contre tout
              accès non autorisé, modification, divulgation ou destruction.
            </p>
            <h3>Nos mesures incluent :</h3>
            <ul>
              <li>Chiffrement SSL pour toutes les transmissions de données</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Surveillance régulière de nos systèmes</li>
              <li>Formation de notre personnel à la sécurité des données</li>
            </ul>
          </div>
        </div>

        {/* Partage des données */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Partage des Données
          </h2>
          <div className="prose prose-indigo max-w-none">
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers. Nous
              pouvons partager certaines informations avec :
            </p>
            <ul>
              <li>Nos prestataires de services (hébergement, analyse)</li>
              <li>Nos partenaires d'affiliation (de manière anonyme)</li>
              <li>Les autorités compétentes (si requis par la loi)</li>
            </ul>
          </div>
        </div>

        {/* Conservation des données */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Conservation des Données
          </h2>
          <div className="prose prose-indigo max-w-none">
            <p>
              Nous conservons vos données personnelles aussi longtemps que
              nécessaire pour les finalités pour lesquelles elles ont été
              collectées, notamment :
            </p>
            <ul>
              <li>Données de navigation : 13 mois</li>
              <li>Données de contact : 3 ans après le dernier contact</li>
              <li>Données de newsletter : jusqu'à désinscription</li>
            </ul>
          </div>
        </div>

        {/* Nous contacter */}
        <div className="bg-indigo-50 rounded-xl p-8">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">
                Questions sur vos données ?
              </h2>
              <p className="text-indigo-700 mb-4">
                Pour toute question concernant notre politique de confidentialité ou
                pour exercer vos droits, contactez notre délégué à la protection
                des données :
              </p>
              <a
                href="mailto:dpo@techaffiliates.fr"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contacter notre DPO
              </a>
            </div>
          </div>
        </div>

        {/* Mise à jour */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          Cette politique de confidentialité a été mise à jour le 16 février 2024.
          Nous nous réservons le droit de la modifier à tout moment.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
