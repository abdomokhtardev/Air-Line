import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-950 text-gray-400 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">{t.brand}</h3>
                        <p className="text-sm">{t.footer.address}</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">{t.nav.contact}</h3>
                        <p className="text-sm mb-2">support@royalsky.com</p>
                        <p className="text-sm">+1 234 567 890</p>
                    </div>
                    <div>
                        {/* Social placeholder */}
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-sm">
                    <p>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
