export const projects = [
  
  {
    slug: 'Traderverse',
    title: 'Traderverse Social Platform',
    subtitle: 'A modern social trading platform built to empower today\'s traders',
    info: 'Developed a modern social trading platform with market insights, portfolio tracking, and financial analytics. Built responsive interfaces for trader profiles, social feeds, watchlists, portfolios, and market dashboards.',
    description: [
      'Implemented interactive charts, real-time market data, trading insights, and performance visualizations.',
      'Created reusable, scalable frontend components with Vuex-based state management and REST API integration.',
      'Focused on responsive UI/UX across desktop and mobile, with optimized performance for data-heavy views.'
    ],
    keyFeatures: [
      'Trader profiles and social feeds.',
      'Watchlists and portfolio tracking.',
      'Real-time market data and trading insights.',
      'Interactive charts and performance visualizations.',
      'Market dashboards and financial analytics.'
    ],

    skills: ['Vue.js', 'Vite', 'Vuex', 'JavaScript', 'HTML5', 'CSS3', 'ApexCharts', 'Highcharts', 'REST API Integration', 'Component Architecture', 'Responsive Design', 'Data Visualization', 'Performance Optimization', 'State Management'],
    mainImage: '/assets/Images/project/analytics/project-analytics.png',
    images: [
      '/assets/Images/project/analytics/desktop-profile.webp',
      '/assets/Images/project/analytics/desktop-timeline.webp',
      '/assets/Images/project/analytics/desktop-discover.webp',
      '/assets/Images/project/analytics/img1.png',
    ],
    liveLink: 'https://traderverse.io/'
  },
  {
    slug: 'TRADERSGPT-APP',
    title: 'TradersGPT APP',
    subtitle: 'AI-Powered Market Insights',
    info: 'Developed TradersGPT – an AI-powered trading insights app using React Native.',
    description: [
      'Designed and developed UI screens using reusable components and consistent layout structure in React Native.',
      'Built and managed component libraries for scalable and maintainable mobile app development.'
    ],
    skills: ['React Native', 'Component Architecture', 'UI Design', 'API Integration', 'AI Feature Integration'],
    mainImage: '/assets/Images/project/tradergpt/Tradergpt.jpg',
    images: [
      '/assets/Images/project/tradergpt/0.jpg',
      '/assets/Images/project/tradergpt/1.jpg',
      '/assets/Images/project/tradergpt/2.jpg',
      '/assets/Images/project/tradergpt/3.jpg'

    ],
    liveLink: 'https://tradersgpt.io/'
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Design, Development & Deployment of My Own Showcase',
    info: 'Designed and developed my own portfolio website from scratch to showcase my work, skills, and experience — handling the full cycle from UI design and component architecture to animations, dark mode, and deployment.',
    description: [
      'Built with Nuxt 3 and Vue 3 featuring server-side rendering, auto-imported components, and a custom SCSS design system using CSS variables for consistent theming.',
      'Implemented a persistent dark mode with saved user preference, AOS scroll animations, and Splide-powered carousels for projects and skills.',
      'Developed reusable components including a project detail modal with image slider, gradient-border buttons, experience timeline, and a validated EmailJS contact form.',
      'Responsive across desktop, tablet, and mobile breakpoints, deployed on Vercel with automatic GitHub integration.'
    ],
    keyFeatures: [
      'Dark mode with saved user preference.',
      'Responsive layout for all screen sizes.',
      'Animated project modal with gallery slider.',
      'Scroll-triggered animations and auto-scrolling skill slider.',
      'Contact form with validation and EmailJS delivery.'
    ],
    skills: ['Nuxt.js', 'Vue.js', 'JavaScript', 'SCSS', 'AOS', 'Splide', 'EmailJS', 'Responsive Design', 'Dark Mode UI', 'Vercel'],
    mainImage: '/assets/Images/project/portfolio/home.png',
    images: [
      '/assets/Images/project/portfolio/projects.png',
      '/assets/Images/project/portfolio/skills.png',
      '/assets/Images/project/portfolio/experience.png',
      '/assets/Images/project/portfolio/contact.png',
      '/assets/Images/project/portfolio/full-site.png'
    ],
    liveLink: 'https://www.umairdev.vercel.app/'
  },
  {
    slug: 'nitrox-gaming-community',
    title: 'NITROX - GAMING COMMUNITY',
    subtitle: 'Modern Glassmorphism Design',
    info: 'Built a visually modern web application using glassmorphism UI design.',
    description: [
      'Developed reusable widget-based components and maintained consistent UI architecture across the application.',
      'Implementing modern glassmorphism design and structured layouts.'
    ],
    skills: ['Vue.js', 'JavaScript', 'Tailwind', 'Vuetify', 'Responsive Design', 'Component Architecture'],
    mainImage: '/assets/Images/project/nitrox/nitrox.png',
    images: [
      '/assets/Images/project/nitrox/img5.png',
      '/assets/Images/project/nitrox/img1.png',
      '/assets/Images/project/nitrox/img2.png',
      '/assets/Images/project/nitrox/img3.png',
      '/assets/Images/project/nitrox/img4.png'
    ],
    liveLink: 'https://nitrox-app.traderverse.io/'
  },
  {
    slug: 'easy-sale-system-pos',
    title: 'Easy Sale Software POS',
    subtitle: 'Modern POS & Inventory Management',
    info: 'Developed a high-performance desktop POS software using Python and PyQt5, featuring a robust SQLite backend with WAL optimization and automated cloud backups.',
    description: [
      'Engineered a sophisticated UI with QtWebEngine for dynamic HTML/CSS thermal receipts and utilized ReportLab and PyQtChart for comprehensive business analytics.',
      'Implemented a robust SQLite backend with WAL optimization and automated Google Drive cloud backup synchronization.',
      'Designed for efficiency and reliability to empower local businesses with enterprise-grade tools.'
    ],
    skills: ['Python', 'PyQt5', 'SQLite', 'Google Drive API', 'ReportLab', 'PyQtChart', 'QtWebEngine'],
    mainImage: '/assets/Images/project/salesystem/salesystem.png',
    images: [
      '/assets/Images/project/salesystem/img1.png',
      '/assets/Images/project/salesystem/img2.png',
      '/assets/Images/project/salesystem/img3.png',
      '/assets/Images/project/salesystem/img4.png',
      '/assets/Images/project/salesystem/img5.png',
    ],
    liveLink: 'https://easy-sale-system.vercel.app/'
  },
  {
    slug: 'analytics-trading',
    title: 'Analytics',
    subtitle: 'AI-Enhanced Equities Market Analytics Platform',
    info: 'Built a data-heavy trading analytics dashboard for stock, crypto, and market trend analysis, featuring dynamic charts, multiple data views, and a scalable Vuex-based architecture. The platform gives retail traders access to insights once reserved for professionals.',
    description: [
      'Developed responsive dashboards with dynamic ApexCharts and Highcharts visualizations, supporting multiple data views, filters, and chart-based insights.',
      'Built interfaces for news sentiment analysis (positive, negative, neutral), news clustering and summaries, and Insider Intel for congressional trading activity.',
      'Created customizable KPI widgets (80+) and a market calendar for earnings, dividends, IPOs, and market holidays, all driven by REST API integration.',
      'Structured the app with reusable Quasar and Vue components and Vuex state management, and optimized rendering performance for large datasets.'
    ],
    keyFeatures: [
      'News analytics with sentiment analysis and automatic news clustering.',
      'Insider Intel: congressional trading activity tracking.',
      '80+ customizable KPIs and widgets.',
      'All-in-one stock market calendar and detailed stock reports.',
      'Technical indicators and ML forecasting views with historical data.'
    ],
    skills: ['Vue.js', 'Quasar', 'Vuex', 'JavaScript', 'HTML5', 'CSS3', 'ApexCharts', 'Highcharts', 'REST API Integration', 'Component Architecture', 'Responsive Design', 'Data Visualization', 'Performance Optimization', 'State Management'],
    mainImage: '/assets/Images/project/traderverse/cover.jpg',
    images: [
      '/assets/Images/project/traderverse/img1.png',
      '/assets/Images/project/traderverse/img2.png',
      '/assets/Images/project/traderverse/img3.png',
      '/assets/Images/project/traderverse/img4.png',
    ],
    liveLink: 'https://analytics.traderverse.io/'
  },
  {
    slug: 'easy-consult-ai',
    title: 'EasyConsult.ai',
    subtitle: 'Marketing Website for an AI Consulting & Automation Company',
    info: 'Designed and developed the company website from scratch, presenting AI consulting, automation, and custom AI agent services through a fast, responsive, and accessible interface.',
    description: [
      'Designed the UI and built the full frontend in Vue.js, with a reusable component structure and a consistent visual system.',
      'Used Tailwind CSS with Radix UI and shadcn/ui primitives for accessible, easy-to-maintain interface components.',
      'Integrated Calendly so visitors can book consultations directly from the site.',
      'Added SEO and Open Graph metadata for better search visibility and link previews, and deployed on Vercel.'
    ],
    skills: ['Vue.js', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Responsive Design', 'Calendly Integration', 'SEO', 'Vercel'],
    mainImage: '/assets/Images/project/easyconsult/cover.png',
    images: [
      '/assets/Images/project/easyconsult/img1.png',
      '/assets/Images/project/easyconsult/img2.png',
      '/assets/Images/project/easyconsult/img3.png',
      '/assets/Images/project/easyconsult/img4.png',
    ],
    liveLink: 'https://easy-consult-site.vercel.app/'
  },
  {
    slug: 'elite-consult',
    title: 'Elite Consulting',
    subtitle: 'Consulting Company Website, Designed and Built End to End',
    info: 'A professional consulting website that I conceptualized, sketched, designed, and developed completely on my own, from the first idea to the live product.',
    description: [
      'Created the concept and initial sketches, then turned them into a polished, brand-focused UI design.',
      'Developed the entire frontend with a responsive, reusable component structure.',
      'Handled the full workflow solo: design, development, and deployment on Vercel.'
    ],
    skills: ['UI/UX Design', 'Wireframing', 'Responsive Design', 'Frontend Development', 'Component Architecture', 'Vercel'],
    mainImage: '/assets/Images/project/eliteconsult/cover.jpg',
    images: [
      '/assets/Images/project/eliteconsult/img1.jpg',
      '/assets/Images/project/eliteconsult/img2.jpg',
      '/assets/Images/project/eliteconsult/img3.jpg',
      '/assets/Images/project/eliteconsult/img4.jpg',
      '/assets/Images/project/eliteconsult/img21.jpg',
      '/assets/Images/project/eliteconsult/img5.jpg',
    ],
    liveLink: 'https://elite-consult.vercel.app/'
  },
  {
    slug: 'virtue-finance',
    title: 'Virtue Finance',
    subtitle: 'Blockchain Token Landing Page, Designed and Built End to End',
    info: 'A landing page for a next-generation blockchain token and treasury protocol. I created the concept, designed the UI/UX in Figma, and developed the complete frontend, presenting the token\'s staking stats, treasury model, and protocol revenue in a clear, modern interface.',
    description: [
      'Conceived the concept and designed the full UI/UX in Figma, with a Roman-inspired brand identity, custom illustrations, and a polished dark crypto aesthetic.',
      'Developed the responsive frontend in Next.js and React, translating the Figma designs into pixel-accurate, reusable components.',
      'Built a live-style stats section for Total Staked, Treasury Balance, Total Value Locked, and Current APY, plus a "How it works" flow explaining how bonds, LP fees, and taxes feed the treasury.',
      'Added clear calls to action, including an Enter App button and community links, and deployed the site on Vercel.'
    ],
    keyFeatures: [
      'Token overview and protocol profits sections.',
      'Staking and treasury stats dashboard (TVL, APY, treasury balance).',
      'Step-by-step token treasury explainer.',
      'Enter App call to action and community links.',
      'Fully responsive layout across desktop and mobile.'
    ],
    skills: ['Next.js', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'UI/UX Design', 'Responsive Design', 'Web3 / DeFi UI', 'Vercel'],
    mainImage: '/assets/Images/project/virtue/virtue.png',
    images: [
      '/assets/Images/project/virtu-finance/img1.png',
      '/assets/Images/project/virtue/img2.png',
      '/assets/Images/project/virtue/img3.png',
    ],
    status: 'For Sale',
    liveLink: 'https://virtual-finance-iota.vercel.app/'
  },
];
