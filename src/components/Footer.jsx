import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t, lang } = useLanguage();

    return (
        <footer className="bg-[#050a1a] text-gray-400 py-16 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22,16L12,9L2,16V14L12,7L22,14V16M22,20L12,13L2,20V18L12,11L22,18V20Z" />
                            </svg>
                            {t.brand}
                        </h3>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            {lang === 'en' 
                                ? "Experience the world's most luxurious way to fly. Egyptair connects you to over 150 destinations globally with award-winning service."
                                : "اكتشف أروع طرق السفر فخامة في العالم. مصر للطيران تصلك بأكثر من 150 وجهة حول العالم مع خدمات حائزة على جوائز."}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">{t.footer.contact}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span className="text-sm">{t.footer.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span className="text-sm">support@egyptair.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span className="text-sm" dir="ltr">+20 123 456 7890</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p className="mb-4 md:mb-0">{t.footer.rights}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
