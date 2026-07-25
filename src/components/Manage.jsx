import { useLanguage } from '../context/LanguageContext';

const Manage = () => {
    const { t } = useLanguage();

    return (
        <div id="manage" className="py-24 bg-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-start">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t.manage.title}
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg">
                            {t.manage.subtitle}
                        </p>
                        
                        <div className="bg-secondary/30 backdrop-blur-md border border-primary/20 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]"></div>
                            <form className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">{t.manage.bookingRef}</label>
                                    <input type="text" placeholder="e.g. ABCDEF" className="w-full bg-dark/50 border border-white/10 text-white rounded-xl py-4 px-4 outline-none focus:border-primary transition-colors uppercase" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">{t.manage.lastName}</label>
                                    <input type="text" placeholder="e.g. Smith" className="w-full bg-dark/50 border border-white/10 text-white rounded-xl py-4 px-4 outline-none focus:border-primary transition-colors" />
                                </div>
                                <button type="button" className="w-full bg-primary hover:bg-accent text-secondary py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                    {t.manage.submit}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6 blur-lg"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
                            alt="Manage Booking" 
                            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3] grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Manage;
