const OngoingProjects = () => {
    return (
      <>
        <h2 className="text-3xl mb-2 overflow-hidden text-center">
          Currently Working On
        </h2>
  
        <section className="flex flex-col justify-center items-center w-full p-8 lg:flex-row lg:justify-between lg:w-auto md:flex md:justify-center md:items-center">
          {/* Card 1 */}
          <div className="rounded-xl w-full lg:w-96 border border-black mb-8 lg:mb-0 lg:mr-8">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Historical Figures</h2>
              <p>Facts about History figures and alongside a fun quiz!</p>
              <div className="flex flex-row justify-between">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                  width={50}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                  width={50}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  width={50}
                />
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="rounded-xl  lg:w-96 border border-black mb-8 lg:mb-0 w-full ">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">The Meal App</h2>
              <p>
                Recipes from the TheMealDB API and Shopping List
              </p>
              <div className="flex flex-row justify-between">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                  width={50}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
                  width={50}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
                  width={50}
                />
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="rounded-xl w-full lg:w-96 border border-black">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">FlashCards</h2>
              <p>Taking time to practise more of TypeScript!</p>
              <div className="flex flex-row justify-evenly items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                  width={50}
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  width={50}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default OngoingProjects;
  