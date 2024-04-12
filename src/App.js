import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from './views/Home';
import Produits from './views/Produits';
import PDV from './views/PDV';
import FicheProduitFini from './views/FicheProduitFini';
import Header from './composants/Header';
import Footer from './composants/Footer';
import ChatBotNotifBar from "./composants/ChatBotNotifBar";
import FicheProduitMP from "./views/FicheProduitMP";
import ScrollToTop from "./composants/ScrollToTop";

// Initialisez votre ID de mesure GA4
ReactGA.initialize('G-F61DD3NBNP');

// Component pour le suivi des vues de page
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}
export default function App() {

  return (
    <Router>
      <RouteChangeTracker />
        <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/points-de-vente' element={<PDV />} />
        <Route path='/produits' element={<Produits />} />
        <Route path="/produit_fini/detail/:productKey" element={<FicheProduitFini />} />
        <Route path="/matiere_premiere/detail/:productKey" element={<FicheProduitMP />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <ChatBotNotifBar/>
      <Footer />
    </Router>
  );
}



/*

{\__/}
( ●.●)
/> *Iris Alpaca Meretur Gloriam Aeternam* 

*/