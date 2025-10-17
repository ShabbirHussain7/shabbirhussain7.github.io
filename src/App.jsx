import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, FileText, Menu, X, Sun, Moon } from 'lucide-react';
import './App.css';
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleNavClick = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'news', 'experience'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Header 
                activeSection={activeSection} 
                handleNavClick={handleNavClick} 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
                <Hero handleNavClick={handleNavClick} />
                <About />
                <News />
                <Experience />
                <ResearchProjects />
            </main>
            <Footer />
        </div>
    );
};

// Header Component
const Header = ({ activeSection, handleNavClick, isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'news', title: 'News' },
        { id: 'experience', title: 'Experience' },
        { id: 'projects', title: 'Projects' },
    ];
    
    const NavItems = ({isMobile}) => (
        navLinks.map((link) => (
            <li key={link.id}>
                <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                        activeSection === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white'
                    } ${isMobile ? 'block w-full text-left' : ''}`}
                >
                    {link.title}
                </button>
            </li>
        ))
    );

    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Shabbir Hussain</span>
                    </div>
                    <div className="hidden md:flex items-center">
                        <ul className="ml-10 flex items-baseline space-x-4">
                            <NavItems isMobile={false} />
                        </ul>
                        <button onClick={toggleTheme} className="ml-6 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                         <button onClick={toggleTheme} className="mr-4 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                           {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavItems isMobile={true}/>
                    </ul>
                </div>
            )}
        </header>
    );
};


// Hero Section
const Hero = ({ handleNavClick }) => (
    <section id="home" className="py-10 md:py-8 text-center">
        <div className="flex flex-col items-center">
            <img 
                className="w-48 h-48 rounded-full mb-6 shadow-lg border-4 border-white dark:border-gray-700" 
                src="./profile.png" 
                alt="Shabbir Hussain"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                Shabbir Hussain
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
                PhD Student in Computer Science & Engineering at the University of Michigan
            </p>
            <div className="flex space-x-4 mb-8">
                
                <SocialLink href="https://www.linkedin.com/in/shabbir-hussain27" icon={<Linkedin size={24} />} label="LinkedIn" />
                <SocialLink href="https://github.com/ShabbirHussain7" icon={<Github size={24} />} label="GitHub" />
                <SocialLink href="./Shabbir_Resume.pdf" icon={<FileText size={24} />} label="CV" />
            </div>
            <button
                onClick={() => handleNavClick('about')}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Learn More About Me
            </button>
        </div>
    </section>
);

const SocialLink = ({ href, icon, label, isDownload = false }) => (
    <a 
        href={href} 
        target={isDownload ? '' : '_blank'} 
        rel="noopener noreferrer" 
        download={isDownload ? 'Shabbir_Hussain_CV.pdf' : null}
        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        aria-label={label}
    >
        {icon}
    </a>
);


// About Section
const About = () => (
    <section id="about" className="py-8">
        <SectionTitle title="About Me" />
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
                I’m a first-year Ph.D. student in Computer Science & Engineering at the University of Michigan, Ann Arbor, working with <a href="https://ensa.fi" className="text-blue-600 dark:text-blue-400 hover:underline">Dr. Roya Ensafi</a> in the <a href="https://censoredplanet.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Censored Planet</a> lab. My motivation is grounded in the lab’s mission: to bring visibility to censorship and network interference through scalable measurement systems.
            </p>
            <p>
                My research sits at the intersection of security, privacy, and AI. I’m currently exploring methods to detect and characterize tracking, censorship, and misconfiguration in cloud and Internet systems, as well as ways to mitigate their impact. I’m particularly interested in how machine learning and language models can contribute to defenses that are robust, transparent, and respectful of privacy.
            </p>
            <p>As I develop my work, I lean on a few guiding principles:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                    Start from measurements: understand real phenomena before building defenses
                </li>
                <li>
                    Aim for interpretability and accountability, not just accuracy
                </li>
                <li>
                    Commit to open tools and shared data (with care for user risk)
                </li>
            </ul>
            <p>
                Through my research I hope to contribute to making network infrastructure more trustworthy and help defend Internet users’ rights to privacy and openness.
            </p>
        </div>
    </section>
);

// News Section
const News = () => {
    const newsItems = [
        { date: 'Aug 2025', text: 'Started my PhD in Computer Science & Engineering at the University of Michigan. Go Blue!' },
        { date: 'Sep 2024', text: 'Started working with Dr. Aastha Mehta (Assistant Prof, UBC) on cloud security' },
        { date: 'Jun 2024', text: 'Joined Illumina Technology Solutions as a Trainee Software Engineer for the summer.' },
        { date: 'May 2024', text: 'Completed BSCS with Award of High Distinction.' },
    ];

    return (
        <section id="news" className="py-8">
            <SectionTitle title="News" />
            <div className="space-y-4">
                {newsItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-24 text-right text-sm font-medium text-blue-600 dark:text-blue-400">{item.date}</div>
                        <div className="flex-1 border-l-2 border-blue-200 dark:border-blue-800 pl-4 text-gray-700 dark:text-gray-300">{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Experience Section
const Experience = () => {
    const experiences = [
        {
            role: 'PhD Student & Graduate Research Assistant',
            organization: 'University of Michigan / Censored Planet Lab',
            duration: 'Aug 2025 – Present',
            description: 'Working with Dr. Roya Ensafi on research related to internet censorship, security, and privacy.'
        },
        {
            role: 'Security & AI Researcher (Remote)',
            organization: 'Systopia Lab, University of British Columbia',
            duration: 'Sep 2024 – Mar 2025',
            description: 'Collaborated with Dr. Aastha Mehta to mitigate mis-configurations in serverless cloud applications using formal language policies and large language models.'
        },
        {
            role: 'Trainee Software Engineer',
            organization: 'Illumina Technology Solutions',
            duration: 'Jun 2024 – Aug 2024',
            description: 'Gained expertise in .NET Core and Dynamics 365, developing custom features for enterprise retail software and automating cloud data synchronization.'
        },
        {
            role: 'Undergraduate Research Assistant',
            organization: 'Internet Security & Privacy Lab, LUMS',
            duration: 'Jun 2023 – May 2024',
            description: 'Conducted a large-scale study on web tracking via HTTP meta-data and implemented anti-tracking strategies using machine learning.'
        },
    ];

    return (
        <section id="experience" className="py-8">
            <SectionTitle title="Experience" />
            <div className="space-y-8 relative">
                 <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700 -ml-px hidden sm:block"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className="sm:grid sm:grid-cols-2 sm:gap-8 items-start relative">
                        <div className={`text-left sm:text-right sm:pr-8 ${index % 2 === 0 ? 'sm:order-1' : ''}`}>
                            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">{exp.role}</h3>
                            <p className="text-md text-gray-600 dark:text-gray-400">{exp.organization}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                        <div className={`pt-2 sm:pt-0 sm:pl-8 ${index % 2 === 0 ? 'sm:order-2' : ''}`}>
                            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Research Projects Section
const ResearchProjects = () => {
    const projects = [
        {
            title: 'Mitigating Serverless Misconfigurations',
            description: 'Developed a system using formal language policies and LLMs to detect and prevent human errors in serverless cloud applications, improving on the Growlithe (IEEE S&P 2025) system.',
            tags: ['Python', 'JavaScript', 'LLMs', 'Formal Methods', 'Cloud Security'],
            link: '#'
        },
        {
            title: 'Web Tracking via HTTP Meta-Data',
            description: 'Conducted a large-scale measurement study that exposed a novel cookie exfiltration channel, and implemented anti-tracking strategies using machine learning.',
            tags: ['Web Security', 'Privacy', 'Machine Learning', 'Network Analysis'],
            link: '#'
        },
        {
            title: 'Wildlife Image Captioning',
            description: 'Built an image captioning model using Inception V3 and LSTMs for camera trap images to facilitate automated wildlife monitoring, achieving a high BLEU score.',
            tags: ['Deep Learning', 'PyTorch', 'Computer Vision', 'NLP'],
            link: '#'
        },
        {
            title: 'Low-Resource Language OCR',
            description: 'Improved OCR models for languages with Arabic and Perso-Arabic scripts by instrumenting CRAFT and establishing a novel dataset generation pipeline.',
            tags: ['OCR', 'PyTorch', 'Computer Vision', 'Data Generation'],
            link: '#'
        },
    ];

    return (
        <section id="projects" className="py-16">
            <SectionTitle title="Research Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ title, description, tags, link }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
        {link && link !== '#' && (
            <a href={link} className="text-blue-600 dark:text-blue-400 hover:underline mt-auto self-start">
                GitHub &rarr;
            </a>
        )}
    </div>
);

// Footer Component
const Footer = () => (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 md:px-8 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shabbir Hussain. All rights reserved.</p>
        </div>
    </footer>
);

const SectionTitle = ({ title }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{title}</h2>
);

export default App;

