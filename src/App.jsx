import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DestinationsMap from './components/DestinationsMap';
import Manage from './components/Manage';
import Help from './components/Help';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark font-sans selection:bg-primary selection:text-dark">
        <Navbar />
        <main>
          <Hero />
          <Manage />
          <Services />
          <DestinationsMap />
          <Help />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
