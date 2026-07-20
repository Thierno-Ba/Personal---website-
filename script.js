(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const langButtons = document.querySelectorAll('.lang-btn');

  const translations = {
    en: {
      pageTitle: 'Thierno Barry | Aspiring AI Professional',
      navLogo: 'Thierno Barry',
      navAbout: 'About',
      navSkills: 'Skills',
      navProject: 'Work',
      navJourney: 'Journey',
      navConnect: 'Connect',
      langEnglish: 'English',
      langFrench: 'Français',
      navToggleLabel: 'Toggle menu',
      heroGreeting: "Hello, I'm",
      heroBadge: 'AI • Product thinking • Impact-driven',
      heroHeadline: 'Building AI-powered products and thoughtful solutions at the intersection of strategy, research, and impact.',
      heroMission: 'I am a Political Science and Finance graduate developing AI skills through the Pursuit AI Native program. I combine analytical thinking, technology, and problem-solving to design practical solutions that help teams make better decisions, move faster, and create real-world impact — including exploring how AI can strengthen Guinea\'s mining sector.',
      heroProjectBtn: 'View My Projects',
      heroContactBtn: 'Connect With Me',
      heroImageAlt: 'Portrait of Thierno Barry, aspiring AI professional focused on responsible technology solutions',
      skillsLabel: 'Skills & Strengths',
      skillsTitle: 'Capabilities that bridge analysis, product thinking, and responsible AI',
      skillsSubtitle: 'I bring a thoughtful mix of research, business understanding, and emerging technical capability — focused on turning complex problems into clear, useful solutions.',
      skillAiTitle: 'AI Problem-Solving',
      skillAiText: 'Breaking down complex challenges and exploring how AI tools can address them thoughtfully and effectively.',
      skillPromptTitle: 'Prompt Engineering',
      skillPromptText: 'Crafting clear, structured prompts to get reliable outputs from AI systems for research, analysis, and prototyping.',
      skillProductTitle: 'Product Thinking',
      skillProductText: 'Defining user needs, scoping features, and designing solutions that deliver real value — not just technical demos.',
      skillResearchTitle: 'Research & Analysis',
      skillResearchText: 'Investigating problems deeply, synthesizing information, and presenting findings with clarity and structure.',
      skillTechTitle: 'Technology Adoption',
      skillTechText: 'Learning new tools quickly, experimenting with emerging platforms, and integrating them into practical workflows.',
      skillCommunicationTitle: 'Communication & Collaboration',
      skillCommunicationText: 'Translating technical concepts for diverse audiences and working effectively across teams and stakeholders.',
      skillBridgeTitle: 'Business ↔ Technology Bridge',
      skillBridgeText: 'Connecting organizational challenges with technology solutions — understanding what teams need before proposing what tools can do.',
      aboutLabel: 'About Me',
      aboutTitle: 'From policy and finance to AI, product thinking, and meaningful impact',
      aboutP1: 'My journey began in Political Science and Finance — fields that taught me how to analyze complex systems, evaluate trade-offs, and understand how decisions ripple through organizations, economies, and communities. That foundation shaped how I think: always looking at problems from multiple angles before reaching for a solution.',
      aboutP2: 'Today, I\'m actively building AI skills through the Pursuit AI Native program, where I learn to design AI-powered solutions, work with modern development tools, and apply technology to challenges that matter. I\'m not claiming years of industry experience — I\'m claiming curiosity, discipline, and a track record of turning learning into action through real projects.',
      aboutP3: 'What drives me is purpose. I want to use AI responsibly to improve industries and communities — especially in Guinea, where the mining sector holds enormous potential for economic growth and sustainable development. I believe technology should make information more accessible, decisions more transparent, and outcomes more equitable.',
      highlightEducationTitle: 'Education',
      highlightEducationText: 'Political Science & Finance — analytical thinking, systems analysis, and business fundamentals',
      highlightFocusTitle: 'Current Focus',
      highlightFocusText: 'AI development, prompt engineering, and building practical solutions through Pursuit AI Native',
      highlightMissionTitle: 'Mission',
      highlightMissionText: 'Applying AI to Guinea\'s mining sector and sustainable development with transparency and impact',
      projectLabel: 'Featured Project',
      projectTitle: 'Designing an AI platform concept for mining transparency and smarter decisions',
      projectSubtitle: 'A concept platform exploring how AI can improve transparency, decision-making, and sustainable practices in one of West Africa\'s most resource-rich sectors.',
      projectMockupTitle: 'Mining Intelligence Platform',
      projectNavDashboard: 'Dashboard',
      projectNavDocuments: 'Documents',
      projectNavRegulations: 'Regulations',
      projectNavAssistant: 'AI Assistant',
      projectStatDocs: 'Documents Indexed',
      projectStatProjects: 'Active Projects',
      projectStatRegs: 'Regulations Summarized',
      projectChatQuestion: 'What are the latest environmental compliance requirements for bauxite mining?',
      projectChatAnswer: 'Based on current regulations, operators must submit quarterly environmental impact reports and maintain water quality monitoring at all extraction sites...',
      projectProblemTitle: 'The Problem',
      projectProblemText: 'Guinea\'s mining sector faces significant challenges: scattered and hard-to-access information, complex regulatory documents, limited transparency between companies and government agencies, and decision-making slowed by data that lives in silos. Stakeholders — from mining operators to policymakers — need better tools to organize, understand, and act on critical information.',
      projectSolutionTitle: 'The Solution',
      projectSolutionText: 'An AI-powered platform concept designed to help mining companies, government agencies, and community stakeholders organize information, analyze data, summarize regulations, and support more informed, transparent decisions across the sector.',
      projectFeaturesTitle: 'Key Features',
      projectFeature1Title: 'AI Mining Information Assistant',
      projectFeature1Text: '— Ask questions in plain language and get answers grounded in sector documents and regulations',
      projectFeature2Title: 'Document Analysis & Summarization',
      projectFeature2Text: '— Upload reports, contracts, and policy documents for AI-powered summaries and key insights',
      projectFeature3Title: 'Data Organization & Insights Dashboard',
      projectFeature3Text: '— Centralize project data, track compliance metrics, and surface trends at a glance',
      projectFeature4Title: 'Sustainable & Transparent Practices',
      projectFeature4Text: '— Support environmental reporting, stakeholder communication, and accountability workflows',
      projectRoleTitle: 'My Role',
      projectRoleText: 'I researched the sector\'s information challenges, designed the platform concept, applied prompt engineering to prototype the AI assistant experience, and explored how technology can create measurable value for mining organizations and the communities they serve. This project reflects my approach: understand the problem deeply, then build thoughtfully.',
      journeyLabel: 'Learning Journey',
      journeyTitle: 'Growing through Pursuit AI Native',
      journeySubtitle: 'An intensive, hands-on program where I am actively building the skills to design and deliver AI solutions — learning by doing, iterating, and improving.',
      journeyStep1Title: 'AI Concepts & Responsible Practices',
      journeyStep1Text: 'Learning foundational AI concepts — from how large language models work to the principles of responsible AI. Understanding bias, transparency, and the importance of building technology that serves people, not the other way around.',
      journeyStep2Title: 'Building Through Experimentation',
      journeyStep2Text: 'Creating real projects through iterative development — testing ideas, refining approaches, and learning from what works and what doesn\'t. Each project strengthens my ability to move from concept to working prototype.',
      journeyStep3Title: 'Tools, Environments & Problem-Solving',
      journeyStep3Text: 'Developing confidence with AI development tools, coding environments, and structured problem-solving methods. I\'m building the technical fluency to collaborate effectively with engineering teams while contributing meaningfully from day one.',
      journeyCtaText: 'I\'m early in my AI career — and that\'s intentional. I\'m investing deeply in learning now so I can contribute with both skill and perspective as the field evolves.',
      contactLabel: 'Get In Touch',
      contactTitle: 'Let\'s connect',
      contactIntro: 'I\'m open to conversations with recruiters, hiring managers, mining companies, government organizations, and technology programs. Whether you\'re exploring a collaboration, an internship, or a role where analytical thinking meets AI — I\'d love to hear from you.',
      contactPoint1: 'Open to opportunities in AI, technology, and sustainable development',
      contactPoint2: 'Interested in roles across mining, government, and tech sectors',
      contactPoint3: 'Based in the United States, with strong ties to Guinea',
      formNameLabel: 'Name',
      formNamePlaceholder: 'Your name',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'you@company.com',
      formOrganizationLabel: 'Organization',
      formOptional: '(optional)',
      formOrganizationPlaceholder: 'Company or organization',
      formMessageLabel: 'Message',
      formMessagePlaceholder: 'Tell me about the opportunity or how you\'d like to connect',
      formSubmitBtn: 'Send Message',
      formSuccessText: 'Thank you for reaching out! I\'ll get back to you as soon as possible.',
      socialLabel: 'Connect With Me',
      socialTitle: 'Follow My Journey',
      socialSubtitle: 'Connect with me on LinkedIn and X to follow my learning progress, project updates, and thoughts on AI, technology, and responsible innovation.',
      socialLinkedInLabel: 'LinkedIn',
      socialLinkedInHandle: 'Professional profile',
      socialXLabel: 'X (Twitter)',
      socialXHandle: '@Thierno64532240',
      footerText: '© 2026 Thierno Barry. Built with purpose.',
      footerBackToTop: 'Back to top ↑',
      socialLinkedInAria: 'Connect with Thierno Barry on LinkedIn (opens in new tab)',
      socialXAria: 'Follow Thierno Barry on X (opens in new tab)'
    },
    fr: {
      pageTitle: 'Thierno Barry | Professionnel IA en devenir',
      navLogo: 'Thierno Barry',
      navAbout: 'À propos',
      navSkills: 'Compétences',
      navProject: 'Travaux',
      navJourney: 'Parcours',
      navConnect: 'Contact',
      langEnglish: 'English',
      langFrench: 'Français',
      navToggleLabel: 'Ouvrir le menu',
      heroGreeting: 'Salut, je suis',
      heroBadge: 'IA • Pensée produit • Impact',
      heroHeadline: 'Créer des produits alimentés par l\'IA et des solutions réfléchies au croisement de la stratégie, de la recherche et de l\'impact.',
      heroMission: 'Je suis diplômé en sciences politiques et finance et j\'approfondis mes compétences en IA via le programme Pursuit AI Native. J\'associe réflexion analytique, technologie et résolution de problèmes pour concevoir des solutions concrètes qui aident les équipes à mieux décider, à aller plus vite et à créer un impact réel — y compris en explorant comment l\'IA peut renforcer le secteur minier guinéen.',
      heroProjectBtn: 'Voir mes projets',
      heroContactBtn: 'Me contacter',
      heroImageAlt: 'Portrait de Thierno Barry, professionnel IA en devenir axé sur des solutions technologiques responsables',
      skillsLabel: 'Compétences & Forces',
      skillsTitle: 'Des compétences qui relient analyse, pensée produit et IA responsable',
      skillsSubtitle: 'J\'apporte un mélange réfléchi de recherche, de compréhension du monde des affaires et de compétences techniques émergentes — centré sur la transformation des problèmes complexes en solutions claires et utiles.',
      skillAiTitle: 'Résolution de problèmes avec l\'IA',
      skillAiText: 'Décomposer des défis complexes et explorer comment les outils d\'IA peuvent les aborder de manière réfléchie et efficace.',
      skillPromptTitle: 'Ingénierie des prompts',
      skillPromptText: 'Créer des prompts clairs et structurés pour obtenir des résultats fiables des systèmes d\'IA à des fins de recherche, d\'analyse et de prototypage.',
      skillProductTitle: 'Pensée produit',
      skillProductText: 'Définir les besoins des utilisateurs, cadrer les fonctionnalités et concevoir des solutions qui apportent une vraie valeur — pas seulement des démonstrations techniques.',
      skillResearchTitle: 'Recherche & Analyse',
      skillResearchText: 'Étudier les problèmes en profondeur, synthétiser l\'information et présenter les résultats avec clarté et structure.',
      skillTechTitle: 'Adoption de la technologie',
      skillTechText: 'Apprendre rapidement de nouveaux outils, expérimenter des plateformes émergentes et les intégrer à des workflows concrets.',
      skillCommunicationTitle: 'Communication & Collaboration',
      skillCommunicationText: 'Traduire des concepts techniques pour des publics variés et travailler efficacement avec des équipes et des parties prenantes.',
      skillBridgeTitle: 'Pont entre business et technologie',
      skillBridgeText: 'Faire le lien entre les enjeux organisationnels et les solutions technologiques — comprendre ce dont les équipes ont besoin avant de proposer ce que les outils peuvent faire.',
      aboutLabel: 'À propos de moi',
      aboutTitle: 'De la politique et de la finance à l\'IA, à la pensée produit et à un impact concret',
      aboutP1: 'Mon parcours a commencé dans les sciences politiques et la finance — des domaines qui m\'ont appris à analyser des systèmes complexes, évaluer les compromis et comprendre comment les décisions se répercutent dans les organisations, les économies et les communautés. Cette base a façonné ma façon de penser : toujours regarder les problèmes sous plusieurs angles avant de chercher une solution.',
      aboutP2: 'Aujourd\'hui, j\'approfondis activement mes compétences en IA via le programme Pursuit AI Native, où j\'apprends à concevoir des solutions pilotées par l\'IA, à travailler avec des outils de développement modernes et à appliquer la technologie à des défis qui comptent. Je ne prétends pas avoir des années d\'expérience — je prétends avoir de la curiosité, de la discipline et une expérience concrète de transformation de l\'apprentissage en actions à travers des projets réels.',
      aboutP3: 'Ce qui me motive, c\'est l\'objectif. Je veux utiliser l\'IA de manière responsable pour améliorer les industries et les communautés — en particulier en Guinée, où le secteur minier possède un énorme potentiel de croissance économique et de développement durable. Je crois que la technologie doit rendre l\'information plus accessible, les décisions plus transparentes et les résultats plus équitables.',
      highlightEducationTitle: 'Formation',
      highlightEducationText: 'Sciences politiques & Finance — pensée analytique, analyse de systèmes et bases de gestion',
      highlightFocusTitle: 'Focus actuel',
      highlightFocusText: 'Développement de l\'IA, ingénierie des prompts et création de solutions concrètes via Pursuit AI Native',
      highlightMissionTitle: 'Mission',
      highlightMissionText: 'Appliquer l\'IA au secteur minier guinéen et au développement durable avec transparence et impact',
      projectLabel: 'Projet mis en avant',
      projectTitle: 'Concevoir un concept de plateforme IA pour plus de transparence et de décisions plus intelligentes',
      projectSubtitle: 'Une plateforme conceptuelle qui explore comment l\'IA peut améliorer la transparence, la prise de décision et les pratiques durables dans l\'un des secteurs les plus riches de l\'Afrique de l\'Ouest.',
      projectMockupTitle: 'Plateforme d\'intelligence minière',
      projectNavDashboard: 'Tableau de bord',
      projectNavDocuments: 'Documents',
      projectNavRegulations: 'Réglementations',
      projectNavAssistant: 'Assistant IA',
      projectStatDocs: 'Documents indexés',
      projectStatProjects: 'Projets actifs',
      projectStatRegs: 'Réglementations résumées',
      projectChatQuestion: 'Quelles sont les dernières exigences environnementales pour l\'exploitation du bauxite ?',
      projectChatAnswer: 'Selon les réglementations actuelles, les opérateurs doivent soumettre des rapports environnementaux trimestriels et maintenir un suivi de la qualité de l\'eau sur tous les sites d\'extraction...',
      projectProblemTitle: 'Le problème',
      projectProblemText: 'Le secteur minier guinéen fait face à des défis importants : des informations dispersées et difficiles d\'accès, des documents réglementaires complexes, une transparence limitée entre entreprises et administrations, et une prise de décision ralentie par des données enfermées dans des silos. Les parties prenantes — des opérateurs miniers aux décideurs — ont besoin d\'outils plus efficaces pour organiser, comprendre et agir sur les informations essentielles.',
      projectSolutionTitle: 'La solution',
      projectSolutionText: 'Un concept de plateforme alimentée par l\'IA destiné à aider les entreprises minières, les agences gouvernementales et les parties prenantes communautaires à organiser l\'information, analyser les données, résumer les réglementations et soutenir des décisions plus informées et plus transparentes dans le secteur.',
      projectFeaturesTitle: 'Fonctionnalités clés',
      projectFeature1Title: 'Assistant d\'information minière IA',
      projectFeature1Text: '— Posez des questions en langage simple et obtenez des réponses fondées sur les documents et réglementations du secteur',
      projectFeature2Title: 'Analyse et résumé de documents',
      projectFeature2Text: '— Téléversez des rapports, contrats et documents de politique pour obtenir des résumés et des informations clés alimentés par l\'IA',
      projectFeature3Title: 'Organisation des données et tableau de bord',
      projectFeature3Text: '— Centralisez les données de projet, suivez les métriques de conformité et visualisez les tendances en un coup d\'œil',
      projectFeature4Title: 'Pratiques durables et transparentes',
      projectFeature4Text: '— Soutenez le reporting environnemental, la communication avec les parties prenantes et les workflows de responsabilité',
      projectRoleTitle: 'Mon rôle',
      projectRoleText: 'J\'ai étudié les enjeux d\'information du secteur, conçu le concept de plateforme, appliqué l\'ingénierie des prompts pour prototyper l\'expérience de l\'assistant IA, et exploré comment la technologie peut créer une valeur mesurable pour les organisations minières et les communautés qu\'elles servent. Ce projet reflète mon approche : comprendre le problème en profondeur, puis construire avec réflexion.',
      journeyLabel: 'Parcours d\'apprentissage',
      journeyTitle: 'Grandir avec Pursuit AI Native',
      journeySubtitle: 'Un programme intensif et pratique où je construis activement les compétences nécessaires pour concevoir et livrer des solutions d\'IA — apprendre en faisant, itérer et progresser.',
      journeyStep1Title: 'Concepts d\'IA et pratiques responsables',
      journeyStep1Text: 'Apprendre les bases de l\'IA — du fonctionnement des grands modèles de langage aux principes d\'une IA responsable. Comprendre les biais, la transparence et l\'importance de construire une technologie au service des personnes, et non l\'inverse.',
      journeyStep2Title: 'Construire par l\'expérimentation',
      journeyStep2Text: 'Créer des projets concrets par un développement itératif — tester des idées, affiner des approches et apprendre de ce qui fonctionne et de ce qui ne fonctionne pas. Chaque projet renforce ma capacité à passer d\'un concept à un prototype fonctionnel.',
      journeyStep3Title: 'Outils, environnements et résolution de problèmes',
      journeyStep3Text: 'Développer confiance avec les outils de développement IA, les environnements de codage et les méthodes de résolution de problèmes structurées. Je construis la fluidité technique nécessaire pour collaborer efficacement avec des équipes d\'ingénierie tout en contribuant significativement dès le premier jour.',
      journeyCtaText: 'Je débute mon parcours dans l\'IA — et c\'est volontaire. J\'investis profondément dans l\'apprentissage maintenant pour pouvoir contribuer avec à la fois des compétences et une perspective à mesure que le domaine évolue.',
      contactLabel: 'Entrons en contact',
      contactTitle: 'Connectons-nous',
      contactIntro: 'Je suis ouvert aux conversations avec des recruteurs, des responsables RH, des entreprises minières, des organisations gouvernementales et des programmes technologiques. Que vous exploriez une collaboration, un stage ou un poste où la pensée analytique rencontre l\'IA — j\'adorerais vous entendre.',
      contactPoint1: 'Ouvert aux opportunités en IA, technologie et développement durable',
      contactPoint2: 'Intéressé par des postes dans les secteurs minier, gouvernemental et technologique',
      contactPoint3: 'Basé aux États-Unis, avec de solides liens avec la Guinée',
      formNameLabel: 'Nom',
      formNamePlaceholder: 'Votre nom',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'vous@entreprise.com',
      formOrganizationLabel: 'Organisation',
      formOptional: '(facultatif)',
      formOrganizationPlaceholder: 'Entreprise ou organisation',
      formMessageLabel: 'Message',
      formMessagePlaceholder: 'Parlez-moi de l\'opportunité ou de la façon dont vous souhaitez vous connecter',
      formSubmitBtn: 'Envoyer le message',
      formSuccessText: 'Merci pour votre message ! Je vous répondrai dès que possible.',
      socialLabel: 'Restons connectés',
      socialTitle: 'Suivez mon parcours',
      socialSubtitle: 'Rejoignez-moi sur LinkedIn et X pour suivre mon apprentissage, mes mises à jour de projets et mes réflexions sur l\'IA, la technologie et l\'innovation responsable.',
      socialLinkedInLabel: 'LinkedIn',
      socialLinkedInHandle: 'Profil professionnel',
      socialXLabel: 'X (Twitter)',
      socialXHandle: '@Thierno64532240',
      footerText: '© 2026 Thierno Barry. Construit avec intention.',
      footerBackToTop: 'Retour en haut ↑',
      socialLinkedInAria: 'Se connecter avec Thierno Barry sur LinkedIn (s\'ouvre dans un nouvel onglet)',
      socialXAria: 'Suivre Thierno Barry sur X (s\'ouvre dans un nouvel onglet)'
    }
  };

  function applyTranslations(language) {
    const strings = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.title = strings.pageTitle;

    document.querySelectorAll('[data-i18n-key]').forEach(function (element) {
      const key = element.getAttribute('data-i18n-key');
      const value = strings[key];
      if (!value) return;

      const attr = element.getAttribute('data-i18n-attr');
      if (attr) {
        element.setAttribute(attr, value);
      } else {
        element.textContent = value;
      }
    });

    langButtons.forEach(function (button) {
      const isActive = button.getAttribute('data-lang') === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setLanguage(language) {
    const normalizedLanguage = language === 'fr' ? 'fr' : 'en';
    localStorage.setItem('preferredLanguage', normalizedLanguage);
    applyTranslations(normalizedLanguage);
  }

  const storedLanguage = localStorage.getItem('preferredLanguage');
  const initialLanguage = storedLanguage === 'fr' ? 'fr' : 'en';
  setLanguage(initialLanguage);

  langButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.getAttribute('data-lang'));
    });
  });

  // Sticky header shadow on scroll
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile navigation toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const href = link.getAttribute('href');

        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            event.preventDefault();
            const offset = (header ? header.offsetHeight : 0) + 24;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }

        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-triggered fade-in animations (includes social-connect section)
  const fadeElements = document.querySelectorAll(
    '.section-header, .about-content, .about-highlights, .skill-card, ' +
    '.project-showcase, .journey-item, .journey-cta, .contact-grid, ' +
    '.social-connect-inner'
  );

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // Stagger skill cards animation
  document.querySelectorAll('.skill-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 0.08) + 's';
  });

  // Contact form handling
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let valid = true;

      [name, email, message].forEach(function (field) {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      if (!valid) return;

      contactForm.querySelector('.btn-primary').textContent = 'Message Sent!';
      contactForm.querySelector('.btn-primary').disabled = true;
      formSuccess.hidden = false;

      contactForm.reset();
    });
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (anchor) {
          anchor.style.color = '';
          if (anchor.getAttribute('href') === '#' + id) {
            anchor.style.color = 'var(--color-accent)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
})();
