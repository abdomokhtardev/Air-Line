import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
    const { t, lang, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            {t.brand}
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
                            {Object.values(t.nav).map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold transition-all border border-white/10"
                            >
                                {lang === 'en' ? 'العربية' : 'English'}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {Object.values(t.nav).map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="w-full text-start text-amber-400 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
