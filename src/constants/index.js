import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ossa,
  floppa,
  bubbleDefi,
  navcon,
  kimi,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'skill',
    title: 'Skill',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-End Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Headless CMS Developer',
    icon: backend,
  },
  {
    title: 'Full Stack ',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Free Code Bangladesh',
    icon: starbucks,
    iconBg: '#FFFFFF',
    date: 'March 2021 - Nov 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Eagle It BD',
    icon: tesla,
    iconBg: '#000000',
    date: 'Jan 2022 - March 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Front-End Web Developer',
    company_name: 'TS BANGLADESH.',
    icon: shopify,
    iconBg: '#F1EFE7',
    date: 'April 2022 - Running',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Quality work and excellent communicator. I will definitely be back.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/tarifalhasan/',
  },
  {
    name: 'OSSA DASHBOARD',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'NEXT.JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chart.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ossa,
    source_code_link: 'https://github.com/tarifalhasan/curolabs',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/tarifalhasan/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/tarifalhasan/NEXTUS-NXET.JS',
  },
  {
    name: 'Floppa Presel',
    description: 'Web3 Blockchain Develpment.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: floppa,
    source_code_link: 'https://github.com/tarifalhasan/NEXTUS-NXET.JS',
  },
  {
    name: 'Bubble Defi',
    description:
      'With delegated community governance and stake-based earnings, you can now vote on proposals and earn passive income from the protocols generated revenue.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
      {
        name: 'Responsive',
        color: 'green-text-gradien',
      },
    ],
    image: bubbleDefi,
    source_code_link: 'https://github.com/tarifalhasan/BUbble-Defi',
  },
  {
    name: 'Persnal Buseness Website',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.,',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
      {
        name: 'Responsive',
        color: 'green-text-gradien',
      },
    ],
    image: navcon,
    source_code_link: 'https://github.com/tarifalhasan/navcon-ai',
  },
  {
    name: 'Kimi',
    description:
      'The KiMi Token ecosystem is built in such a way that, regardless of the dynamics of Bitcoin, we can always place new hardware.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'web3',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
      {
        name: 'Responsive',
        color: 'green-text-gradien',
      },
    ],
    image: kimi,
    source_code_link: 'https://github.com/tarifalhasan/navcon-ai',
  },
];

export { services, technologies, experiences, testimonials, projects };
