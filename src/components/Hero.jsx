import { useLanguage } from '../context/LanguageContext';
import BookingWidget from './BookingWidget';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pb-32">
            {/* High-quality background image with overlay */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
                }}
            >
                {/* Gradient overlays for readability and premium feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-dark/95"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-transparent to-secondary/90"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-32 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16">
                    {/* Badge/Tagline */}
                    <div className="animate-fade-in-up [animation-delay:200ms] opacity-0 mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                            Premium Experience
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="animate-fade-in-up [animation-delay:400ms] opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                        {t.hero.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="animate-fade-in-up [animation-delay:600ms] opacity-0 text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </div>
                
                {/* The new Booking Widget */}
                <BookingWidget />
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-dark to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default Hero;
