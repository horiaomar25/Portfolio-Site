const Skills = () => {
  // Define an array of technologies
  const technologies = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "PostgreSQL" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Bootstrap" },
    { name: "Git" },
    { name: "Jest - Unit Testing" },
    { name: "PlayWright - E2E Testing" },
  ];

  // Render each technology dynamically
  const renderTechnologies = () => {
    return technologies.map((tech, index) => (
      <div key={index} className="mb-4 md:mb-0 md:w-1/2 lg:w-1/3 flex flex-col items-center w-full">
        <p className="text-lg font-bold">{tech.name}</p>
        <div className="flex items-center">
          <span className="text--500 mr-1">&#10003;</span>
          <p className="text-gray-500 text-xs">Proficient</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <h2 className="text-center text-4xl overflow-hidden">Tech Stack</h2>
      <section className="flex justify-center items-center border border-black m-8 rounded-lg" id="skills">
        <div className="w-full flex justify-center items-center md:flex-col lg:w-2/3 p-6">
          <div className="flex flex-wrap justify-center">
            {renderTechnologies()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;


  
