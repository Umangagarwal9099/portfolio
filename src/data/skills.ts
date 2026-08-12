export type SkillGroup = {
  id: string;
  label: string;
  description: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces people actually use, across web and mobile.",
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js",
      "React Native", "Tailwind CSS", "Material UI",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs and services that stay up.",
    skills: ["Go / Golang", "Node.js", "REST APIs", "SQL"],
  },
  {
    id: "product",
    label: "Product & Development",
    description: "Turning a spec into something shippable.",
    skills: [
      "Full-Stack Development", "API Integration", "UI/UX Implementation",
      "Responsive Design", "Mobile Development",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Deployment",
    description: "Getting it into production, and keeping it there.",
    skills: [
      "AWS", "Google Cloud Run", "Docker", "GitLab CI/CD", "GitHub Actions", "Linux",
      "Production Release Management",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "The daily toolkit.",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Figma"],
  },
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Continuous Learning",
] as const;

/**
 * Maps a canonical skill name to the substrings that would appear in a
 * project's `stack` array — used to derive real "used in" links instead of
 * hand-maintaining a second, driftable mapping.
 */
export const SKILL_ALIASES: Record<string, string[]> = {
  "React.js": ["React.js"],
  "Next.js": ["Next.js"],
  "React Native": ["React Native"],
  "Tailwind CSS": ["Tailwind CSS"],
  "Material UI": ["Material UI"],
  "Go / Golang": ["Go"],
  "Node.js": ["Node.js"],
  SQL: ["PostgreSQL"],
  "REST APIs": ["REST APIs", "REST/API Integration"],
  AWS: ["AWS"],
  "Google Cloud Run": ["Google Cloud Run"],
  Docker: ["Docker"],
  "GitLab CI/CD": ["GitLab CI/CD"],
  "GitHub Actions": ["GitHub Actions"],
  Linux: ["Linux"],
  "Production Release Management": ["Production Release Management"],
  GitHub: ["GitHub"],
  GitLab: ["GitLab"],
  "VS Code": ["VS Code"],
  Postman: ["Postman"],
  Figma: ["Figma"],
};
