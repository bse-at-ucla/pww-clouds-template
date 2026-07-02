/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.
   ───────────────────────────────────────────────────────────────────── */

// ── Who you are ──────────────────────────────────────────────────────
export const PERSON = {
  firstName: 'Your',
  lastName:  'Name',
  fullName:  'Your Name',
  role:      'Software Engineer',
};

// ── Site metadata ─────────────────────────────────────────────────────
export const SITE = {
  url:         'https://yoursite.com',
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a ${PERSON.role} at UCLA.`,
};

// ── Navigation links ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",
  bio:      "I'm a computer science student at UCLA passionate about building software that solves real problems. I love working across the stack, from crafting clean UIs to designing scalable back-ends.",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Get in touch',       href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school:     'University of California, Los Angeles',
    degree:     'B.S. Computer Science',
    minor:      'Statistics',
    gpa:        '3.82',
    graduation: 'June 2026',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Probability & Statistics',
      'Software Engineering',
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company:  'Acme Corporation',
    role:     'Software Engineer Intern',
    location: 'San Francisco, CA',
    start:    'Jun 2025',
    end:      'Aug 2025',
    bullets: [
      'Built a real-time dashboard in React and TypeScript, reducing incident response time by 40%.',
      'Designed and deployed three REST API endpoints serving 50k requests per day.',
      'Collaborated with the design team to ship a redesigned onboarding flow that improved conversion by 18%.',
    ],
    tech: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    company:  'UCLA Engineering',
    role:     'Teaching Assistant — CS 33',
    location: 'Los Angeles, CA',
    start:    'Sep 2024',
    end:      'Dec 2024',
    bullets: [
      'Led weekly discussion sections for 40 students covering systems programming in C.',
      'Held office hours to assist students with debugging and conceptual questions.',
      'Wrote and graded three programming assignments and two midterms.',
    ],
    tech: ['C', 'x86 Assembly', 'Linux'],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name:        'StudySync',
    description: 'A collaborative study-planning app that lets UCLA students share notes, schedule group sessions, and track progress together in real time.',
    tech:        ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github:      'https://github.com/yourusername/studysync',
    live:        'https://studysync.app',
    featured:    true,
  },
  {
    name:        'BruinBot',
    description: 'A Discord bot that surfaces real-time UCLA dining menu data, library room availability, and bus schedules for 2,000+ active users.',
    tech:        ['Node.js', 'Discord.js', 'REST APIs', 'Cron'],
    github:      'https://github.com/yourusername/bruinbot',
    featured:    true,
  },
  {
    name:        'PocketPortfolio',
    description: 'A mobile-first stock portfolio tracker with custom alerts and a clean chart-based UI, built during a 24-hour hackathon.',
    tech:        ['React Native', 'Expo', 'Recharts', 'Firebase'],
    github:      'https://github.com/yourusername/pocketportfolio',
    live:        'https://pocketportfolio.dev',
    featured:    false,
  },
  {
    name:        'AutoGrade',
    description: 'A command-line grading tool that runs student Python submissions against test suites in isolated Docker containers and produces structured reports.',
    tech:        ['Python', 'Docker', 'Bash', 'SQLite'],
    github:      'https://github.com/yourusername/autograde',
    featured:    false,
  },
];

// ── Social links ──────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/yourusername'            },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername'       },
  { label: 'Email',    href: 'mailto:you@example.com'                     },
];

// ── Contact ───────────────────────────────────────────────────────────
export const CONTACT = {
  email:   'you@example.com',
  blurb:   "I'm actively looking for internships and new-grad roles starting 2026. If you're working on something interesting or just want to chat, my inbox is always open.",
  links: [
    { label: 'Email',    href: 'mailto:you@example.com',                    display: 'you@example.com'         },
    { label: 'GitHub',   href: 'https://github.com/yourusername',           display: 'github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername',      display: 'linkedin.com/in/yourusername' },
    { label: 'Resume',   href: '/resume.pdf',                               display: 'Download PDF'            },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "UCLA Computer Science student building things for the web.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: 'https://github.com/yourusername'       },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername'  },
        { label: 'Email',    href: 'mailto:you@example.com'                },
        { label: 'Resume',   href: '/resume.pdf'                           },
      ],
    },
  ],
};
