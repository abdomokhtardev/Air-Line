import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const Help = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { title: t.help.faq1Title, desc: t.help.faq1Desc },
        { title: t.help.faq2Title, desc: t.help.faq2Desc },
        { title: t.help.faq3Title, desc: t.help.faq3Desc },
    ];

    return (
        <div id="help" className="py-24 bg-[#0a1128] relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        {t.help.title}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {t.help.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-secondary/40 border-primary/30 shadow-lg' : 'bg-dark/50 hover:bg-secondary/20'}`}
                        >
                            <button
                                className="w-full px-6 py-5 text-start flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                                    {faq.title}
                                </span>
                                <svg 
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-primary' : 'text-gray-400'}`} 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div 
                                className={`px-6 transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-300 leading-relaxed">
                                    {faq.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Help;
