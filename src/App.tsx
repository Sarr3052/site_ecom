import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ArticlePage from './pages/ArticlePage';
import ComparativePage from './pages/ComparativePage';
import BuyingGuidePage from './pages/BuyingGuidePage';
import DealsPage from './pages/DealsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Pages de catégories */}
          <Route path="/categorie/:categorySlug" element={<CategoryPage />} />
          
          {/* Pages de contenu */}
          <Route path="/produit/:productSlug" element={<ProductPage />} />
          <Route path="/article/:articleSlug" element={<ArticlePage />} />
          <Route path="/comparatif/:comparativeSlug" element={<ComparativePage />} />
          <Route path="/guide/:guideSlug" element={<BuyingGuidePage />} />
          
          {/* Pages utilitaires */}
          <Route path="/bons-plans" element={<DealsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Pages légales */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;