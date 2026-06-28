import { ITimeline } from '@/models/Timeline';
import { ISkill } from '@/models/Skill';
import { IProject } from '@/models/Project';

export interface IProfile {
  fullName: string;
  displayName: string;
  title: string;
  about: string;
  profileSummary: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeUrl: string;
  github: string;
  pixable: string;
  bms: string;
  saviour: string;
  linkedin: string;
  leetcode: string;
  shortIntro: string;
}

export const profile: IProfile = {
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
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/prabhu30-bgm/prabhu30-bgm',
  pixable: "https://github.com/prabhu30-bgm/Pixable-API",
  bms: "https://github.com/prabhu30-bgm/Public-Transport-Management-Platform",
  saviour: "https://github.com/prabhu30-bgm/The_Saviour",
  linkedin: 'https://www.linkedin.com/in/basavaprabhu-kudenatti/',
  leetcode: 'https://leetcode.com/u/5kCp4D1N4Q/',
  shortIntro: 'MERN Portfolio - Basavaprabhu',
};

export const timelineData: ITimeline[] = [
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

export const skillsData: ISkill[] = [
  { id: 'js', name: 'JavaScript', category: 'languages', level: 75, x: 20, y: 12, connections: ['html', 'react', 'node'] },
  { id: 'java', name: 'Java', category: 'languages', level: 78, x: 20, y: 48, connections: ['oops', 'springboot'] },
  { id: 'c', name: 'C', category: 'languages', level: 60, x: 20, y: 66, connections: ['cpp'] },

  { id: 'html', name: 'HTML5', category: 'frontend', level: 82, x: 50, y: 12, connections: ['css'] },
  { id: 'css', name: 'CSS3', category: 'frontend', level: 80, x: 50, y: 28, connections: ['bootstrap', 'responsive'] },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', level: 72, x: 50, y: 44, connections: ['react'] },
  { id: 'react', name: 'React', category: 'frontend', level: 75, x: 50, y: 62, connections: ['node'] },

  { id: 'node', name: 'Node.js', category: 'backend', level: 70, x: 82, y: 18, connections: ['express', 'rest'] },
  { id: 'express', name: 'Express.js', category: 'backend', level: 70, x: 82, y: 38, connections: ['mongodb'] },
  { id: 'mongodb', name: 'MongoDB', category: 'backend', level: 72, x: 82, y: 58, connections: ['mysql'] },
  { id: 'mysql', name: 'MySQL', category: 'backend', level: 78, x: 82, y: 78, connections: ['rest'] },

  { id: 'github', name: 'GitHub', category: 'devops', level: 75, x: 112, y: 18, connections: ['vscode'] },
  { id: 'dsa', name: 'DSA', category: 'devops', level: 65, x: 112, y: 66, connections: ['problem-solving'] },
  { id: 'oops', name: 'OOPS', category: 'devops', level: 75, x: 112, y: 78, connections: ['springboot'] },
  { id: 'springboot', name: 'Springboot', category: 'devops', level: 55, x: 112, y: 88, connections: ['java'] },
  { id: 'leetcode', name: 'LeetCode Practice', category: 'devops', level: 65, x: 112, y: 94, connections: ['dsa'] },
];

export const projectsData: IProject[] = [
  {
    id: 'proj-1',
    title: 'TheSaviour (Ongoing)',
    period: 'Apr 2026 - Present',
    description:
      'Developing a community-based disaster support platform to provide quick assistance during emergencies. Features include user authentication, priority-based help requests, food and medicine support, and emergency assistance tracking.',
    image: '/assets/Saviour.png',
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
    image: '/assets/BMS.png',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
    githubUrl: profile.bms,
    liveUrl: '',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Pixabay Image Gallery',
    period: '',
    description:
      'Developed a MERN-based image gallery application using external API integration. Fetched and displayed images dynamically from the Pixabay API while improving API handling and React component structure.',
    image: '/assets/Pixable.png',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
    githubUrl: profile.pixable,
    liveUrl: '',
    featured: false,
  },
];
