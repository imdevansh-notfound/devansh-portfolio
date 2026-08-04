import type { Certificate, Project } from '../types/portfolio';
export const links = { email: 'mailto:devanshtiwari52@gmail.com', github: 'https://github.com/imdevansh-notfound', linkedin: 'https://www.linkedin.com/in/devansh-tiwari11' };
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
  { title: 'Your Full-Stack Project', description: 'A polished space for your first production-ready full-stack application. Replace this copy with the real problem, approach, and outcome.', tags: ['React', 'TypeScript', 'API'], category: 'Web', status: 'Ready to replace' },
  { title: 'Your AI Experiment', description: 'Reserve this card for an AI-focused build: explain the model, data, user value, and what you learned while shipping it.', tags: ['Python', 'AI', 'Research'], category: 'AI', status: 'Ready to replace' },
  { title: 'Your App Concept', description: 'Use this slot for a mobile or app-development project. Add your repository and live link when the project is public.', tags: ['App Development', 'UI/UX'], category: 'Mobile', status: 'Ready to replace' },
];
export const certificates: Certificate[] = [
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
  { title: 'Certificate title', issuer: 'Issuer / platform', year: 'Add year' },
];
