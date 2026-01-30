// Sistema de Tradução PT/EN
const translations = {
    pt: {
        // Navegação
        nav: {
            home: "Início",
            about: "Sobre Mim",
            experience: "Experiência",
            projects: "Projetos",
            skills: "Habilidades",
            courses: "Cursos",
            contact: "Contato"
        },
        // Hero Section
        hero: {
            title: "Gabriel Holanda Costa",
            subtitle: "Cientista da Computação | Desenvolvedor Front-End",
            description: "Codificando Ideias, Construindo o Futuro."
        },
        // About Section
        about: {
            title: "Sobre Mim",
            p1: "Sou Gabriel Holanda Costa, um entusiasta da tecnologia e estudante dedicado do 5º período de Ciência da Computação na UNINASSAU, com previsão de término para o final de 2027.",
            p2: "Minha paixão pelo desenvolvimento web se aprofundou durante minha monitoria em Front-end, onde pude compartilhar conhecimentos e aprimorar minhas habilidades em HTML e CSS ao lado do professor Valdick Sales na UNINASSAU. Acredito na combinação de código limpo, design intuitivo e funcionalidade robusta para criar experiências digitais impactantes.",
            p3: "Atualmente, atuo como Desenvolvedor Front-end em projeto governamental (PNLD) em parceria com o NEES/UFAL, onde aplico minhas habilidades em HTML, CSS e JavaScript para criar materiais digitais acessíveis e de alta qualidade.",
            p4: "Estou em constante aprendizado, explorando novas tecnologias e buscando desafios que me permitam crescer como desenvolvedor e entregar soluções inovadoras."
        },
        // Experience Section
        experience: {
            title: "Experiência Profissional",
            fundepes: {
                title: "FUNDEPES — Desenvolvedor Front-end",
                period: "Nov 2025 - Jan 2026",
                location: "Maceió, AL",
                description: "Projeto (PNLD) em parceria com o NEES/UFAL.",
                responsibilities: [
                    "Atuação majoritária em Front-end (HTML, CSS, JS) com ajustes, correções e melhorias visuais em materiais digitais.",
                    "Validação, revisão e padronização dos conteúdos do PNLD, garantindo organização, consistência e acessibilidade.",
                    "Correção de marcação HTML, estrutura e componentes, apoiando o time na preparação técnica dos materiais antes da publicação."
                ]
            },
            monitoria: {
                title: "Monitoria de Front end — UNINASSAU",
                period: "Mar 2024 - Dez 2024",
                location: "Maceió, AL",
                responsibilities: [
                    "Liderei o suporte prático para o aprendizado de HTML e CSS, trabalhando em estreita colaboração com o Professor Valdick Sales.",
                    "Desenvolvi mini projetos didáticos e resolução de dúvidas em sala."
                ]
            },
            freelance: {
                title: "Desenvolvimento Freelancer",
                period: "Freelancer",
                location: "Remoto",
                description: "Desenvolvimento de projetos freelancer para diversos clientes.",
                responsibilities: [
                    "Criação de landing pages em HTML, CSS, JS e Bootstrap para clientes, focadas em conversão e responsividade."
                ]
            },
            desktop: {
                title: "Aplicação Desktop",
                period: "Projeto Pessoal",
                location: "Maceió, AL",
                description: "Desenvolvimento de aplicação desktop com interface gráfica.",
                responsibilities: [
                    "Aplicação desktop com interface Tkinter em Python."
                ]
            },
            sql: {
                title: "Scripts SQL para Otimização",
                period: "Projeto Pessoal",
                location: "Maceió, AL",
                description: "Desenvolvimento de scripts SQL para otimização de consultas.",
                responsibilities: [
                    "Desenvolvimento de queries e scripts em SQL (Oracle e MySQL) para manipulação e otimização de consultas de dados."
                ]
            }
        },
        // Projects Section
        projects: {
            title: "Meus Projetos",
            caioTonet: {
                title: "Portfólio Caio Tonet",
                description: "Desenvolvimento de um portfólio moderno e artístico para o fotógrafo e artista visual Caio Tonet, apresentando sua obra de forma imersiva e responsiva."
            },
            drLucas: {
                title: "Portfólio Dr. Lucas Farias",
                description: "Criação de um portfólio médico elegante e funcional para o Dr. Lucas Farias, especialista em dor, com foco em design atraente e animações suaves."
            },
            adminflow: {
                title: "AdminFlow Dashboard",
                description: "Dashboard administrativo completo em React + TypeScript com sistema de autenticação, controle de acesso baseado em roles, CRUD completo para usuários e tarefas, internacionalização (pt-BR, en, es) e interface totalmente responsiva.",
                features: [
                    "Sistema completo de autenticação com persistência de sessão",
                    "Controle de acesso baseado em roles (Admin/User)",
                    "CRUD completo para usuários e tarefas com regras de negócio",
                    "Internacionalização (pt-BR, en, es) com react-i18next",
                    "Rotas protegidas e validações",
                    "Interface totalmente responsiva"
                ]
            },
            shopcart: {
                title: "ShopCart",
                description: "E-commerce completo com sistema funcional de carrinho de compras, gerenciamento de produtos e categorias, interface moderna e responsiva com experiência de usuário otimizada.",
                features: [
                    "Sistema funcional de carrinho de compras",
                    "Gerenciamento de produtos e categorias",
                    "Interface moderna e responsiva",
                    "Experiência de usuário otimizada"
                ]
            },
            viewProject: "Ver Projeto",
            viewDemo: "Ver Demo"
        },
        // Skills Section
        skills: {
            title: "Minhas Habilidades",
            frontend: "Front End Development",
            backend: "Back End Development"
        },
        // Courses Section
        courses: {
            title: "Cursos e Capacitação",
            oxetech: {
                title: "Oxetech, Centro de Inovação do Jaraguá",
                items: [
                    "Fundamentos de HTML e CSS (40h)",
                    "Spring Boot na Prática (40h)",
                    "Lógica de Programação em Java (40h)",
                    "Introdução a Banco de Dados (40h)",
                    "Introdução à Programação com Python (20h)"
                ]
            },
            education: {
                title: "Formação Acadêmica",
                uninassau: {
                    title: "UNINASSAU - Maceió",
                    period: "2024-2027",
                    description: "Ciência da Computação - Atualmente no 5º período"
                },
                english: {
                    title: "Inglês - Intermediário (B1/B2)",
                    institution: "IBL (Instituto Brasileiro de Línguas)",
                    description: "Atualmente no 2º ano"
                }
            }
        },
        // Contact Section
        contact: {
            title: "Entre em Contato",
            description: "Tenho interesse em novas oportunidades de projetos, vagas e colaborações. Sinta-se à vontade para me enviar uma mensagem!",
            note: "Vamos construir algo incrível juntos!",
            phrases: {
                your: "Sua",
                idea: "Ideia",
                myCode: "Minha Linha de Código"
            }
        },
        // Common
        scrollDown: "Role para baixo",
        page: "PAGE"
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            courses: "Courses",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            title: "Gabriel Holanda Costa",
            subtitle: "Computer Scientist | Front-End Developer",
            description: "Coding Ideas, Building the Future."
        },
        // About Section
        about: {
            title: "About Me",
            p1: "I'm Gabriel Holanda Costa, a technology enthusiast and dedicated 5th period Computer Science student at UNINASSAU, with expected completion by the end of 2027.",
            p2: "My passion for web development deepened during my Front-end mentoring, where I was able to share knowledge and improve my skills in HTML and CSS alongside Professor Valdick Sales at UNINASSAU. I believe in combining clean code, intuitive design, and robust functionality to create impactful digital experiences.",
            p3: "Currently, I work as a Front-end Developer on a government project (PNLD) in partnership with NEES/UFAL, where I apply my skills in HTML, CSS, and JavaScript to create accessible and high-quality digital materials.",
            p4: "I'm constantly learning, exploring new technologies, and seeking challenges that allow me to grow as a developer and deliver innovative solutions."
        },
        // Experience Section
        experience: {
            title: "Professional Experience",
            fundepes: {
                title: "FUNDEPES — Front-end Developer",
                period: "Nov 2025 - Jan 2026",
                location: "Maceió, AL",
                description: "Project (PNLD) in partnership with NEES/UFAL.",
                responsibilities: [
                    "Mainly worked in Front-end (HTML, CSS, JS) with adjustments, corrections, and visual improvements in digital materials.",
                    "Validation, review, and standardization of PNLD content, ensuring organization, consistency, and accessibility.",
                    "Correction of HTML markup, structure, and components, supporting the team in the technical preparation of materials before publication."
                ]
            },
            monitoria: {
                title: "Front-end Mentoring — UNINASSAU",
                period: "Mar 2024 - Dec 2024",
                location: "Maceió, AL",
                responsibilities: [
                    "Led practical support for learning HTML and CSS, working closely with Professor Valdick Sales.",
                    "Developed didactic mini-projects and resolved doubts in class."
                ]
            },
            freelance: {
                title: "Freelance Development",
                period: "Freelancer",
                location: "Remote",
                description: "Freelance development projects for various clients.",
                responsibilities: [
                    "Creation of landing pages in HTML, CSS, JS, and Bootstrap for clients, focused on conversion and responsiveness."
                ]
            },
            desktop: {
                title: "Desktop Application",
                period: "Personal Project",
                location: "Maceió, AL",
                description: "Development of desktop application with graphical interface.",
                responsibilities: [
                    "Desktop application with Tkinter interface in Python."
                ]
            },
            sql: {
                title: "SQL Scripts for Optimization",
                period: "Personal Project",
                location: "Maceió, AL",
                description: "Development of SQL scripts for query optimization.",
                responsibilities: [
                    "Development of queries and scripts in SQL (Oracle and MySQL) for data manipulation and query optimization."
                ]
            }
        },
        // Projects Section
        projects: {
            title: "My Projects",
            caioTonet: {
                title: "Caio Tonet Portfolio",
                description: "Development of a modern and artistic portfolio for photographer and visual artist Caio Tonet, presenting his work in an immersive and responsive way."
            },
            drLucas: {
                title: "Dr. Lucas Farias Portfolio",
                description: "Creation of an elegant and functional medical portfolio for Dr. Lucas Farias, pain specialist, with focus on attractive design and smooth animations."
            },
            adminflow: {
                title: "AdminFlow Dashboard",
                description: "Complete administrative dashboard in React + TypeScript with authentication system, role-based access control, full CRUD for users and tasks, internationalization (pt-BR, en, es) and fully responsive interface.",
                features: [
                    "Complete authentication system with session persistence",
                    "Role-based access control (Admin/User)",
                    "Full CRUD for users and tasks with business rules",
                    "Internationalization (pt-BR, en, es) with react-i18next",
                    "Protected routes and validations",
                    "Fully responsive interface"
                ]
            },
            shopcart: {
                title: "ShopCart",
                description: "Complete E-commerce with functional shopping cart system, product and category management, modern and responsive interface with optimized user experience.",
                features: [
                    "Functional shopping cart system",
                    "Product and category management",
                    "Modern and responsive interface",
                    "Optimized user experience"
                ]
            },
            viewProject: "View Project",
            viewDemo: "View Demo"
        },
        // Skills Section
        skills: {
            title: "My Skills",
            frontend: "Front End Development",
            backend: "Back End Development"
        },
        // Courses Section
        courses: {
            title: "Courses and Training",
            oxetech: {
                title: "Oxetech, Centro de Inovação do Jaraguá",
                items: [
                    "HTML and CSS Fundamentals (40h)",
                    "Spring Boot in Practice (40h)",
                    "Programming Logic in Java (40h)",
                    "Introduction to Databases (40h)",
                    "Introduction to Programming with Python (20h)"
                ]
            },
            education: {
                title: "Academic Background",
                uninassau: {
                    title: "UNINASSAU - Maceió",
                    period: "2024-2027",
                    description: "Computer Science - Currently in the 5th period"
                },
                english: {
                    title: "English - Intermediate (B1/B2)",
                    institution: "IBL (Instituto Brasileiro de Línguas)",
                    description: "Currently in the 2nd year"
                }
            }
        },
        // Contact Section
        contact: {
            title: "Get in Touch",
            description: "I'm interested in new project opportunities, positions, and collaborations. Feel free to send me a message!",
            note: "Let's build something amazing together!",
            phrases: {
                your: "Your",
                idea: "Idea",
                myCode: "My Line of Code"
            }
        },
        // Common
        scrollDown: "Scroll down",
        page: "PAGE"
    }
};

