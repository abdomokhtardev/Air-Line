import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { t, lang, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to map translation keys to IDs
    const navLinks = [
        { id: 'home', label: t.nav.home },
        { id: 'book', label: t.nav.book },
        { id: 'manage', label: t.nav.manage },
        { id: 'experience', label: t.nav.experience },
        { id: 'help', label: t.nav.help },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-3xl font-bold text-white tracking-wider flex items-center gap-2">
                            {/* Simple inline SVG for logo feel */}
                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22,16L12,9L2,16V14L12,7L22,14V16M22,20L12,13L2,20V18L12,11L22,18V20Z" />
                            </svg>
                            {t.brand}
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8 rtl:space-x-reverse">
                            {navLinks.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-white/90 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                                >
                                    {item.label}
                                </a>
                            ))}
                            {/* Prominent Language Switcher Button */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-primary/20"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                {lang === 'en' ? 'العربية' : 'English'}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
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
                <div className="md:hidden bg-secondary border-t border-white/10 absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-primary block px-3 py-3 rounded-md text-base font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="w-full text-start flex items-center gap-2 bg-primary/10 text-primary px-3 py-3 rounded-md text-base font-bold mt-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            {lang === 'en' ? 'التبديل للعربية' : 'Switch to English'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
