const ProgrammingLang = () => {
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
      <div key={index} className="mr-4 flex flex-col items-center">
        <p className="text-xl font-bold">{tech.name}</p>
        <div className="flex items-center">
          <span className="text-green-500 mr-1">&#10003;</span>
          <p className="text-gray-500 text-xs">Proficient</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="flex flex-row">
      <div className="border w-full m-8 h-96 rounded-xl flex flex-col p-5 justify-start items-start">
        <div className="grid grid-cols-3 gap-4 w-full">
          {renderTechnologies()}
        </div>
      </div>

      
    </section>
  );
};

export default ProgrammingLang;

