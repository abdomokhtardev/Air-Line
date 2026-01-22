import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    return (
        <div className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    {t.services.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.services.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 border border-white/5 hover:border-amber-500/30 group"
                        >
                            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                <span className="text-xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">
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
