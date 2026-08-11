export type EducationEntry = {
  id: string;
  institution: string;
  program: string;
  score: string;
  period: string;
  level: "college" | "junior-college" | "school";
};

export const EDUCATION: EducationEntry[] = [
  {
    id: "sicet",
    institution: "Sri Indu College of Engineering and Technology",
    program: "B.Tech — Artificial Intelligence & Data Science",
    score: "74.8%",
    period: "2022 — May 2026",
    level: "college",
  },
  {
    id: "sri-gayatri",
    institution: "Sri Gayatri Junior College",
    program: "Intermediate — MPC (Math, Physics, Chemistry)",
    score: "89.9%",
    period: "2020 — 2022",
    level: "junior-college",
  },
  {
    id: "dilsukhnagar",
    institution: "Dilsukhnagar Public School",
    program: "Schooling",
    score: "98%",
    period: "Class X",
    level: "school",
  },
];
