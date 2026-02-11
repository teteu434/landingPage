// ------------------- PROJETOS -------------------
const projects = [
    {
        title: "Blog do Matheus (Spring Boot)",
        description: "Blog pessoal utilizando Java + Spring Boot e API REST.",
        technologies: ["Java", "Spring Boot", "MySQL"],
        link: "https://github.com/teteu434/Blog-do-Matheus"
    },
    {
        title: "DataView INSS",
        description: "Dashboard analítico para análise de dados.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Bootstrap"],
        link: "https://github.com/teteu434/DataView"
    },
    {
        title: "Sistema do Matheus (.NET)",
        description: "Sistema em .NET com EF Core, Swagger e frontend DataView.",
        technologies: ["C#", ".NET", "PostgreSQL"],
        link: "https://github.com/teteu434/SistemaMatheus"
    },
    {
        title: "API Arqueológica",
        description: "API REST criada via CLI.",
        technologies: ["Node.js", "Express", "PostgreSQL"],
        link: "https://github.com/teteu434/projetoCIT"
    },
    {
        title: "Fila de Mensageria RabbitMQ",
        description: "Sistema de fila de mensageria com exchange fanout, utilizando RabbitMQ, .NET e Docker",
        technologies: ["RabbitMQ", ".NET", "Docker"],
        link: "https://github.com/teteu434/MensageriaRabbit"
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');

    container.innerHTML = projects.map(project => `
        <div class="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500 transition-all hover-scale">
            <div class="p-6">
                <h4 class="text-xl font-semibold mb-3">${project.title}</h4>
                <p class="text-gray-300 mb-4 leading-relaxed">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(t => `
                        <span class="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">${t}</span>
                    `).join("")}
                </div>
                <a href="${project.link}" target="_blank" class="text-green-400 hover:text-green-300">Ver projeto →</a>
            </div>
        </div>
    `).join("");
}


// ------------------- MENU MOBILE -------------------
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
    mobileMenu.classList.add('active');

    overlay.classList.remove('hidden');
    setTimeout(() => overlay.style.opacity = '1', 10);

    document.body.style.overflow = 'hidden';
    
    // Adiciona efeito de desfoque em todo o conteúdo principal
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.add('content-blur');
    });
    
    // Também aplica no footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.add('content-blur');
    }
}

function closeMenuFunc() {
    mobileMenu.classList.remove('active');

    overlay.style.opacity = '0';
    setTimeout(() => overlay.classList.add('hidden'), 300);

    document.body.style.overflow = 'auto';
    
    // Remove efeito de desfoque de todo o conteúdo principal
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.remove('content-blur');
    });
    
    // Remove do footer também
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.remove('content-blur');
    }
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);

document.querySelectorAll('#mobileMenu a').forEach(a => 
    a.addEventListener('click', closeMenuFunc)
);

// Fechar menu com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});


// ------------------- SMOOTH SCROLL -------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


// ------------------- HEADER SHADOW -------------------
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('shadow-xl', window.pageYOffset > 100);
});


// ------------------- FADE-IN -------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// ------------------- INIT -------------------
document.addEventListener('DOMContentLoaded', renderProjects);