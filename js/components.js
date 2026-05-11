// home component
function HomeSection() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="section-container" id="home">
            <div className="home-grid">
                <div className="home-content">
                    <span className="home-tag">
                        <i className="fa-solid fa-circle" style={{ fontSize: '0.5rem', marginRight: '0.4rem' }}></i>
                        Disponible pour stage - 2026
                    </span>
                    <h1 className="home-name">Halla<br/> <span>Rafiq</span></h1>
                    <p className="home-subtitle">Étudiante en 2ᵉ année de Licence en Informatique</p>
                    <p className="home-desc">Étudiante en informatique passionnée par le développement web, l’IA, la cybersécurité et la résolution de problèmes</p>
                    <div className="home-buttons">
                        <button className="btn btn-primary" onClick={()=> scrollTo('projects')}><i className="fa-solid fa-code"></i> Voir mes projets</button>
                        <button className="btn btn-secondary" onClick={()=> scrollTo('contact')}><i className="fa-solid fa-envelope"></i> Me contacter</button>
                    </div>
                </div>
                <img src="assets/profile.png" alt="Profile Picture" className="profile-pic"/>
            </div>
        </div>
    );
}

// about component
function AboutSection() {
    return (
        <div className="section-container" id="about">
            <h2 className="section-title">À propos de moi</h2>
            <div className="about-grid">
                <div>
                    <p className="about-text">
                        Je m'appelle Halla Rafiq, étudiante en deuxième année de Licence Informatique à la faculté des sciences Semlalia. Depuis mon plus jeune âge, j'ai toujours été curieuse de comprendre comment les choses fonctionnent, cette curiosité m'a naturellement conduite vers l'informatique.
                    </p>
                    <p className="about-text">
                        Aujourd’hui, je suis étudiante en Licence 2 Informatique et je m’intéresse particulièrement au développement web, à l’intelligence artificielle et à la cybersécurité. J’aime apprendre de nouvelles technologies, résoudre des problèmes et créer des projets utiles, modernes et interactifs qui combinent logique et créativité.
                    </p>
                    <p className="about-text">
                        En dehors de la programmation, j’aime le dessin, ainsi que découvrir de nouvelles idées dans le domaine de la technologie. Ces centres d’intérêt développent ma créativité, ma patience et mon sens du détail, des qualités que j’essaie d’appliquer dans chacun de mes projets.
                    </p>
                    <div className="about-tags">
                        <span className="tag">Rigoureuse</span>
                        <span className="tag">Créative</span>
                        <span className="tag">Esprit d'équipe</span>
                        <span className="tag">Autodidacte</span>
                        <span className="tag">Bilingue FR/AR</span>
                    </div>
                </div>
                <div className="about-box">
                    <div className="info-row">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <span className="info-label">Localisation</span>
                            <span className="info-value">Marrakech, Maroc</span>
                        </div>
                    </div>
                    <div className="info-row">
                        <i className="fa-regular fa-calendar"></i>
                        <div>
                            <span className="info-label">Disponibilité</span>
                            <span className="info-value">Stage été 2026</span>
                        </div>
                    </div>
                    <div className="info-row">
                        <i className="fa-solid fa-language"></i>
                        <div>
                            <span className="info-label">Langues</span>
                            <span className="info-value">Arabe, Français, Anglais</span>
                        </div>
                    </div>
                    <div className="info-row">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <span className="info-label">Localisation</span>
                            <span className="info-value">Marrakech, Maroc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// skills component
function SkillsSection() {
    const techSkills = [
        { name: 'HTML / CSS', level: 80},
        { name: 'JavaScript', level: 70},
        { name: 'Node.js', level: 50},
        { name: 'c / C++', level: 70},
    ];

    const tools = ['Git / GitHub', 'VS Code', 'Linux', 'jQuery'];
    const soft = ['Communication', 'Travail en équipe', 'Résolution de problèmes', 'Adaptabilité', 'Gestion du temps'];

    return (
        <div className="section-container" id="skills">
            <h2 className="section-title">Compétences</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-card-header">
                        <div className="skill-icon"><i className="fa-solid fa-code"></i></div>
                        <span className="skill-card-title">Langages techniques</span>
                    </div>
                    <div className="skill-bars">
                        {techSkills.map((s, i) => ( //s= skill
                            <div className="skill-bar-info" key={i}>
                                <div className="skill-bar-info">
                                    <span>{s.name}</span>
                                    <span>{s.level}%</span>
                                </div>
                                <div className="skill-bar-track">
                                    <div className="skill-bar-fill" data-width={s.level}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-header">
                        <div className="skill-icon"><i className="fa-solid fa-wrench"></i></div>
                        <span className="skill-card-title">Outils & Frameworks</span>
                    </div>
                    <div className="skill-tags-list">
                        {tools.map((t, i) => ( //t= tool
                            <span className="s-tag" key={i}>{t}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-header">
                        <div className="skill-icon"><i className="fa-regular fa-lightbulb"></i></div>
                        <span className="skill-card-title">Compétences transversales</span>
                    </div>
                    <div className="skill-tags-list">
                        {soft.map((s, i) => (
                            <span className="s-tag" key={i}>{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Formation Compenent
function FormationSection() {
    const formations = [
        {
            title: "Licence Sciences de l'Informatique",
            date: '2023 – Présent',
            lieu: 'Faculté des sciences, Marrakech',
            desc: "Cours : Algorithmique avancée, Programmation orientée objet, Développement web (HTML/CSS/JS), Bases de données relationnelles, Architecture des systèmes, Systèmes d'exploitation"
        },
        {
            title: 'Baccalauréat Sciences Physique',
            date: '2022 – 2023',
            lieu: 'Lycée Ibn Al-haythem, Imintanoute',
            desc: "Obtention d’un baccalauréat en Sciences Physiques avec une base solide en mathématiques, physique et résolution de problèmes scientifiques"
        },
        {
            title: 'Certificat FreeCodeCamp - Responsive Web Design',
            date: '2026',
            lieu: 'En ligne - freecodecamp.org',
            desc: 'Formation complète sur HTML5, CSS3, Flexbox, Grid'
        }
    ];

    return (
        <div className="section-container" id="formation">
            <h2 className="section-title">Formation</h2>
            <div className="timeline">
                {formations.map((f, i) => (
                    <div className="timeline-item" key={i}>
                        <div className="timeline-card">
                            <h3>{f.title}</h3>
                            <span className="timeline-date">{f.date} · {f.lieu}</span>
                            <div className="timeline-desc">{f.desc}</div>
                            <span className="timeline-toggle">
                                <i className="fa-solid fa-plus"></i> Voir détails
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ProjectCard compenent
function ProjectCard({name, tech, desc, github, demo }) {
    return (
        <div className="project-card">
            <h3>{name}</h3>
            <p className="project-tech">{tech}</p>
            <p className="project-desc">{desc}</p>
            <div className="project-links">
                {github && (
                    <a href={github} target="_blank" className="project-link">
                        <i className="fa-brands fa-github"></i> Code
                    </a>
                )}
                {demo && (
                    <a href={demo} target="_blank" className="project-link">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Démo
                    </a>
                )}
            </div>
        </div>
    );
}

function ProjectsSection() {
    const projects = [
        {
            name: 'CV Interactif',
            tech: 'HTML, CSS, JavaScript, jQuery, React ',
            desc: 'Site web personnel avec animations jQuery, navigation smooth scroll et design responsive adapté aux mobiles',
            github: '',
            demo: '#'
        },
        {
            name: 'Services de la faculté',
            tech: 'HTML, CSS, JavaScript',
            desc: 'Un site web qui aide et guide les étudiants de la faculté des sciences Semlalia',
            github: 'https://rafiq00043-lab.github.io/Structure-Services-Facult--Semlalia/',
            demo: null
        }
    ];

    return (
        <div className="section-container" id="projects">
            <h2 className="section-title">Projets & Expérience</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </div>
    );
}

// Contact component
function ContactSection() {
    const copyEmail = () => {
        const email = 'h.rafiq0738@uca.ac.ma';
        navigator.clipboard.writeText(email);
        window.dispatchEvent(new CustomEvent('copyEmail', { detail: { email } }));
    };

    return (
        <div className="section-container" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Travaillons ensemble</h3>
                    <p>
                        Vous avez un projet ou une opportunité de stage ?
                        N'hésitez pas à me contacter, je réponds généralement sous 24h.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:h.rafiq0738@uca.ac.ma" className="c-link">
                            <i className="fa-regular fa-envelope"></i>h.rafiq0738@uca.ac.ma
                        </a>
                        <a href="https://www.linkedin.com/in/halla-rafiq-817b34408/" target="_blank" className="c-link">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://github.com/hrafiq0738-gif" target="_blank" className="c-link">
                            <i className="fa-brands fa-github"></i> GitHub
                        </a>
                        <button onClick={copyEmail} className="c-link">
                            <i className="fa-regular fa-copy"></i> Copier l'email
                        </button>
                    </div>
                </div>

                <form id="contact-form" className="contact-form">
                    <div className="form-group">
                        <label htmlFor="field-nom">Nom complet</label>
                        <input id="field-nom" type="text" placeholder="Votre nom" />
                        <span className="form-error">Veuillez entrer votre nom (min. 2 caractères).</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="field-email">Email</label>
                        <input id="field-email" type="email" placeholder="votre@email.com" />
                        <span className="form-error">Veuillez entrer une adresse email valide.</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="field-message">Message</label>
                        <textarea id="field-message" rows="5" placeholder="Votre message..."></textarea>
                        <span className="form-error">Le message doit contenir au moins 10 caractères.</span>
                    </div>
                    <button type="submit" className="btn-submit">
                        <i className="fa-regular fa-paper-plane"></i> Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    );
}

// App
function App() {
    React.useEffect(() => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.add('hide');
                setTimeout(() => loader.remove(), 500);
            }
            window.dispatchEvent(new Event('reactLoaded'));
        }, 500);
    }, []);

    return (
        <>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <FormationSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}

// Rendering
window.addEventListener('load', function() {
    const root = document.getElementById('root');
    if (root) {
        ReactDOM.createRoot(root).render(React.createElement(App));
    }
});