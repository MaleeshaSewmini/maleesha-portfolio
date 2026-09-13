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
    image: "images",
    github: "https://github.com/MaleeshaSewmini/House-Rental-Management-System.git",
  },

  {
    id: "smartspace",
    number: "02",
    title: "SmartSpace",
    description:
      "A modern interior design platform concept that allows users to explore designs, manage spaces, and create personalized room concepts through an interactive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "images",
    github: "https://github.com/MaleeshaSewmini/interior-web-app.git",
    demo: "#",
  },

  {
    id: "student-performance",
    number: "03",
    title: "Student Performance Prediction",
    description:
      "A data-driven project exploring student performance patterns and predicting outcomes using structured educational data.",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
    image: "images",
    github: "#",
  },

  {
    id: "Hand Gesture Recognition Project",
    number: "04",
    title: "Hand Gesture Recognition Project",
    description:
      "A real-time hand gesture recognition system using MediaPipe and OpenCV to detect hand landmarks and classify common gestures through webcam input.",
    technologies: ["MediaPipe", "OpenCV", "Python"],
    image: "images",
    github: 
    "https://github.com/MaleeshaSewmini/Hand-Gesture-Recognition-System.git",
  },
];