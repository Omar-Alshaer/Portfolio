/* ========================================
   OMAR ELSHAER PORTFOLIO - MAIN JAVASCRIPT
   ======================================== */

// ========================================
// DATA OBJECT - AUTO-FILLED FROM CV
// Edit this object to customize content
// ========================================

const portfolioData = {
    // === PERSONAL INFO (AUTO-FILLED FROM CV) ===
    name: "Omar Reda Elshaer",
    title: "Software Engineering Student",
    tagline: "Full-Stack & Data Engineering Enthusiast",
    location: "Alexandria, Egypt",

    // === CONTACT INFO (AUTO-FILLED FROM CV) ===
    email: "omar.reda.shaer@gmail.com",
    phone: "+20 12 835 482 48",

    // === SOCIAL LINKS (AUTO-FILLED FROM CV) ===
    social: {
        linkedin: "https://www.linkedin.com/in/omar-r-shaer/",
        github: "https://github.com/Omar-Alshaer"
    },

    // === TYPING ANIMATION TEXTS ===
    typingTexts: [
        "Software Engineering Student",
        "Full-Stack Developer",
        "Data Engineering Enthusiast",
        "Web Track Instructor @ IEEE",
        "Microsoft Data Engineer Trainee"
    ],

    // === SKILLS (AUTO-FILLED FROM CV) ===
    skills: [
        // Frontend Skills
        { name: "HTML5 & CSS3", level: 95, category: "frontend", icon: "fab fa-html5" },
        { name: "JavaScript", level: 90, category: "frontend", icon: "fab fa-js" },
        { name: "TypeScript", level: 80, category: "frontend", icon: "fab fa-js" },
        { name: "React.js", level: 85, category: "frontend", icon: "fab fa-react" },
        { name: "Next.js", level: 75, category: "frontend", icon: "fab fa-react" },
        { name: "Bootstrap", level: 90, category: "frontend", icon: "fab fa-bootstrap" },

        // Backend Skills
        { name: "Node.js", level: 85, category: "backend", icon: "fab fa-node-js" },
        { name: "Express.js", level: 85, category: "backend", icon: "fab fa-node-js" },
        { name: "Python", level: 90, category: "backend", icon: "fab fa-python" },
        { name: "PHP", level: 75, category: "backend", icon: "fab fa-php" },
        { name: "Java", level: 80, category: "backend", icon: "fab fa-java" },
        { name: "C++ / C#", level: 80, category: "backend", icon: "fas fa-code" },

        // Data & Cloud Skills
        { name: "SQL", level: 90, category: "data", icon: "fas fa-database" },
        { name: "MongoDB", level: 85, category: "data", icon: "fas fa-leaf" },
        { name: "Microsoft Azure", level: 80, category: "data", icon: "fab fa-microsoft" },
        { name: "Data Pipelines", level: 75, category: "data", icon: "fas fa-stream" },
        { name: "Firebase", level: 80, category: "data", icon: "fas fa-fire" },
        { name: "R Programming", level: 70, category: "data", icon: "fas fa-chart-line" },

        // Tools
        { name: "Git & GitHub", level: 90, category: "tools", icon: "fab fa-git-alt" },
        { name: "RESTful APIs", level: 85, category: "tools", icon: "fas fa-plug" },
        { name: "Software Testing", level: 80, category: "tools", icon: "fas fa-vial" },
        { name: "PyQt / JavaFX", level: 75, category: "tools", icon: "fas fa-window-maximize" }
    ],

    // === PROJECTS (AUTO-FILLED FROM CV) ===
    projects: [
        {
            id: 1,
            title: "O-Easy-TA",
            subtitle: "Academic Affairs Management System",
            category: "data",
            description: "A comprehensive academic affairs management system developed using Python and SQLite3 for the backend, integrated with a web platform for real-time data sharing. The system streamlines academic administrative tasks and improves data accessibility.",
            tech: ["Python", "SQLite3", "Web Integration", "RESTful API"],
            image: "assets/projects/o-easy-ta.jpg",
            github: "https://github.com/Omar-Alshaer",
            demo: "https://o-easy-ta.vercel.app/",
            date: "Jan 2025 – May 2025"
        },
        {
            id: 2,
            title: "IEEE AIU SB Website",
            subtitle: "Student Branch Official Website",
            category: "web",
            description: "Official website for the IEEE Alamein International University Student Branch. Features event management, member profiles, and resource sections. Built as the Web Track founder and instructor.",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
            image: "assets/projects/ieee-website.jpg",
            github: "https://github.com/Omar-Alshaer",
            demo: "https://ieee-aiu.vercel.app/",
            date: "Feb 2025 – Present"
        },
        {
            id: 3,
            title: "AIU Voice Club Website",
            subtitle: "Student Club Digital Platform",
            category: "web",
            description: "Dynamic website for AIU Voice Club featuring content management, media galleries, and event coordination tools. Led as Head of Web & Content.",
            tech: ["React.js", "Firebase", "CSS3", "JavaScript"],
            image: "assets/projects/voice-club.jpg",
            github: "https://github.com/Omar-Alshaer",
            demo: "https://aiuvoiceclub.vercel.app/",
            date: "Oct 2025 – Present"
        },
        {
            id: 4,
            title: "Soul Art Hub Website",
            subtitle: "Art Community Platform",
            category: "web",
            description: "A creative platform for artists to showcase their work, connect with other creators, and participate in community events. Features gallery displays and artist profiles.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            image: "assets/projects/soul-art-hub.jpg",
            github: "https://github.com/Omar-Alshaer",
            demo: "https://soul-art-hub.vercel.app/",
            date: "Mar 2025 – Aug 2025"
        },
        {
            id: 5,
            title: "AIU Transportation System",
            subtitle: "University Transport Management",
            category: "tools",
            description: "Web-based transportation management system for Alamein International University. Enables students to track buses, view schedules, and manage transportation bookings efficiently.",
            tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
            image: "assets/projects/transportation.jpg",
            github: "https://github.com/Omar-Alshaer",
            demo: "https://aiu-o-buses.vercel.app/",
            date: "Jul 2025 – Aug 2025"
        },
        {
            id: 6,
            title: "Doctorly – Clinic Management System",
            subtitle: "Medical Practice Management Platform",
            category: "tools",
            description: "A full clinic management system inspired by Doctorly. Provides doctors with smart tools to manage appointments, patients’ medical records, invoices, analytics, and clinic workflow through a modern and intuitive dashboard.",
            tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
            image: "assets/projects/doctorly.jpg",
            github: "https://github.com/Omar-Elshaer",
            demo: null,
            date: "2025"
        }

    ],

    // === CERTIFICATIONS (AUTO-FILLED FROM CV) ===
    certifications: {
        depi: [
            { name: "Microsoft Data Engineer (Ongoing)", issuer: "DEPI", icon: "fab fa-microsoft" },
            { name: "Prompt Engineering", issuer: "DEPI", icon: "fas fa-robot" },
            { name: "SQL & Database Management", issuer: "DEPI", icon: "fas fa-database" },
            { name: "Advanced Python", issuer: "DEPI", icon: "fab fa-python" },
            { name: "Data Pipelines", issuer: "DEPI", icon: "fas fa-stream" },
            { name: "Big Data Processing", issuer: "DEPI", icon: "fas fa-server" },
            { name: "Microsoft Azure Data Engineer Associate", issuer: "DEPI", icon: "fab fa-microsoft" },
            { name: "AI for Data Engineers", issuer: "DEPI", icon: "fas fa-brain" }
        ],
        coursera: [
            { name: "Microsoft Full-Stack Developer Professional Certificate", issuer: "Microsoft", icon: "fab fa-microsoft" },
            { name: "Object-Oriented Programming in Java", issuer: "UC San Diego", icon: "fab fa-java" },
            { name: "Object-Oriented Programming in C++", issuer: "MaharaTech", icon: "fas fa-code" },
            { name: "Advanced Python for Data Engineering", issuer: "Coursera", icon: "fab fa-python" },
            { name: "SQL for Data Science with R", issuer: "IBM", icon: "fas fa-database" },
            { name: "Introduction to R Programming", issuer: "IBM", icon: "fas fa-chart-line" },
            { name: "Ordered Data Structures", issuer: "UIUC", icon: "fas fa-sitemap" },
            { name: "Inferential Statistics", issuer: "Duke University", icon: "fas fa-chart-bar" },
            { name: "Introduction to Logic for CS", issuer: "University of Leeds", icon: "fas fa-brain" }
        ],
        competitions: [
            { name: "ROV Egypt Regional Competition", issuer: "Software Team (Apr 2025)", icon: "fas fa-robot", badge: "Participant" },
            { name: "ECPC Problem Solving", issuer: "AAST (2024)", icon: "fas fa-code", badge: "Participant" },
            { name: "Young Innovator National Competition", issuer: "Web Design (2021)", icon: "fas fa-trophy", badge: "2nd Place" },
            { name: "NTI Python Programming", issuer: "120 Hours Training", icon: "fab fa-python", badge: "91.5%" }
        ]
    }
};

