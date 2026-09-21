import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FiSmartphone,
    FiUsers,
    FiTool,
    FiArrowRight,
    FiGitPullRequest,
    FiGithub,

} from 'react-icons/fi';

const services = [
    {
        title: 'Custom Android Apps',
        icon: FiSmartphone,
        iconName: '📱',
        description:
            'Tailor-made native Android applications built from scratch with clean architecture, offline-first Room DB, and robust error handling.',
        gradient: 'from-purple-500 via-violet-500 to-indigo-500',
        glow: 'rgba(139,92,246,0.3)',
        includes: [
            'Kotlin & Java development',
            'Clean Architecture (MVVM)',
            'Room database & offline support',
            'REST API & third-party SDK integration',
            'Play Store release support',
        ],
        pricingLabel: 'Starting at',
        price: '₹1,200',
        priceUnit: '/ hour',
        cta: "Let's Build",
        href: '#contact',
    },

    {
        title: 'Bug Fixing & Updates',
        icon: FiTool,
        iconName: '🛠️',
        description:
            'Resolving Android bugs, crashes, performance issues, dependency conflicts, SDK upgrades, and feature-related issues.',
        gradient: 'from-cyan-500 via-sky-500 to-blue-500',
        glow: 'rgba(6,182,212,0.3)',
        includes: [
            'Bug fixing & crash resolution',
            'Performance optimization',
            'Target SDK & dependency upgrades',
            'Google Play policy updates',
            'Feature enhancements',
        ],
        pricingLabel: 'Starting at',
        price: '₹20,000',
        priceUnit: '/ project',
        cta: 'Get Support',
        href: '#contact',
    },
    {
        title: 'Android Interview Support',
        icon: FiUsers,
        iconName: '👨‍💻',
        description:
            'Helping teams identify strong Android talent through structured technical interviews focused on Android development, Kotlin, architecture, debugging, and problem-solving.',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        glow: 'rgba(20,184,166,0.3)',
        includes: [
            'Android technical interviews',
            'Kotlin & Android fundamentals',
            'Architecture discussions',
            'Coding & problem-solving evaluation',
            'Candidate feedback & assessment',
        ],
        pricingLabel: 'Starting at',
        price: '₹1,000',
        priceUnit: '/ interview',
        cta: 'Book an Interview',
        href: '#contact',
    },
    {
        title: 'Pull Request Review',
        icon: FiGitPullRequest,
        iconName: '🔍',
        description:
            'Get an experienced Android engineer to review your pull requests and identify bugs, code-quality issues, architectural concerns, and opportunities for improvement.',
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        glow: 'rgba(245,158,11,0.3)',
        includes: [
            'Kotlin & Android best-practice review',
            'Code quality & maintainability',
            'Architecture review',
            'Performance considerations',
            'Actionable review comments',
        ],
        pricingLabel: 'Starting at',
        price: '₹500',
        priceUnit: '/ PR',
        cta: 'Request a PR Review',
        href: '#contact',
    },
    {
        title: 'Open Source Support',
        icon: FiGithub,
        iconName: '🌐',
        description:
            'Get practical guidance and hands-on support for contributing to open-source Android projects, from understanding the codebase to preparing a clean pull request.',
        gradient: 'from-slate-500 via-gray-500 to-zinc-500',
        glow: 'rgba(113,113,122,0.3)',
        includes: [
            'Open-source project onboarding',
            'Issue analysis & codebase understanding',
            'Implementation guidance',
            'PR preparation & review',
            'Contribution best practices',
        ],
        pricingLabel: 'Starting at',
        price: '₹2,000',
        priceUnit: '/ contribution',
        cta: 'Get Open Source Support',
        href: '#contact',
    },
];

function ServiceCard({ service, delay }) {
    const Icon = service.icon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay }}
            className="glass-card flex flex-col h-full group/service overflow-hidden"
        >
            {/* Top gradient bar */}
            <div
                className={`h-1 w-full bg-gradient-to-r ${service.gradient}`}
            />

            <div className="p-6 flex flex-col flex-1">

                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                    <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                        style={{
                            boxShadow: `0 8px 28px ${service.glow}`,
                        }}
                    >
                        <Icon
                            size={25}
                            className="text-white"
                        />
                    </div>

                    <span className="text-3xl">
                        {service.iconName}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] font-bold text-[var(--text-primary)] text-xl mb-3">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Includes */}
                <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                        Includes
                    </p>

                    <ul className="space-y-2.5 mb-6">
                        {service.includes.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5 text-[var(--text-muted)] text-xs leading-relaxed"
                            >
                                <span
                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 mt-1.5`}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing */}
                <div
                    className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-card)] px-4 py-3.5 mb-5"
                >
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                        {service.pricingLabel}
                    </p>

                    <div className="flex items-baseline gap-1">
                        <span className="font-['Space_Grotesk'] font-bold text-xl text-[var(--text-primary)]">
                            {service.price}
                        </span>

                        <span className="text-sm text-[var(--text-muted)]">
                            {service.priceUnit}
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <a
                    href={service.href}
                    className={`group/btn w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r ${service.gradient} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    style={{
                        boxShadow: `0 6px 20px ${service.glow}`,
                    }}
                >
                    {service.cta}

                    <FiArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                </a>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        margin: '-80px',
    });

    return (
        <section
            id="services"
            className="section-pad relative"
            aria-label="services section"
        >
            {/* Background decoration */}
            <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-[-80px] opacity-20" />

            <div
                className="max-w-6xl mx-auto px-6"
                ref={ref}
            >

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3">
                        Services
                    </p>

                    <h2 className="section-heading">
                        What I Can{' '}
                        <span className="gradient-text">
                            Build For You
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-[var(--text-muted)] text-base leading-relaxed">
                        Full lifecycle native Android application engineering
                        from wireframe to production release.
                    </p>

                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-5" />
                </motion.div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            delay={index * 0.12}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                    }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-[var(--text-muted)] mb-4">
                        Not sure which service fits your project?
                    </p>

                    <a
                        href="#contact"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        Let's Discuss Your Project
                        <FiArrowRight size={15} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}