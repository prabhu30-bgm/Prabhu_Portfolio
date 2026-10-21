// Portfolio Data & Constants

const profile = {
  fullName: 'Basavaprabhu Kudenatti',
  displayName: 'Basavaprabhu S K',
  title: 'Full Stack MERN Developer',
  about:
    'I am an MCA student at BMS Institute of Technology & Management with a strong interest in Java Development, Database Management, and Full Stack Web Development. I enjoy building projects that solve real-world problems and improve the user experience. My current technical skills include Java, MySQL, MongoDB, JavaScript, React, HTML, CSS, and basic MERN Stack development. I have worked on projects such as the Bus Management System, Pixabay Image Gallery, and TheSaviour, an ongoing community-based disaster support platform. Apart from technical development, I have also taken on leadership responsibilities during my BCA by organizing NeoCodex, a coding event, and contributing as an organizer for multiple college events. Currently, I am improving my problem-solving skills through LeetCode and strengthening my understanding of DSA, databases, and backend development. I am open to internship and full-time opportunities where I can learn, contribute, and grow as a software developer.',
  profileSummary:
    'I am improving my problem-solving skills through LeetCode and strengthening my understanding of DSA, databases, and backend development.',
  location: 'Bengaluru, Karnataka, India',
  address: 'Bangalore, Karnataka',
  email: 'basavaprabhukudenatti@gmail.com',
  phone: '+91 9972920779',
  phoneHref: 'tel:+919972920779',
  resumeUrl: './assets/resume.pdf',
  github: 'https://github.com/prabhu30-bgm/',
  pixable: 'https://github.com/prabhu30-bgm/Pixable-API',
  bms: 'https://github.com/prabhu30-bgm/Public-Transport-Management-Platform',
  saviour: 'https://github.com/prabhu30-bgm/The_Saviour',
  linkedin: 'https://www.linkedin.com/in/basavaprabhu-kudenatti/',
  leetcode: 'https://leetcode.com/u/5kCp4D1N4Q/',
  shortIntro: 'MERN Portfolio - Basavaprabhu',
};

const strengths = [
  { name: 'SOFTWARE DEVELOPER', value: '90%' },
  { name: 'FULL STACK DEVELOPER', value: '80%' },
  { name: 'AI ENTHUSIAST', value: '92%' },
  { name: 'TECH EXPLORER', value: '85%' },
];

const timelineData = [
  {
    id: 'internship-1',
    type: 'experience',
    title: 'MERN Full Stack Developer Intern',
    subtitle: 'Internship',
    organization: 'SoftMust Pvt Ltd',
    period: '1 Oct 2024 - 30 Oct 2024',
    description: ['Worked as a MERN full stack developer intern.'],
  },
  {
    id: 'cert-2',
    type: 'experience',
    title: 'SQL Certificate',
    subtitle: 'Certification',
    organization: 'SQL Certificate',
    period: 'Feb 2025',
    description: ['Certificate: SQL CERTIFICATE'],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Master of Computer Applications',
    subtitle: 'POST GRADUATION',
    organization: 'BMS Institute of Technology and Management, Bengaluru',
    period: 'Nov 2025 - May 2027',
    description: [
      'University: VTU',
      'Location: Bengaluru',
      'CGPA: 7.30 (1st semester)',
    ],
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Bachelor of Computer Applications',
    subtitle: 'GRADUATION',
    organization: 'Govindram Science College, Belagavi',
    period: 'Aug 2022 - June 2025',
    description: [
      'University: Rani Channamma University, Belagavi',
      'Location: Belagavi',
      'CGPA: 7.50',
    ],
  },
  {
    id: 'edu-3',
    type: 'education',
    title: 'PUC',
    subtitle: 'Karnataka State Board',
    organization: 'SSCA GOVT COLLEGE, K K KOPP',
    period: 'Aug 2021 - April 2022',
    description: ['Percentage: 66.66'],
  },
  {
    id: 'edu-4',
    type: 'education',
    title: 'SSLC',
    subtitle: 'Karnataka Govt',
    organization: 'Karnataka Public School, Hire-Bagewadi',
    period: 'June 2019 - March 2020',
    description: ['School education completed.'],
  },
];

const techStackData = [
  // Programming
  {
    id: 'javascript',
    name: 'Javascript',
    category: 'programming',
    description: 'Web development, core scripting',
    icon: 'js',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    description: 'Core OOP, enterprise development',
    icon: 'java',
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'programming',
    description: 'Systems programming, memory management',
    icon: 'cpp',
  },

  // Web Development
  {
    id: 'react',
    name: 'React',
    category: 'web_dev',
    description: 'Frontend library, UI components',
    icon: 'react',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'web_dev',
    description: 'Backend runtime, REST APIs',
    icon: 'node',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'web_dev',
    description: 'Web framework, middleware & routing',
    icon: 'express',
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'web_dev',
    description: 'Java enterprise backend framework',
    icon: 'springboot',
  },
  {
    id: 'html5',
    name: 'Html5',
    category: 'web_dev',
    description: 'Web layouts & semantic markup',
    icon: 'html5',
  },
  {
    id: 'css3',
    name: 'Css3',
    category: 'web_dev',
    description: 'Web styling, responsive design',
    icon: 'css3',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'web_dev',
    description: 'Responsive UI components & grid',
    icon: 'bootstrap',
  },

  // Tools
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'tools',
    description: 'NoSQL database, document store',
    icon: 'mongodb',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'tools',
    description: 'Relational database, SQL queries',
    icon: 'mysql',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    description: 'Version control, Git repository workflows',
    icon: 'github',
  },

  // Concepts
  {
    id: 'dsa',
    name: 'DSA & Algorithms',
    category: 'concepts',
    description: 'Problem solving, logic & complexity',
    icon: 'dsa',
  },
];

const categoryTabs = [
  { id: 'all', label: 'All', iconName: 'zap' },
  { id: 'programming', label: 'Programming', iconName: 'code2' },
  { id: 'web_dev', label: 'Web Development', iconName: 'laptop' },
  { id: 'tools', label: 'Tools', iconName: 'wrench' },
  { id: 'concepts', label: 'Concepts', iconName: 'lightbulb' },
];

const projectsData = [
  {
    id: 'proj-1',
    title: 'TheSaviour',
    period: 'Apr 2026 - July 2026',
    description:
      'Developing a community-based disaster support platform to provide quick assistance during emergencies. Features include user authentication, priority-based help requests, food and medicine support, and emergency assistance tracking.',
    image: './assets/Saviour.png',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
    githubUrl: profile.saviour,
    liveUrl: '',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Bus Management System',
    period: '',
    description:
      'Developed a web-based system to help students access bus-related information efficiently. Built responsive frontend interfaces, login system, dashboard, and admin management features as a Frontend Developer.',
    image: './assets/BMS.png',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
    githubUrl: profile.bms,
    liveUrl: '',
    featured: true,
  },
];
