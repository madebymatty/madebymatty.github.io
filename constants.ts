import { Job, SkillCategory, Achievement, SpeakingEngagement, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Speaking', href: '#speaking' },
];

export const PROFILE = {
  name: 'Matty Woods',
  role: 'Senior Developer & Founder',
  email: 'matt@codingmonsters.com',
  phone: '+44 07745587848',
  linkedin: 'https://www.linkedin.com/in/mattywoods/',
  location: 'Vietnam / Da Nang and United Kingdom / London',
  summary: "Innovative developer and founder with over two decades of experience delivering web and mobile solutions for global brands, startups, and educational institutions. Skilled across the full stack with expertise in HTML, CSS, JavaScript, React, React Native, PHP, Node.js, and modern frameworks. Proven leader in building and managing development teams. Recognised for advancing digital accessibility, leading UAL’s React-based design system, and implementing automated WCAG compliance processes. Experienced in AI development, including working with large language models, creating and training Python-based models, and integrating practical AI solutions into real products."
};

export const EXPERIENCE: Job[] = [
  {
    id: 'coding-monsters',
    company: 'Coding Monsters',
    role: 'Founder / Developer',
    period: 'Oct 2023 - Present',
    location: 'Vietnam / Da Nang',
    description: [
      'Founded and grew a digital agency from a coding school for children aged 8–18 to a full development team of up to 12 employees.',
      'Delivered custom development projects, including mobile app builds for iOS and Android.',
      'Presented at web agencies in Vietnam on semantic coding practices and web accessibility.',
      'Conducted client accessibility audits and testing to ensure websites met WCAG standards.'
    ]
  },
  {
    id: 'edge-labs',
    company: 'Edge Labs',
    role: 'Software Developer',
    period: 'Feb 2024 - June 2025',
    location: 'UK / London - Vietnam / Da Nang',
    description: [
      'Leading development on a number of client projects, writing technical documentation and architecture diagrams.',
      'Building frontend websites and backend dashboards in ReactJS / NextJS / NestJS (API) / Tailwind CSS.',
      'Developing project on the Hedera blockchain.',
      'Maintaining Expo, React Native and Swift mobile applications (includes YEO Messaging app).'
    ]
  },
  {
    id: 'strawberry',
    company: 'Strawberry',
    role: 'Freelance Developer',
    period: 'Nov 2023 - Dec 2023',
    location: 'London / UK',
    description: [
      'Developing and maintaining Shopify systems (shop.tottenhamhotspur.com).',
      'Front end development using NextJS and Tailwind.'
    ]
  },
  {
    id: 'ey',
    company: 'EY (Ernst & Young)',
    role: 'Senior Consultant - Developer',
    period: 'Sep 2021 - Oct 2023',
    location: 'London',
    description: [
      'Lead front-end web development and digital learning projects using React.',
      'Innovated and identified tools and technologies to enhance UX and UI in digital learning solutions.',
      'Established global development standards and contribute to web accessibility standards, with automated testing.',
      'Managed vendor onboarding, design approach definition, and QA processes.'
    ]
  },
  {
    id: 'ual',
    company: 'University of the Arts London',
    role: 'Digital Development Manager | Web Developer',
    period: 'Nov 2017 - Sep 2021',
    location: 'London',
    description: [
      'Managed a development team of 5-6 developers.',
      'Led technical integration projects within the UAL website.',
      'Developed templates and functionality using Squiz Matrix, CraftCMS and WordPress.',
      'Created a React-based pattern library/design system for UAL.',
      'Ensured code quality through CI, TDD, and BDD testing methodologies.'
    ]
  },
  {
    id: 'success-at-school',
    company: 'Success at School',
    role: 'Technical Lead',
    period: 'Sep 2016 - Nov 2017',
    location: 'London',
    description: [
      'Managed tech development, tech support, and project cycles.',
      'Utilised PHP framework Symfony for development.',
      'Oversaw server setup and frontend programming.'
    ]
  }
];

export const PREVIOUS_ROLES = [
  'Meili Agency (Self-employed): Consultant',
  'Eye Web Solutions: Head of Development',
  'Strawberry: Senior Web Developer',
  'Streamline Media: Studio Manager',
  'Humberside Police: Administrator/Data Input',
  'British Armed Forces: Infantry Soldier'
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Front-End',
    items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'React', 'React Native (Expo)', 'jQuery', 'Tailwind', 'NextJS']
  },
  {
    category: 'Back-End',
    items: ['PHP', 'MySQL', 'Postgres', 'Node.js', 'NestJS', 'API Integrations']
  },
  {
    category: 'Dev Ops & Tools',
    items: ['Webpack', 'StorybookJS', 'CypressJS', 'Git', 'CI/CD', 'Docker']
  },
  {
    category: 'CMS',
    items: ['WordPress', 'CraftCMS', 'Matrix', 'ExpressionEngine', 'Laravel', 'Symfony2']
  },
  {
    category: 'Cloud',
    items: ['AWS (S3, Lambda, API Gateway)', 'Shopify', 'BigCommerce']
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe Photoshop', 'Storyline', 'Evolve', 'Branding', 'Typography', 'Illustration', 'UI/UX', 'Wireframes', 'Prototyping']
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'LLMs (GPT, Claude, Gemini)',
      'OpenAI API',
      'Python AI/ML Development',
      'Model Training & Fine-tuning',
      'Computer Vision',
      'Vector Databases',
      'AI Video Generation',
      'AI Audio Processing',
      'Prompt Engineering',
      'AI Integration'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Coding Monsters Vietnam',
    description: 'Founded a coding school in Vietnam dedicated to teaching programming skills to underprivileged children, providing them with valuable technical skills and opportunities for a better future through technology education.',
    link: 'https://www.codingmonsters.com'
  },
  {
    title: 'UAL Design System',
    description: 'Led the development of the UAL (University of the Arts London) design system and pattern library.',
    link: 'https://www.figma.com/@ual'
  },
  {
    title: 'New UAL Website',
    description: 'Spearheaded the development of the new UAL website, prioritizing accessibility.',
    link: 'https://www.arts.ac.uk/'
  },
  {
    title: 'Mentorship',
    description: 'Successfully mentored an underrepresented individual seeking a career change, resulting in their attainment of a development position.'
  },
  {
    title: 'Automated Accessibility',
    description: 'Implemented an automated accessibility development process at UAL and replicated this process at EY.'
  },
  {
    title: 'React eLearning Engine',
    description: 'Created a component-based React project used in over 50 eLearning courses at EY, replacing off-the-shelf authoring tools.'
  }
];

export const SPEAKING: SpeakingEngagement[] = [
  {
    event: 'TechForAll Conference',
    location: 'London, UK',
    topic: 'Embedding accessibility testing into agile development',
    link: 'https://www.arts.ac.uk/students/assistive-technology/tech-for-all'
  },
  {
    event: 'Frontend London',
    location: 'London, UK',
    topic: 'Presentation on modern frontend practices'
  },
  {
    event: 'TechSoft',
    location: 'Da Nang, Vietnam',
    topic: 'Implementing Cross-Platform Facial Recognition with TensorFlowJS and Node',
    year: 2024
  },
  {
    event: 'SpaceA',
    location: 'Da Nang, Vietnam',
    topic: 'Web Accessibility'
  },
  {
    event: 'TechSoft',
    location: 'Da Nang, Vietnam',
    topic: 'Embedding accessibility testing into agile development',
    year: 2023
  }
];
