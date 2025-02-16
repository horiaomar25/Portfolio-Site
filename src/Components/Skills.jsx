const Skills = () => {

   // Define an array of technologies with their respective icons (image URLs)
   const technologies = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg", alt: "HTML5" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg", alt: "CSS3" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg", alt: "Tailwind CSS" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", alt: "Next.js" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "Bootstrap" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg", alt: "Git" },
    { name: "Jest - Unit Testing", icon: "https://jestjs.io/img/jest.svg", alt: "Jest - Unit Testing" },
    { name: "PlayWright - E2E Testing", icon: "https://playwright.dev/img/playwright-logo.svg", alt: "PlayWright - E2E Testing" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg", alt: "Docker" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg", alt: "Java" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg", alt: "Spring Boot" },
  ];

  // Render each technology dynamically
  const renderTechnologies = () => {
    return technologies.map((tech, index) => (
      <div key={index} className="mb-4 md:mb-0 md:w-1/2 lg:w-full flex flex-col items-center">
        <img src={tech.icon} alt={tech.alt} className="h-16 mb-2" />
        <p className="text-lg font-bold">{tech.name}</p>
        <div className="flex items-center">
          <span className="text-green-500 mr-1">&#10003;</span>
          <p className="text-gray-500 text-xs">Proficient</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold mb-8 overflow-hidden">Tech Stack</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {renderTechnologies()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;


  
