import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

// Lazy loading para melhor performance
const Home = lazy(() => import('./pages/Home'));
const Imoveis = lazy(() => import('./pages/Imoveis'));
const ImovelDetalhes = lazy(() => import('./pages/ImovelDetalhes'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Contato = lazy(() => import('./pages/Contato'));

// Componente de loading
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF5722]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/imoveis" element={<Imoveis />} />
              <Route path="/imoveis/:id" element={<ImovelDetalhes />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 