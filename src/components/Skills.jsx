import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {
    FaJs, FaHtml5, FaCss3Alt, FaBootstrap,
    FaDatabase, FaGitAlt, FaGithub, FaReact, FaCode,
    FaAndroid,
} from 'react-icons/fa';
import {
    SiDjango, SiGooglecloud,SiIntellijidea, SiPostman,
    SiHackerrank, SiLeetcode, SiXcode, SiJetpackcompose, SiAndroidstudio, SiGradle,
    SiFirebase, SiKotlin, SiCplusplus, SiGeeksforgeeks, SiCoderabbit, SiCodingninjas,
    SiGithubcopilot,
    SiOpenai,
    SiAnthropic,
} from 'react-icons/si';
import {
    FiCpu, FiCode as FiEdit3, FiUsers, FiDatabase,
    FiLayers,
    FiBox,
    FiShield,
    FiGrid,
    FiPackage,
    FiGitBranch,
    FiGlobe,
    FiDownloadCloud,
    FiWifi,
} from 'react-icons/fi';
import {DiJava, DiAndroid} from 'react-icons/di';

const skillGroups = [
    {
        category: 'Languages',
        color: 'from-purple-500/20 to-purple-500/5',
        border: 'border-purple-500/20',
        skills: [
            {name: 'Kotlin', icon: SiKotlin, color: '#3776ab'},
            {name: 'Java', icon: DiJava, color: '#f8981d'},
            {name: 'JavaScript', icon: FaJs, color: '#f7df1e'},
            {name: 'SQL', icon: FaDatabase, color: '#00758f'},
            {name: 'C/C++', icon: SiCplusplus, color: '#00758f'},
        ],
    },
    {
        category: 'AI & Agentic AI',
        color: 'from-pink-500/20 to-pink-500/5',
        border: 'border-pink-500/20',
        skills: [
            {name: 'Agentic AI', icon: FiCpu, color: '#a855f7'},
            {name: 'AI Agents', icon: FiUsers, color: '#ec4899'},
            {name: 'Prompt Engineering', icon: FiEdit3, color: '#06b6d4'},
        ],
    },
    {
        category: 'Android Development',
        color: 'from-emerald-500/20 to-emerald-500/5',
        border: 'border-emerald-500/20',
        skills: [
            {name: 'Android SDK', icon: DiAndroid, color: '#10b981'},
            {name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#3b82f6'},
            {name: 'Room', icon: FiDatabase, color: '#8b5cf6'},
            {name: 'Android Fundamental', icon: FaAndroid, color: '#8b5cf6'},
            {name: 'React Native', icon: FaReact, color: '#ec4899'},
            {name: 'FireBase/Cloud messaging', icon: SiFirebase, color: '#f59e0b'},
        ],
    },
    {
        category: 'Architecture & System Design',
        color: 'from-emerald-500/20 to-emerald-500/5',
        border: 'border-emerald-500/20',
        skills: [
            {name: 'Mobile System Design', icon: FiGitBranch, color: '#10b981'},
            {name: 'Android Architecture', icon: FiLayers, color: '#3b82f6'},
            {name: 'Clean Architecture', icon: FiBox, color: '#8b5cf6'},
            {name: 'SOLID Principles', icon: FiShield, color: '#8b5cf6'},
            {name: 'Design Patterns', icon: FiGrid, color: '#ec4899'},
            {name: 'Modularization', icon: FiPackage, color: '#f59e0b'},
        ],
    },
    {
        category: 'Web Development',
        color: 'from-cyan-500/20 to-cyan-500/5',
        border: 'border-cyan-500/20',
        skills: [
            {name: 'HTML5', icon: FaHtml5, color: '#e34f26'},
            {name: 'CSS3', icon: FaCss3Alt, color: '#1572b6'},
            {name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3'},
            {name: 'React.js', icon: FaReact, color: '#61dafb'},
            {name: 'Django', icon: SiDjango, color: '#94a3b8'},
            {name: 'REST APIs', icon: FiCpu, color: '#8b5cf6'},
        ],
    },
    {
        category: 'Databases, Cloud & APIs',
        color: 'from-sky-500/20 to-sky-500/5',
        border: 'border-sky-500/20',
        skills: [
            {name: 'REST APIs', icon: FiGlobe, color: '#4479a1'},
            {name: 'Retrofit', icon: FiDownloadCloud, color: '#47a248'},
            {name: 'OkHttp', icon: FiWifi, color: '#ff9900'},
            {name: 'GCP', icon: SiGooglecloud, color: '#ff9900'},
        ],
    },
    {
        category: 'Competitive Coding',
        color: 'from-green-500/20 to-green-500/5',
        border: 'border-green-500/20',
        skills: [
            {
                name: 'HackerRank',
                icon: SiHackerrank,
                color: '#00EA64',
                href: 'https://www.hackerrank.com/profile/rajupraaa1234'
            },
            {
                name: 'GeeksForGeeks',
                icon: SiGeeksforgeeks,
                color: '#2F8D46',
                href: 'https://auth.geeksforgeeks.org/user/rajupraaa1234/practice/'
            },
            {
                name: 'InterviewBit',
                icon: SiCoderabbit,
                color: '#6C63FF',
                href: 'https://www.interviewbit.com/profile/rajupraaa12345346/'
            },
            {
                name: 'CodingNinjas',
                icon: SiCodingninjas,
                color: '#FF6B35',
                href: 'https://www.naukri.com/code360/profile/rajupraaa'
            },
            {name: 'LeetCode', icon: SiLeetcode, color: '#ffa116', href: 'https://leetcode.com/rajupraaa1234/'},
        ],
    },
];

function SkillIcon({name, icon: Icon, color, href}) {
    const content = (
        <motion.div
            whileHover={{scale: 1.08, y: -4}}
            transition={{type: 'spring', stiffness: 300}}
            className={`icon-card ${
                href ? 'cursor-pointer shadow-lg shadow-white/5' : 'cursor-default'
            } transition-all duration-300 group`}
            title={name}
        >
            <Icon size={28} style={{color}} className="transition-transform duration-300"/>
            <span
                className="text-[var(--text-muted)] text-[10px] sm:text-xs font-medium group-hover:text-[var(--text-primary)] transition-colors text-center leading-tight">
        {name}
      </span>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {content}
            </a>
        );
    }

    return content;
}

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: '-80px'});

    return (
        <section id="skills" className="section-pad relative" aria-label="Skills section">
            <div className="orb orb-pink w-[350px] h-[350px] top-20 right-0 opacity-20"/>

            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-14"
                >
                    <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-2">What I work
                        with</p>
                    <h2 className="section-heading">My <span className="gradient-text">Skills</span></h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mt-4"/>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{opacity: 0, y: 30}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.55, delay: gi * 0.1}}
                            className={`glass-card p-5 bg-gradient-to-br ${group.color} border ${group.border}`}
                        >
                            <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"/>
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {group.skills.map(skill => (
                                    <SkillIcon key={skill.name} {...skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.7}}
                    className="mt-8 glass-card p-5"
                >
                    <p className="text-slate-400 text-sm font-medium mb-4">Tools & Editors</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            {name: 'VS Code', icon: FaCode},
                            {name: 'Git', icon: FaGitAlt},
                            {name: 'GitHub', icon: FaGithub},
                            {name: 'Postman', icon: SiPostman},
                            {name: 'Android Studio', icon: SiAndroidstudio},
                            {name: 'IntelliJ IDEA', icon: SiIntellijidea},
                            {name: 'X Code', icon: SiXcode},
                            {name: 'Gradle', icon: SiGradle},
                            {name: 'GitHub Copilot', icon: SiGithubcopilot},
                            {name: 'ChatGPT', icon: SiOpenai},
                            {name: 'Claude', icon: SiAnthropic},
                        ].map(tool => (
                            <span key={tool.name} className="skill-pill">
                <tool.icon size={12} style={{opacity: 0.7}}/>
                                {tool.name}
              </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
