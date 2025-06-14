import AIResumeBuilder from "../assets/projects/AIResumeBuilder.webp";
import toDo from "../assets/projects/toDo.webp";
import npm from "../assets/projects/npm.webp";

export const projectsList = [
  {
    name: "AI Resume Builder",
    desc: "A full-featured AI-powered resume builder that helps users create professional resumes with smart content suggestions, theme customization, and export options.",
    imgsrc: AIResumeBuilder,
    features: [
      "AI-powered text suggestions",
      "Section-wise editor: intro, contact, address, experience, education, and projects",
      "Resume preview and live updates",
      "Theme customization & live preview",
      "Export as PDF",
      "User authentication with Clerk",
      "Responsive & modern UI"
    ],
    stacks: ["React", "Tailwind CSS", "ShadCN UI", "Google Gemini API", "Strapi CMS", "Clerk"],
    github: "https://github.com/Mayanksaini1234/Resume-AI_Resume-Builder/",
    link: "https://airesumebuilder.zenblazemedia.com/",
  },
  {
    name: " To-Do App",
    desc: "A clean and elegant full-stack [MERN Stack] To-Do app to manage daily tasks, track progress, and enhance productivity with a beautiful UI.",
    imgsrc: toDo,
    features: [
      "Add, edit, delete, and complete tasks",
      "User login & JWT authentication",
      "MongoDB-based persistent storage",
      "Real-time UI updates",
      "Responsive design"
    ],
    stacks: ["React", "TailwindCSS", "React Router DOM", "Node.js", "Express", "MongoDB", "Mongoose", "REST API", "JWT"],
    github: "https://github.com/Mayanksaini1234/MERN_TO_DO/",
    link: "https://mern-to-do-mu.vercel.app/",
  },
  {
    name: "React Toast Notification-mayank-ui",
    desc: "A lightweight and customizable toast notification library built with React and JavaScript, published on NPM for easy integration in any project with RollUp.",
    imgsrc: npm,
    features: [
      "Customizable toast types",
      "Easy plug-and-play setup",
      "Built with Rollup.js",
      "Minimal & responsive UI"
    ],
    stacks: ["React", "JavaScript", "Rollup.js", "NPM" , "CSS"], 
    github: "https://github.com/Mayanksaini1234/NPM_project_Toast_mayank-ui/",
    link: "https://www.npmjs.com/package/mayank-ui/",
  },
];
