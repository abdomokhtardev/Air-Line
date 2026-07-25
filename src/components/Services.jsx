import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    return (
        <div className="py-24 bg-dark relative">
            {/* Soft glow in the background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-wide drop-shadow-md">
                    {t.services.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {t.services.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-secondary/40 backdrop-blur-md p-10 rounded-3xl hover:bg-secondary/60 transition-all duration-500 transform hover:-translate-y-3 border border-white/5 hover:border-primary/50 group shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] relative overflow-hidden"
                        >
                            {/* Decorative accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                                {/* Elegant SVG Icon based on index for variety, or just keep numbers but stylize them */}
                                <span className="text-2xl font-bold font-serif italic">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
