import { useLanguage } from '../context/LanguageContext';

const DestinationsMap = () => {
    const { t } = useLanguage();

    // Coordinates are percentages representing positions on the world map image
    // Assuming Cairo is roughly at {x: 55, y: 40} on a standard equirectangular map
    const cairo = { x: 55, y: 40 };
    
    // Sample destinations
    const routes = [
        { dest: { x: 25, y: 35 }, name: "New York" },
        { dest: { x: 48, y: 28 }, name: "London" },
        { dest: { x: 50, y: 32 }, name: "Paris" },
        { dest: { x: 70, y: 45 }, name: "Dubai" },
        { dest: { x: 85, y: 35 }, name: "Tokyo" },
        { dest: { x: 65, y: 65 }, name: "Johannesburg" },
        { dest: { x: 30, y: 60 }, name: "Sao Paulo" },
    ];

    return (
        <div id="experience" className="py-24 bg-[#030612] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                        {t.map.title}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t.map.subtitle}
                    </p>
                </div>

                <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-700">
                    {/* World Map SVG Background (using a reliable generic world map SVG) */}
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                        alt="World Map" 
                        className="w-full h-full object-contain opacity-20 filter invert sepia hue-rotate-[180deg] brightness-50"
                    />

                    {/* SVG overlay for drawing the routes */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                                <stop offset="100%" stopColor="#fca5a5" stopOpacity="0.2" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {routes.map((route, index) => {
                            // Calculate a slight curve for the path
                            const controlX = (cairo.x + route.dest.x) / 2;
                            const controlY = Math.min(cairo.y, route.dest.y) - 15; // Curve upwards
                            
                            return (
                                <g key={index}>
                                    {/* The animated path */}
                                    <path 
                                        d={`M ${cairo.x} ${cairo.y} Q ${controlX} ${controlY} ${route.dest.x} ${route.dest.y}`}
                                        fill="none"
                                        stroke="url(#route-gradient)"
                                        strokeWidth="0.5"
                                        className="animate-draw-route"
                                        style={{ 
                                            animationDelay: `${index * 0.4}s`,
                                            filter: 'url(#glow)'
                                        }}
                                    />
                                    {/* Destination Dot */}
                                    <circle cx={route.dest.x} cy={route.dest.y} r="0.8" fill="#ef4444" className="animate-ping" style={{ animationDelay: `${index * 0.4}s` }} />
                                    <circle cx={route.dest.x} cy={route.dest.y} r="0.4" fill="#ffffff" />
                                </g>
                            );
                        })}
                        
                        {/* Hub Dot (Cairo) */}
                        <circle cx={cairo.x} cy={cairo.y} r="1" fill="#D4AF37" filter="url(#glow)" className="animate-pulse" />
                    </svg>
                </div>
            </div>
            
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        </div>
    );
};

export default DestinationsMap;
