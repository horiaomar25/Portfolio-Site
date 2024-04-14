import edutask from "../assets/edutask.png";
import lendlogicthumbnail from "../assets/ll.png";
import bootcampkitchen from "../assets/bootcampkitchen.png";

const Projects = () => {
  return (
    <>
      <h2 className="text-3xl mb-2 overflow-hidden text-center">Projects</h2>
      <section
        id="projects"
        className=" flex flex-col justify-center item-center w-auto  m-6 lg:flex lg:flex-row lg:justify-between lg:w-auto md:flex md:justify-center md:items-center "
      >
        {/* Card Section */}
        <div className=" rounded-xl w-96  border border-black mb-8 ">
          {" "}
          {/* Added 'z-0' to set lower z-index */}
          <figure>
            <img src={edutask} alt="Thumbnail for EduTask project" />
          </figure>
          <div className="card-body p-5 ">
            <h2 className="card-title">EduTask - Personal Project</h2>
            <p>
              Task Management tool for Teaching Assistants to track their Weekly
              and Daily Tasks in the classroom.
            </p>
            <div className="flex flex-row justify-between">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                width={50}
              />
            </div>
            <div className="card-actions justify-between flex ">
              <a
                href="https://edu-task-horias-projects-dc29575b.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/horiaomar25/edu-task"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="rounded-xl w-96 bg-base-100 mb-8 border border-black">
          <figure>
            <img src={lendlogicthumbnail} alt="Thumbnail for LendLogic" />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title">LendLogic</h2>
            <p>
              Mortgage tool for first time buyer and those looking to remortgage
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                width={50}
              />
            </div>
            <div className="card-actions justify-between flex mt-5">
              <a
                href="https://land-logic-app-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/horiaomar25/Lend-Logic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-xl w-96 bg-base-100 mb-8 border border-black">
          <figure>
            <img src={bootcampkitchen} alt="Thumbnail for BootCamp Kitchen " />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title">BootCamp Kitchen</h2>
            <p>
              Quick 15 minutes meals for bootcampers to make whilst
              participating in the course.
            </p>
            <div className="flex flex-row justify-between">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
                width={50}
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                width={50}
              />
            </div>

            <div className="card-actions justify-between flex mt-8">
              <a
                href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
