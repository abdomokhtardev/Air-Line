import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen flex items-center bg-slate-900 pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e293b] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-start">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                            {t.hero.subtitle}
                        </p>
                        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
                            {t.hero.cta}
                        </button>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center group pointer-events-none">
                        {/* Glow effect behind the plane */}
                        <div className="absolute w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse" />

                        <img
                            src="https://www.pngall.com/wp-content/uploads/2/Airplane-PNG-File.png"
                            alt="Luxury Airplane"
                            className="w-full h-auto max-h-full object-contain drop-shadow-2xl animate-float z-10"
                            style={{ filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.5))" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
