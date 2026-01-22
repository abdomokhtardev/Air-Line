import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        brand: "Royal Sky Airlines",
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title: "Experience Luxury Above the Clouds",
            subtitle: "Royal Sky Airlines offers an unparalleled travel experience with world-class comfort and service.",
            cta: "Book Your Flight"
        },
        services: {
            title: "Our Premier Services",
            items: [
                { title: "First Class Suites", desc: "Private suites with fully flat beds." },
                { title: "Gourmet Dining", desc: "Exquisite meals prepared by top chefs." },
                { title: "In-Flight Lounge", desc: "Relax and socialize in our exclusive lounge." }
            ]
        },
        footer: {
            contact: "Contact Us",
            address: "123 Aviation Way, Sky City",
            rights: "© 2026 Royal Sky Airlines. All rights reserved."
        }
    },
    ar: {
        brand: "خطوط طيران رويال سكاي",
        nav: {
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            contact: "تواصل معنا"
        },
        hero: {
            title: "عيش الرفاهية فوق السحاب",
            subtitle: "تقدم خطوط رويال سكاي تجربة سفر لا مثيل لها مع راحة وخدمة عالمية المستوى.",
            cta: "احجز رحلتك"
        },
        services: {
            title: "خدماتنا المميزة",
            items: [
                { title: "أجنحة الدرجة الأولى", desc: "أجنحة خاصة مع أسرة مسطحة بالكامل." },
                { title: "عشاء فاخر", desc: "وجبات رائعة من إعداد أفضل الطهاة." },
                { title: "صالة جوية", desc: "استرخ وتواصل اجتماعياً في صالتنا الحصرية." }
            ]
        },
        footer: {
            contact: "تواصل معنا",
            address: "123 طريق الطيران، مدينة السماء",
            rights: "© 2026 خطوط طيران رويال سكاي. جميع الحقوق محفوظة."
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('ar'); // Default to Arabic as per user implied context or just choice, user asked for "option", I'll default to AR or EN. User asked "make option language arabic or english". I'll default to 'ar' as it is a common preference for Arabic queries.

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'ar' : 'en');
    };

    useEffect(() => {
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