// ========================================
// DOM ELEMENTS
// ========================================
const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    themeToggle: document.getElementById('themeToggle'),
    typingText: document.getElementById('typingText'),
    skillsGrid: document.getElementById('skillsGrid'),
    projectsGrid: document.getElementById('projectsGrid'),
    modal: document.getElementById('projectModal'),
    backToTop: document.getElementById('backToTop'),
    contactForm: document.getElementById('contactForm'),
    copyEmailBtn: document.getElementById('copyEmailBtn'),
    currentYear: document.getElementById('currentYear')
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initTypingEffect();
    initSkills();
    initProjects();
    initCertifications();
    initTimeline();
    initContactForm();
    initScrollEffects();
    initModal();
    setCurrentYear();

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
});

// ========================================
// THEME TOGGLE
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    elements.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    // Mobile toggle
    elements.navToggle.addEventListener('click', () => {
        elements.navToggle.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
        elements.navToggle.setAttribute('aria-expanded',
            elements.navMenu.classList.contains('active'));
    });

    // Close menu on link click
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            elements.navToggle.classList.remove('active');
            elements.navMenu.classList.remove('active');
        });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                elements.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Navbar scroll effect
        if (window.scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// TYPING EFFECT
// ========================================
function initTypingEffect() {
    const texts = portfolioData.typingTexts;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            elements.typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            elements.typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ========================================
// SKILLS SECTION
// ========================================
function initSkills() {
    renderSkills();
    initSkillFilters();
    observeSkillCards();
}

function renderSkills() {
    const html = portfolioData.skills.map(skill => `
        <div class="skill-card" data-category="${skill.category}">
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${skill.icon}" aria-hidden="true"></i>
                </div>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="--progress: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');

    elements.skillsGrid.innerHTML = html;
}

function initSkillFilters() {
    const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const cards = elements.skillsGrid.querySelectorAll('.skill-card');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

function observeSkillCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.language-item').forEach(item => {
        const progress = item.querySelector('.language-progress');
        if (progress) {
            progress.style.setProperty('--level', progress.dataset.level);
        }
        observer.observe(item);
    });
}

// ========================================
// PROJECTS SECTION
// ========================================
function initProjects() {
    renderProjects();
    initProjectFilters();
}

function renderProjects() {
    const html = portfolioData.projects.map(project => `
        <article class="project-card" data-category="${project.category}" data-id="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" 
                     onerror="this.src='https://via.placeholder.com/400x200/0b1f3a/00a89a?text=${encodeURIComponent(project.title)}'">
                <div class="project-overlay">
                    <button class="btn btn-primary btn-sm view-project">
                        <i class="fas fa-eye" aria-hidden="true"></i>
                        View Details
                    </button>
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${getCategoryLabel(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.subtitle}</p>
                <div class="project-tech">
                    ${project.tech.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    ${project.tech.length > 3 ? `<span class="tech-tag">+${project.tech.length - 3}</span>` : ''}
                </div>
            </div>
        </article>
    `).join('');

    elements.projectsGrid.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.id);
            openProjectModal(projectId);
        });
    });
}

function getCategoryLabel(category) {
    const labels = {
        web: 'Web Development',
        data: 'Data & Backend',
        tools: 'Tools & Systems'
    };
    return labels[category] || category;
}

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const cards = elements.projectsGrid.querySelectorAll('.project-card');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ========================================
// CERTIFICATIONS SECTION
// ========================================
function initCertifications() {
    renderCerts('depi', 'depiCerts');
    renderCerts('coursera', 'courseraCerts');
    renderCompetitions();
}

function renderCerts(type, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const certs = portfolioData.certifications[type];
    const html = certs.map(cert => `
        <div class="cert-card">
            <div class="cert-icon">
                <i class="${cert.icon}" aria-hidden="true"></i>
            </div>
            <div class="cert-info">
                <span class="cert-name">${cert.name}</span>
                <span class="cert-issuer">${cert.issuer}</span>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function renderCompetitions() {
    const container = document.getElementById('competitionCerts');
    if (!container) return;

    const comps = portfolioData.certifications.competitions;
    const html = comps.map(comp => `
        <div class="cert-card">
            <div class="cert-icon">
                <i class="${comp.icon}" aria-hidden="true"></i>
            </div>
            <div class="cert-info">
                <span class="cert-name">${comp.name}</span>
                <span class="cert-issuer">${comp.issuer}</span>
                ${comp.badge ? `<span class="cert-badge">${comp.badge}</span>` : ''}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// ========================================
// TIMELINE TABS
// ========================================
function initTimeline() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const timelines = document.querySelectorAll('.timeline');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.dataset.tab;
            timelines.forEach(timeline => {
                if (timeline.id === `${tab}Timeline`) {
                    timeline.classList.add('active');
                } else {
                    timeline.classList.remove('active');
                }
            });
        });
    });
}

// ========================================
// MODAL
// ========================================
function initModal() {
    const overlay = elements.modal.querySelector('.modal-overlay');
    const closeBtn = elements.modal.querySelector('.modal-close');

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalImage').onerror = function () {
        this.src = `https://via.placeholder.com/800x400/0b1f3a/00a89a?text=${encodeURIComponent(project.title)}`;
    };
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    document.getElementById('modalTech').innerHTML = techHtml;

    let linksHtml = '';
    if (project.github) {
        linksHtml += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
        </a>`;
    }
    if (project.demo) {
        linksHtml += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fas fa-external-link-alt" aria-hidden="true"></i> Live Demo
        </a>`;
    }
    document.getElementById('modalLinks').innerHTML = linksHtml;

    elements.modal.classList.add('active');
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus trap
    elements.modal.querySelector('.modal-close').focus();
}

function closeModal() {
    elements.modal.classList.remove('active');
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
    elements.copyEmailBtn.addEventListener('click', copyEmail);

    // Real-time validation
    const inputs = elements.contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(input) {
    const errorEl = document.getElementById(`${input.id}Error`);
    let isValid = true;
    let message = '';

    if (input.required && !input.value.trim()) {
        isValid = false;
        message = 'This field is required';
    } else if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    } else if (input.minLength && input.value.length < input.minLength) {
        isValid = false;
        message = `Must be at least ${input.minLength} characters`;
    }

    if (!isValid) {
        input.classList.add('error');
        errorEl.textContent = message;
    } else {
        input.classList.remove('error');
        errorEl.textContent = '';
    }

    return isValid;
}

function handleFormSubmit(e) {
    e.preventDefault();

    const inputs = elements.contactForm.querySelectorAll('.form-input');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) return;

    const submitBtn = elements.contactForm.querySelector('.btn-submit');
    const formMessage = document.getElementById('formMessage');

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        const formData = new FormData(elements.contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Create mailto link as fallback
        const mailtoLink = `mailto:${portfolioData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;


        // Reset form
        elements.contactForm.reset();

        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }, 1000);
}

function copyEmail() {
    navigator.clipboard.writeText(portfolioData.email).then(() => {
        const btn = elements.copyEmailBtn;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> <span>Copied!</span>';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-secondary');

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
        }, 2000);
    }).catch(() => {
        alert(`Email: ${portfolioData.email}`);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.btn-submit');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    // Form submission with Formspree
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Check HTML5 validation first
        if (!this.checkValidity()) {
            this.reportValidity();
            return;
        }


        try {
            const formData = new FormData(contactForm);

            const response = await fetch('https://formspree.io/f/meozbalb', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! Thank you.';
                formMessage.className = 'form-message success';
                contactForm.reset();
            } else {
                formMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Submission failed. Please try again.';
                formMessage.className = 'form-message error';
            }
        } catch (error) {
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Connection error. Check your internet.';
            formMessage.className = 'form-message error';
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });

    // Copy email functionality
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            const email = 'omar.reda.shaer@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalText = this.querySelector('span').textContent;
                this.querySelector('span').textContent = 'Copied!';
                setTimeout(() => {
                    this.querySelector('span').textContent = originalText;
                }, 2000);
            });
        });
    }
});


// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });

    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// UTILITIES
// ========================================
function setCurrentYear() {
    if (elements.currentYear) {
        elements.currentYear.textContent = new Date().getFullYear();
    }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // URL نظيف تماماً بدون hash
            window.history.replaceState(null, '', window.location.pathname);
        }
    });
});

window.addEventListener('hashchange', () => {
    window.history.replaceState(null, '', window.location.pathname);
});
