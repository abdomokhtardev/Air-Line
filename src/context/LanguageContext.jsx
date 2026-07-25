import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        brand: "EGYPTAIR",
        nav: {
            home: "Home",
            book: "Book",
            manage: "Manage",
            experience: "Experience",
            help: "Help"
        },
        hero: {
            title: "Experience Luxury Above the Clouds",
            subtitle: "Fly with Egyptair and discover an unparalleled travel experience with world-class comfort and service.",
            cta: "Book Your Flight"
        },
        booking: {
            flightSearch: "Flight Search",
            from: "From",
            to: "To",
            depart: "Depart",
            return: "Return",
            passengers: "Passengers",
            search: "Search Flights",
            oneWay: "One Way",
            roundTrip: "Round Trip"
        },
        map: {
            title: "Our Global Network",
            subtitle: "Connecting you to over 150 destinations worldwide from our hub in Cairo."
        },
        manage: {
            title: "Manage Your Booking",
            subtitle: "View, modify, or check-in to your upcoming flights.",
            bookingRef: "Booking Reference",
            lastName: "Last Name",
            submit: "Retrieve Booking"
        },
        help: {
            title: "How Can We Help You?",
            subtitle: "Find answers to frequently asked questions.",
            faq1Title: "Baggage Allowance",
            faq1Desc: "Learn about checked and cabin baggage limits for your flight.",
            faq2Title: "Check-in Online",
            faq2Desc: "Check-in up to 48 hours before your flight departure.",
            faq3Title: "Flight Status",
            faq3Desc: "Get real-time updates on your flight departure and arrival times."
        },
        services: {
            title: "Our Premier Services",
            items: [
                { title: "First Class Suites", desc: "Private suites with fully flat beds for ultimate relaxation." },
                { title: "Gourmet Dining", desc: "Exquisite meals prepared by top chefs from around the globe." },
                { title: "In-Flight Lounge", desc: "Relax and socialize in our exclusive premium lounge." }
            ]
        },
        footer: {
            contact: "Contact Us",
            address: "Cairo International Airport, Egypt",
            rights: "© 2026 Egyptair. All rights reserved."
        }
    },
    ar: {
        brand: "مصر للطيران",
        nav: {
            home: "الرئيسية",
            book: "احجز",
            manage: "إدارة الحجز",
            experience: "تجربة السفر",
            help: "المساعدة"
        },
        hero: {
            title: "عِش الرفاهية فوق السحاب",
            subtitle: "سافر مع مصر للطيران واكتشف تجربة سفر لا مثيل لها مع راحة وخدمة عالمية المستوى.",
            cta: "احجز رحلتك الآن"
        },
        booking: {
            flightSearch: "بحث عن رحلة",
            from: "من",
            to: "إلى",
            depart: "تاريخ المغادرة",
            return: "تاريخ العودة",
            passengers: "المسافرون",
            search: "ابحث عن الرحلات",
            oneWay: "ذهاب فقط",
            roundTrip: "ذهاب وعودة"
        },
        map: {
            title: "شبكتنا العالمية",
            subtitle: "نربطك بأكثر من 150 وجهة حول العالم انطلاقاً من مركزنا في القاهرة."
        },
        manage: {
            title: "إدارة حجزك",
            subtitle: "عرض، تعديل، أو إتمام إجراءات السفر لرحلاتك القادمة.",
            bookingRef: "رقم الحجز",
            lastName: "اسم العائلة",
            submit: "استعراض الحجز"
        },
        help: {
            title: "كيف يمكننا مساعدتك؟",
            subtitle: "ابحث عن إجابات للأسئلة الشائعة.",
            faq1Title: "الأمتعة المسموح بها",
            faq1Desc: "تعرف على حدود الأمتعة المسجلة والمحمولة لرحلتك.",
            faq2Title: "إنهاء إجراءات السفر",
            faq2Desc: "يمكنك إنهاء إجراءات السفر حتى 48 ساعة قبل موعد المغادرة.",
            faq3Title: "حالة الرحلة",
            faq3Desc: "احصل على تحديثات فورية حول أوقات مغادرة ووصول رحلتك."
        },
        services: {
            title: "خدماتنا المميزة",
            items: [
                { title: "أجنحة الدرجة الأولى", desc: "أجنحة خاصة مع أسرة مسطحة بالكامل للاسترخاء التام." },
                { title: "عشاء فاخر", desc: "وجبات رائعة من إعداد أفضل الطهاة حول العالم." },
                { title: "صالة جوية", desc: "استرخ وتواصل اجتماعياً في صالتنا الحصرية." }
            ]
        },
        footer: {
            contact: "تواصل معنا",
            address: "مطار القاهرة الدولي، مصر",
            rights: "© 2026 مصر للطيران. جميع الحقوق محفوظة."
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
