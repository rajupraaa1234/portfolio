import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {FiBriefcase, FiCalendar, FiMapPin, FiCheck, FiExternalLink, FiAward} from 'react-icons/fi';

const experiences = [
    {
        role: 'Software Engineer II',
        company: 'Lloyds Technology Center (FinTech)',
        location: 'Hyderabad',
        period: 'Dec 2021 – Present',
        type: 'Full Time',
        color: 'from-purple-500 to-violet-600',
        highlights: [
            'Owned the end-to-end development of the Spending Rewards feature for the Lloyds Banking App, from architecture and implementation to testing and production release.',
            'Designed scalable Android solutions using MVVM, Clean Architecture, Jetpack Compose, and modular architecture.',
            'Integrated GCP APIs to support personalized offers, cashback redemption, and reward transaction tracking.',
            'Built an AI-powered PR review assistant that automates Android code reviews against organization-specific standards, Kotlin best practices, and testing guidelines.',
            'Delivered key post-launch enhancements including Featured Offers, Filter & Sort, Custom Intercept Surveys, and Cashback Transaction History.',
            'Collaborated with cross-functional teams through architectural discussions and code reviews to improve engineering quality and maintainability.'
        ],
        tags: ['Android SDK', 'Kolin', 'Java', 'JetPack Compose', 'XML', 'MVVM/Clean Architecture', 'Android Modularization', 'Solid Principle', 'FireBase', 'Room', 'DeepLinking', 'WorkManager'],
    },
    {
        role: 'Software Engineer',
        company: 'Educational Initiative (EduSkills Foundation)',
        location: 'Bangalore',
        period: 'Sep 2021 – Nov 2023',
        type: 'Full Time',
        color: 'from-pink-500 to-rose-600',
        highlights: [
            'Developed and maintained the Mindspark mobile application using React Native for Android and iOS, delivering Trusted Device, OTP Login, Screening Test, Dual Login Flow, and interactive learning features.',
            'Contributed to the EiAsset native Android application, an assessment platform used by 380,000+ students annually for online assessments, response submission, and performance reporting.',
            'Built scalable Android features using Kotlin, Java, Jetpack Compose, MVVM, Clean Architecture, and Dependency Injection, with unit testing for maintainable and reliable code.',
            'Integrated REST APIs, Firebase Crashlytics, WebView-based learning content, and Android platform components while collaborating with backend teams on production-ready features.',
            'Managed application state using Redux and MobX and contributed to Spring Boot microservices to support end-to-end mobile application functionality.',
            'Optimized the React Native application by upgrading the framework and replacing unnecessary third-party libraries with custom implementations, reducing APK size from 32 MB to 25 MB (~22% reduction).'
        ],
        tags: ['React Native', 'Android SDK', 'JavaScript/TypeScript', 'FireBase', 'XML', 'Java', 'Solid Principle', 'MVVM/Clean Architecture', 'Mobx', 'redux'],
    },
    {
        role: 'Software Engineer',
        company: 'MoneyTap (FinTech)',
        location: 'Bangalore',
        period: 'Jul 2021 – Aug 2023',
        type: 'Full Time',
        color: 'from-pink-500 to-rose-600',
        highlights: [
            'Developed and enhanced Android features for a digital lending platform using Kotlin, Java, and Android Jetpack components, delivering secure and reliable customer experiences.',
            'Implemented customer-facing flows including user onboarding, authentication, loan applications, profile management, and payment-related features.',
            'Built maintainable Android modules using MVVM, Repository Pattern, and Clean Code principles, ensuring reliable feature delivery and scalable code.'
        ],
        tags: ['Android SDK', 'Kolin', 'Java', 'MVVM/Clean Architecture', 'Solid Principle', 'FireBase', 'Room'],
    },
    {
        role: 'Software Engineer Intern',
        company: 'Appventurez',
        location: 'Bangalore',
        period: 'Jan 2021 – Jun 2023',
        type: 'Internship',
        color: 'from-pink-500 to-rose-600',
        highlights: [
            'Contributed to the development of the AstroBaBa Android application using Java, delivering responsive and user-friendly features for astrology and consultation services.',
            'Implemented Android components using MVVM architecture and integrated Room Database for efficient local data storage and offline support.',
            'Integrated REST APIs, Firebase Cloud Messaging (FCM), push notifications, and live chat functionality to enable real-time communication and improve user engagement.',
            'Collaborated with senior engineers to troubleshoot issues, optimize application performance, and deliver high-quality Android releases.'
        ],
        tags: ['Android SDK', 'Kolin', 'Java', 'MVVM/Clean Architecture', 'Solid Principle', 'FireBase', 'Room', 'XML', 'Services', 'WorkManager'],
        link: 'https://drive.google.com/file/d/1hhPUTFAp8i0h_cNTyCjLmkjZutgUILhN/view',
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: '-80px'});

    return (
        <section id="experience" className="section-pad relative" aria-label="Experience section">
            <div className="orb orb-purple w-[350px] h-[350px] top-10 left-[-80px] opacity-20"/>

            <div className="max-w-4xl mx-auto px-6" ref={ref}>
                {/* Heading */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-14"
                >
                    <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">What I've built
                        & done</p>
                    <h2 className="section-heading">My <span className="gradient-text">Experience</span></h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mt-4"/>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-8">
                    <div className="timeline-line" aria-hidden="true"/>

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role}
                            initial={{opacity: 0, x: -30}}
                            animate={inView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.55, delay: i * 0.18}}
                            className="relative flex gap-5 mb-8 last:mb-0"
                        >
                            <div className="timeline-dot mt-2" aria-hidden="true"/>

                            <article
                                className="glass-card flex-1 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <FiBriefcase size={14} className="text-purple-400"/>
                                            <span
                                                className="text-xs font-semibold text-purple-400 uppercase tracking-wide">{exp.type}</span>
                                        </div>
                                        <h3 className="font-bold text-[var(--text-primary)] text-lg leading-snug">{exp.role}</h3>
                                        <p className="text-[var(--text-muted)] text-sm font-medium mt-0.5">{exp.company}</p>
                                        <p className="text-[var(--text-muted)] text-xs flex items-center gap-1 mt-1 opacity-80">
                                            <FiMapPin size={10}/>
                                            {exp.location}
                                            &nbsp;·&nbsp;
                                            <FiCalendar size={10}/>
                                            {exp.period}
                                        </p>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-2 mb-4" aria-label="Key highlights">
                                    {exp.highlights.map((h, hi) => (
                                        <li key={hi}
                                            className="flex gap-3 text-[var(--text-muted)] text-sm leading-relaxed">
                                            <FiCheck size={14} className="text-cyan-400 flex-shrink-0 mt-0.5"/>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="skill-pill">{tag}</span>
                                    ))}
                                </div>

                                {exp.link && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors group self-start"
                                    >
                                        <FiAward size={12}/>
                                        View Certificate
                                        <FiExternalLink size={11}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                                    </a>
                                )}
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
