export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "house-rental",
    number: "01",
    title: "House Rental Management System",
    description:
      "A desktop-based rental management application designed to manage properties, owners, tenants, rental agreements, and payments using object-oriented programming principles.",
    technologies: ["Java", "OOP", "Swing", "MySQL", "JDBC"],
    image: "/images/project-house-rental.png",
    github: "#",
  },

  {
    id: "smartspace",
    number: "02",
    title: "SmartSpace",
    description:
      "A modern interior design platform concept that allows users to explore designs, manage spaces, and create personalized room concepts through an interactive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/images/project-smartspace.png",
    github: "#",
    demo: "#",
  },

  {
    id: "student-performance",
    number: "03",
    title: "Student Performance Prediction",
    description:
      "A data-driven project exploring student performance patterns and predicting outcomes using structured educational data.",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
    image: "/images/project-performance.png",
    github: "#",
  },

  {
    id: "qa-automation",
    number: "04",
    title: "QA Automation Project",
    description:
      "An automated testing project designed to demonstrate UI testing, test organization, assertions, and automated regression workflows.",
    technologies: ["Selenium", "Java", "TestNG"],
    image: "/images/project-qa.png",
    github: "#",
  },
];