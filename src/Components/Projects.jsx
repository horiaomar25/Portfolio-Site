import { Link } from "react-router-dom";
import edutask from "../assets/edutaskshot.png";
import lendlogic from "../assets/lendlogic.png";
import bootcampkitchen from "../assets/bootcampkitchen.png";

const NewProjects = () => {
  return (
    <section  id="projects" className="flex flex-col items-center px-6 py-4 lg:m-10 md:px-30 md:py-6 mx-2 my-4">
      <h2 className="text-5xl text-center font-extrabold p-3 ml-6">Projects</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-1">
        {/** Card 1 - Lendlogic */}
        <article className="flex flex-col justify-start items-start">
          <div className="mockup-browser-toolbar"></div>
          <div className="bg-base-200 flex justify-center px-4 pt-16">
            <img
              src={lendlogic}
              className="w-full border border-black rounded-lg"
              alt="Lend Logic"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-3xl overflow-hidden mt-4 ml-5 font-extrabold">
              Lend Logic
            </h3>
            <Link to="/lendlogic" className="ml-auto mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 hover:bg-turquoise hover:rounded-lg"
                viewBox="0 0 32 32"
              >
                <g data-name="13-Arrow Up">
                  <path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z" />
                  <path d="M24 7H14v2h7.59L7.29 23.29 8.7 24.7 23 10.41V18h2V8a1 1 0 0 0-1-1z" />
                </g>
              </svg>
            </Link>
          </div>

          <p className="ml-5 text-xl mt-2">
            Mortgage tool for first time buyer and those looking to remortgage.
          </p>

          <div className="flex flex-row my-4 ml-5">
            <a href="https://github.com/MartiZu/LendLogic-app">
              <img
                className="w-10 mr-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Github Icon"
              />
            </a>
            <a href="https://land-logic-app-frontend.vercel.app/" target="blank">
              <img
                className="w-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_-KPutrb-_HGu1LeZF3gnY1vUIZ3bmnJyA&usqp=CAU"
                alt="Website Icon"
              />
            </a>
          </div>
        </article>

        {/** Card 2 - EduTask */}
        <article className="flex flex-col justify-start items-start">
          <div className="mockup-browser-toolbar"></div>
          <div className="bg-base-200 flex justify-center px-4 pt-16">
            <img
              src={edutask}
              className="w-full border border-black rounded-lg"
              alt="EduTask"
            />
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-3xl overflow-hidden mt-4 ml-5 font-extrabold">
              EduTask
            </h3>
            
            <Link to="/edutask" className="ml-auto mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 hover:bg-turquoise hover:rounded-lg"
                viewBox="0 0 32 32"
              >
                <g data-name="13-Arrow Up">
                  <path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z" />
                  <path d="M24 7H14v2h7.59L7.29 23.29 8.7 24.7 23 10.41V18h2V8a1 1 0 0 0-1-1z" />
                </g>
              </svg>
              </Link>
          
          </div>

          <p className="ml-5 text-xl mt-2">
            A task management tool for teaching assistants to keep track of their daily and weekly tasks.
          </p>

          <div className="flex flex-row my-4 ml-5">
            <a href="https://github.com/horiaomar25/edu-task">
              <img
                className="w-10 mr-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Github Icon"
              />
            </a>
            <a href="https://edu-task-horias-projects-dc29575b.vercel.app/">
              <img
                className="w-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_-KPutrb-_HGu1LeZF3gnY1vUIZ3bmnJyA&usqp=CAU"
                alt="Website Icon"
              />
            </a>
          </div>
        </article>

        {/** Card 3 - Bootcamp Kitchen */}
        <article className="flex flex-col justify-start items-start">
          <div className="mockup-browser-toolbar"></div>
          <div className="bg-base-200 flex justify-center px-4 pt-16">
            <img
              src={bootcampkitchen}
              className="w-full border border-black rounded-lg"
              alt="Bootcamp Kitchen"
            />
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-3xl overflow-hidden mt-4 ml-5 font-extrabold">
              Bootcamp Kitchen
            </h3>
           <Link to="/bootcampkitchen" className="ml-auto mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 mt-4 hover:bg-turquoise hover:rounded-lg"
                viewBox="0 0 32 32"
              >
                <g data-name="13-Arrow Up">
                  <path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z" />
                  <path d="M24 7H14v2h7.59L7.29 23.29 8.7 24.7 23 10.41V18h2V8a1 1 0 0 0-1-1z" />
                </g>
              </svg>
              </Link>
           
          </div>

          <p className="ml-5 text-xl mt-2">
            Quick 15 minute recipes for bootcampers.
          </p>

          <div className="flex flex-row my-4 ml-5">
            <a href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen" target="blank">
              <img
                className="w-10 mr-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Github Icon"
              />
            </a>
            <a href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/" target="blank" >
              <img
                className="w-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_-KPutrb-_HGu1LeZF3gnY1vUIZ3bmnJyA&usqp=CAU"
                alt="Website Icon"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NewProjects;
