import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {FiAward, FiExternalLink} from 'react-icons/fi';
import {
    SiCodingninjas,
} from 'react-icons/si';
import {FiBriefcase} from 'react-icons/fi';

const certifications = [
    {
        title: 'Advance Data Structures and Algorithms',
        issuer: 'Coding Ninjas',
        date: 'Aug 2019',
        icon: SiCodingninjas,
        iconColor: '#ff9900',
        description: 'Completed Data Structures and Algorithm with Java certified by Coding Ninjas. 1st Rank Holder in DSA Course by Coding Ninjas.',
        gradient: 'from-orange-500/15 to-purple-500/5',
        border: 'border-orange-500/20',
        link: 'https://drive.google.com/file/d/158I8Kn7Zx5oqm6MkXRHYXa7B1w-CTD38/view',
        badge: 'Associate',
        logo: "",
    },
    {
        title: 'Engineering Excellence Award',
        issuer: 'Lloyds Technology Center',
        date: 'Mar 2026',
        icon: FiBriefcase,
        iconColor: '#e00',
        description: 'Recognized for proactive ownership, engineering excellence, and resolving critical Android production issues.',
        gradient: 'from-red-500/15 to-rose-500/5',
        border: 'border-red-500/20',
        link: 'https://drive.google.com/file/d/1kZ1bri_Ik1QajqvIOywRrEbbQPQyUNNY/view',
        badge: 'Professional',
        logo: "/portfolio/lloyds.png",
    },
    {
        title: 'EI Maestro Award',
        issuer: 'Educational Initiative',
        date: 'May 2023',
        icon: FiBriefcase,
        iconColor: '#ff9900',
        description: 'For exceptional work in stabilizing the Mindspark Mobile App, reducing code issues, enhancing security, and delivering innovative solutions that significantly improved the product and development process.',
        gradient: 'from-orange-500/15 to-amber-500/5',
        border: 'border-orange-500/20',
        link: 'https://drive.google.com/file/d/1vsM1P8lEFbfguflsnYnftmNZtcUzuEZk/view',
        badge: 'Professional',
        logo: "/portfolio/ei.png",
    },
    {
        title: 'Devathon',
        issuer: 'Educational Initiative',
        date: 'Feb 2023',
        icon: FiBriefcase,
        iconColor: '#f00',
        description: 'Reduced the production app size from 32 MB to 25 MB within two days by optimizing dependencies and\n' +
            'replacing unnecessary third-party libraries in the React Native-based Mindspark application. Improved\n' +
            'application performance by approximately 30% compared to the previous version.',
        gradient: 'from-rose-500/15 to-pink-500/5',
        border: 'border-rose-500/20',
        badge: 'Professional',
        logo: "/portfolio/ei.png",
    },
];

export default function Certifications() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: '-80px'});

    return (
        <section id="certifications" className="section-pad relative" aria-label="Certifications section">
            <div className="orb orb-purple w-[350px] h-[350px] bottom-0 left-[-60px] opacity-20"/>

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                {/* Heading */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-14"
                >
                    <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2">Credentials &
                        achievements</p>
                    <h2 className="section-heading">My <span className="gradient-text">Certifications</span></h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-4"/>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, i) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={cert.title}
                                initial={{opacity: 0, y: 30}}
                                animate={inView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.55, delay: i * 0.15}}
                                className={`glass-card p-6 bg-gradient-to-br ${cert.gradient} border ${cert.border} hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] flex items-center justify-center">
                                        {cert.badge === 'Professional' ? (
                                            <img
                                                src={cert.logo}
                                                alt={cert.issuer}
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        ) : (
                                            <Icon size={26} style={{color: cert.iconColor}}/>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                    <span
                        className="text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-0.5 rounded-md border border-[var(--border-glass)]">
                      {cert.badge}
                    </span>
                                        <span className="text-xs text-[var(--text-muted)] opacity-70">{cert.date}</span>
                                    </div>
                                </div>
                                <h3 className="font-['Space_Grotesk'] font-bold text-[var(--text-primary)] text-sm leading-snug mb-1 min-h-[40px]">{cert.title}</h3>
                                <p className="text-[var(--text-muted)] text-xs font-medium mb-3">{cert.issuer}</p>
                                <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-1 opacity-80">{cert.description}</p>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 flex items-center gap-1.5 text-xs text-[var(--accent-purple)] hover:text-[var(--accent-cyan)] transition-colors group"
                                    >
                                        <FiAward size={12}/>
                                        {cert.badge === 'Professional' ? 'View Award' : 'View Credential'}
                                        <FiExternalLink
                                            size={11}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
