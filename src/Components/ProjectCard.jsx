import edutask from "../assets/edutask.png";
import lendlogicthumbnail from "../assets/ll.png";
import bootcampkitchen from "../assets/bootcampkitchen.png";
import blog from "../assets/blog.png";

const Projects = () => {
  return (
    <>
      <h2 className="text-3xl mb-6 text-center">Projects</h2>
      <section id="projects" className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* EduTask Card */}
          <div className="rounded-xl border border-black overflow-hidden">
            <figure>
              <img src={edutask} alt="Thumbnail for EduTask project" />
            </figure>
            <div className="p-5">
              <h2 className="card-title text-xl font-semibold mb-2">EduTask - Personal Project</h2>
              <p className="mb-4">
                Task Management tool for Teaching Assistants to track their Weekly and Daily Tasks in the classroom.
              </p>
              <div className="flex flex-row justify-between mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width={50} alt="Next.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" width={50} alt="Material-UI" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width={50} alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" width={50} alt="Playwright" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width={50} alt="Express.js" />
              </div>
              <div className="flex justify-between">
                <a href="https://edu-task-horias-projects-dc29575b.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Demo</button>
                </a>
                <a href="https://github.com/horiaomar25/edu-task" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Repo</button>
                </a>
              </div>
            </div>
          </div>

          {/* LendLogic Card */}
          <div className="rounded-xl border border-black overflow-hidden">
            <figure>
              <img src={lendlogicthumbnail} alt="Thumbnail for LendLogic" />
            </figure>
            <div className="p-5">
              <h2 className="card-title text-xl font-semibold mb-2">LendLogic</h2>
              <p className="mb-4">Mortgage tool for first-time buyers and those looking to remortgage</p>
              <div className="flex flex-row justify-between mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width={50} alt="Next.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" width={50} alt="Tailwind CSS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width={50} alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width={50} alt="Express.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" width={50} alt="Jest" />
              </div>
              <div className="flex justify-between">
                <a href="https://land-logic-app-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Demo</button>
                </a>
                <a href="https://github.com/horiaomar25/Lend-Logic" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Repo</button>
                </a>
              </div>
            </div>
          </div>

          {/* BootCamp Kitchen Card */}
          <div className="rounded-xl border border-black overflow-hidden">
            <figure>
              <img src={bootcampkitchen} alt="Thumbnail for BootCamp Kitchen" />
            </figure>
            <div className="p-5">
              <h2 className="card-title text-xl font-semibold mb-2">BootCamp Kitchen</h2>
              <p className="mb-4">Quick 15-minute meals for bootcampers to make while participating in the course.</p>
              <div className="flex flex-row justify-between mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width={50} alt="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width={50} alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width={50} alt="Bootstrap" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" width={50} alt="Playwright" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width={50} alt="Express.js" />
              </div>
              <div className="flex justify-between">
                <a href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Demo</button>
                </a>
                <a href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Repo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Duplicate BootCamp Kitchen Card */}
          <div className="rounded-xl border border-black overflow-hidden">
            <figure>
              <img src={blog} alt="Thumbnail for BootCamp Kitchen"   />
            </figure>
            <div className="p-5">
              <h2 className="card-title text-xl font-semibold mb-2">#100DaysOfCode  Blog</h2>
              <p className="mb-4">A blog site about the  #100DaysOfCode challenge.</p>
              <div className="flex flex-row justify-between mb-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width={50} alt="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" 
                 width={90}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width={50} alt="Bootstrap" />
             
                
              </div>
              <div className="flex justify-between">
                <a href="https://www.youtube.com/watch?v=MWboqTa30a4" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Demo</button>
                </a>
                <a href="https://github.com/horiaomar25/Coding-Blog" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary bg-turquoise w-40">Repo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

