import React from 'react';
import { Scale, Shield, AlertTriangle } from 'lucide-react';

const LegalPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600">
            Informations légales et conditions d'utilisation de TechAffiliates
          </p>
        </div>

        <div className="space-y-8">
          {/* Informations légales */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Informations Légales
              </h2>
            </div>
            
            <div className="prose prose-indigo max-w-none">
              <h3>Éditeur du site</h3>
              <p>
                TechAffiliates<br />
                SARL au capital de 10 000€<br />
                RCS Paris B 123 456 789<br />
                Siège social : 123 Avenue de la Tech, 75001 Paris<br />
                Téléphone : +33 1 23 45 67 89<br />
                Email : contact@techaffiliates.fr
              </p>

              <h3>Directeur de la publication</h3>
              <p>Jean Dupont, Directeur Général</p>

              <h3>Hébergement</h3>
              <p>
                Le site TechAffiliates est hébergé par :<br />
                OVH SAS<br />
                2 rue Kellermann<br />
                59100 Roubaix - France
              </p>
            </div>
          </section>

          {/* Liens d'affiliation */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Liens d'Affiliation
              </h2>
            </div>

            <div className="prose prose-indigo max-w-none">
              <p>
                TechAffiliates participe au Programme Partenaires d'Amazon et à d'autres
                programmes d'affiliation. À ce titre, le site peut percevoir une
                commission sur les ventes effectuées via les liens présents sur le site.
              </p>

              <p>
                Tous les liens d'affiliation sont clairement identifiés comme tels.
                L'utilisation de ces liens n'entraîne aucun surcoût pour l'utilisateur.
              </p>

              <h3>Nos partenaires</h3>
              <ul>
                <li>Amazon</li>
                <li>Fnac</li>
                <li>Darty</li>
                <li>Boulanger</li>
              </ul>

              <p>
                Les commissions perçues nous permettent de maintenir le site et de
                continuer à produire du contenu de qualité, tout en gardant l'accès
                gratuit pour nos lecteurs.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Propriété Intellectuelle
              </h2>
            </div>

            <div className="prose prose-indigo max-w-none">
              <p>
                L'ensemble du contenu de ce site (articles, textes, images, vidéos,
                etc.) est protégé par le droit d'auteur. Toute reproduction, même
                partielle, est soumise à notre autorisation écrite préalable.
              </p>

              <h3>Marques citées</h3>
              <p>
                Les marques citées sur ce site sont déposées par leurs propriétaires
                respectifs. Leur mention n'affecte en rien leur propriété.
              </p>

              <h3>Crédits photos</h3>
              <p>
                Les photos utilisées sur ce site proviennent de :
              </p>
              <ul>
                <li>Notre équipe de photographes</li>
                <li>Les constructeurs des produits présentés</li>
                <li>Unsplash (photos libres de droits)</li>
              </ul>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Limitation de Responsabilité
            </h2>

            <div className="prose prose-indigo max-w-none">
              <p>
                Les informations publiées sur ce site sont données à titre indicatif.
                Bien que nous nous efforcions de fournir des informations exactes et
                à jour, nous ne pouvons garantir l'exactitude, l'exhaustivité ou la
                pertinence des informations diffusées sur le site.
              </p>

              <p>
                En conséquence, vous reconnaissez utiliser ces informations sous
                votre responsabilité exclusive. TechAffiliates ne pourra être tenu
                responsable des dommages directs ou indirects résultant de
                l'utilisation de ces informations.
              </p>

              <h3>Prix et disponibilité</h3>
              <p>
                Les prix et la disponibilité des produits sont vérifiés régulièrement
                mais peuvent varier entre le moment de la rédaction de l'article et
                votre consultation. Nous vous conseillons de vérifier ces informations
                sur le site du vendeur avant tout achat.
              </p>
            </div>
          </section>

          {/* Modification des mentions légales */}
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-600 text-sm">
              TechAffiliates se réserve le droit de modifier ces mentions légales
              à tout moment. Nous vous invitons à les consulter régulièrement.
              Dernière mise à jour : 16 février 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
