import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900 font-sans selection:bg-amber-500 selection:text-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
