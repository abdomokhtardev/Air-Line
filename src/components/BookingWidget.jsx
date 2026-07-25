import { useLanguage } from '../context/LanguageContext';

const BookingWidget = () => {
    const { t } = useLanguage();

    return (
        <div id="book" className="w-full max-w-5xl mx-auto mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl animate-fade-in-up [animation-delay:1000ms] opacity-0 relative z-20">
            {/* Trip Type Selector */}
            <div className="flex gap-4 mb-6 border-b border-white/20 pb-4">
                <label className="flex items-center gap-2 text-white cursor-pointer group">
                    <input type="radio" name="tripType" className="accent-primary w-4 h-4" defaultChecked />
                    <span className="font-semibold group-hover:text-primary transition-colors">{t.booking.roundTrip}</span>
                </label>
                <label className="flex items-center gap-2 text-white cursor-pointer group">
                    <input type="radio" name="tripType" className="accent-primary w-4 h-4" />
                    <span className="font-semibold group-hover:text-primary transition-colors">{t.booking.oneWay}</span>
                </label>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* From */}
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t.booking.from}</label>
                    <div className="relative">
                        <svg className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 rtl:right-4 ltr:left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        <input type="text" placeholder="CAI" className="w-full bg-secondary/50 border border-white/20 text-white rounded-xl py-3 ltr:pl-12 rtl:pr-12 outline-none focus:border-primary transition-colors" />
                    </div>
                </div>

                {/* To */}
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t.booking.to}</label>
                    <div className="relative">
                        <svg className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 rtl:right-4 ltr:left-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        <input type="text" placeholder="DXB" className="w-full bg-secondary/50 border border-white/20 text-white rounded-xl py-3 ltr:pl-12 rtl:pr-12 outline-none focus:border-primary transition-colors" />
                    </div>
                </div>

                {/* Dates */}
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t.booking.depart} - {t.booking.return}</label>
                    <div className="relative flex">
                         <svg className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 rtl:right-4 ltr:left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <input type="text" placeholder="DD/MM - DD/MM" className="w-full bg-secondary/50 border border-white/20 text-white rounded-xl py-3 ltr:pl-12 rtl:pr-12 outline-none focus:border-primary transition-colors cursor-pointer" readOnly />
                    </div>
                </div>

                {/* Passengers */}
                <div className="relative">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t.booking.passengers}</label>
                    <div className="relative">
                         <svg className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 rtl:right-4 ltr:left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <select className="w-full bg-secondary/50 border border-white/20 text-white rounded-xl py-3 ltr:pl-12 rtl:pr-12 outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                            <option className="text-dark">1 Adult, Economy</option>
                            <option className="text-dark">2 Adults, Economy</option>
                            <option className="text-dark">1 Adult, Business</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-end">
                <button className="bg-primary hover:bg-accent text-secondary px-8 py-3 rounded-xl text-lg font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] w-full md:w-auto">
                    {t.booking.search}
                </button>
            </div>
        </div>
    );
};

export default BookingWidget;
