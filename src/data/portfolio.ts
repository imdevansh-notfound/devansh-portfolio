import type { Certificate, Project } from '../types/portfolio';
export const links = { email: 'mailto:devanshtiwari1108@gmail.com', github: 'https://github.com/imdevansh-notfound', linkedin: 'https://www.linkedin.com/in/devanshtiwari11' };
export const skillGroups = [
  ['Programming', ['Python', 'C++', 'Data Structures', 'Algorithms']],
  ['Frontend', ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']],
  ['Backend', ['Node.js', 'REST APIs', 'Server-side fundamentals']],
  ['Database', ['SQL', 'Database fundamentals']],
  ['AI', ['Artificial Intelligence', 'Machine learning fundamentals']],
  ['Developer Tools', ['Git', 'GitHub', 'VS Code', 'Vite']],
  ['Creative Tools', ['Premiere Pro', 'After Effects', 'Photoshop', 'CapCut']],
] as const;
export const projects: Project[] = [
  { title: 'Full-Stack Project', description: 'Working on it.', tags: ['React', 'TypeScript', 'API'], category: 'Web', status: 'Ready to replace' },
  { title: 'AI Experiment', description: 'Working on it.', tags: ['Python', 'AI', 'Research'], category: 'AI', status: 'Ready to replace' },
  { title: 'App Concept', description: 'Working on it.', tags: ['App Development', 'UI/UX'], category: 'Mobile', status: 'Ready to replace' },
];
export const certificates: Certificate[] = [
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
];
