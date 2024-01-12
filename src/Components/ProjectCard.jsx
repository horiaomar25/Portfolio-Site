const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="flex justify-center items-center w-auto px-30 p-6 flex-col md:flex  md:flex-col md:w-auto"
      >
        <h2 className="text-3xl mb-2 overflow-hidden">Projects</h2>

        {/* First Project */}
       
        <div className="flex flex-row m-4 justify-start p-6 border-b-2 sm:flex sm:justify-center sm:items-center  sm:flex-col sm:w-full md:flex md:flex-col md:justfy-center md:items-center md:w-full">
          <div className="overflow-hidden w-1/2 sm:w-full sm:m-0  sm:p-5 md:w-11/12 ">
            <h2 className="text-2xl mb-2 text-center overflow-hidden">
            EduTask{" "}
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12 ">
            This is a task management tool for teaching assistants to keep
              track of their daily and weekly tasks during a school week. This
              was built using NextJS and MaterialUI.
            </p>

            <h3>Built with:</h3>

            <div className="flex flex-row m-5  sm:flex  sm:flex-col sm:w-auto md:flex md:flex-col md:w-auto  ">
            <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              className="w-20"
            />
            <p>NextJS</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              className="w-20 ml-3"
            />
            <p>PostgreSQl</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" 
           className="w-20 ml-3"/>
            <p>MaterialUI</p>
          </div>

         
          </div>


            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
              Problem Statement:
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12 ">
            Teaching Assistant may find it diffcult to keep track of tasks and would like a useful management tool to track tasks
            </p>
            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
              What's the solution?
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12">
            This is where EduTask comes in. It creates a online platform for
              teaching assistant particularly in early years to store their
              daily and weekly tasks. In this way, supply staff can also acccess
              this information to see what tasks are avaliable for them to do.
              It provides an convient option for both teacher and teaching
              assistants to keep track of the tasks of the teaching assistants
              for the week.
            </p>
          </div>

          <div className=" flex flex-col mt-6 px-30 p-4 m-4 sm:w-full  sm:flex sm:justify-center sm:items-center">
            <iframe
              width="600"
              height="415"
              src="https://www.youtube.com/embed/C9_1leIDqNg?si=cCNH6QLLozm2Rgvd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="md:w-96"
             
            ></iframe>

            <div className="flex flex-wrap  mt-4 items-center justify-center md:mt-8 md:flex md:flex-col">
              <a
                className="bg-turquoise p-3 rounded-xl border-black  text-center font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow sm:border sm:m-4 md:border md:m-4"
                href="https://edu-task-horias-projects-dc29575b.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <button className="w-52 rounded-xl font-bold  m-0 p-0">
                  Demo
                </button>
              </a>
              <a
                className="bg-turquoise p-3 rounded-xl border-black  font-poppins hover:bg-light-gray shadow-nav-shadow sm:border sm:m-4 md:border md:m-4"
                href="https://github.com/horiaomar25/edu-task"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-52 rounded-xl font-bold  sm:text-center  ">
                  Repo
                </button>
              </a>
            </div>
          </div>

    
          
        </div>  

        {/* Second Project */}
        <div className="flex flex-row m-4 justify-start p-6 border-b-2 sm:flex sm:justify-center sm:items-center  sm:flex-col sm:w-full md:flex md:flex-col md:justfy-center md:items-center md:w-full">
          <div className="overflow-hidden w-1/2 sm:w-full sm:m-0  sm:p-5 md:w-11/12 ">
            <h2 className="text-2xl mb-2 text-center overflow-hidden">
            LendLogic
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12 ">
            In a group of 6, we built a mortgage tool for those looking to
              remortage and new buyers. This was heavily focused on user needs.This was built with NextJS, Tailwind and testing was done with Jest and Cypress.
            </p>
            <h3>Built with:</h3>

            <div className="flex flex-row m-5  sm:flex  sm:flex-col sm:w-auto md:flex md:flex-col md:w-auto  ">
            <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              className="w-20"
            />
            <p>NextJS</p>
          </div>

        
         
          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"  className="w-20 ml-3"/>
            <p>Tailwind</p>
          </div>
          </div>

            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
           Problem Statment:
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12 ">
            Users need an efficient, fast way to find personalized mortgage or remortgage options that align with their financial situation, values and goals.
            </p>
            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
              What's the solution?
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12">
            LendLogic provides a questionnaire for our mortgage users. The
              option the users select will provide them with the neccessary
              tools to assist in their mortgage journey.
            </p>
          </div>

          <div className=" flex flex-col mt-6 px-30 p-4 m-4 sm:w-full  sm:flex sm:justify-center sm:items-center">
            <iframe
              width="600"
              height="415"
              src="https://www.youtube.com/embed/MBCGeILfhXQ?si=U1zY_tMrXApMnF17"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="md:w-96"
            ></iframe>

            <div className="flex flex-wrap  mt-4 items-center justify-center md:mt-8 md:flex md:flex-col">
              <a
                 className="bg-turquoise p-3 rounded-xl border-black  text-center font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow sm:border sm:m-4 md:border md:m-4"
                href="https://land-logic-app-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-52 rounded-xl font-bold  m-0 p-0">
                  Demo
                </button>
              </a>
              <a
                className="bg-turquoise p-3 rounded-xl border-black  font-poppins hover:bg-light-gray shadow-nav-shadow sm:border md:border md:m-4"
                href="https://github.com/MartiZu/LendLogic-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-52 rounded-xl font-bold  m-0 p-0 ">
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>  

        <div className="flex flex-row m-4 justify-start p-6 border-b-2 sm:flex sm:justify-center sm:items-center  sm:flex-col sm:w-full md:flex md:flex-col md:justfy-center md:items-center md:w-full">
          <div className="overflow-hidden w-1/2 sm:w-full sm:m-0  sm:p-5 md:w-11/12 ">
            <h2 className="text-2xl mb-2 text-center overflow-hidden">
              Bootcamp Kitchen 
            </h2>
       
            <p className="leading-loose sm:w-full md:w-11/12 ">
              In a group of 6, we built a application that provide quick 15
              minutes recipies that are nutrient to make the most of your
              lunchtime.This was built using HTML, CSS and Javascript. It has
              it's own API built providing the application with the data of the
              15 minutes recipies. The API has been tested with Supertest. End
              to end testing carried out with Playwright.
            </p>
    <h2>Built with:</h2>
            <div className="flex flex-row m-4 justify-start p-6  sm:flex sm:justify-center sm:items-center  sm:flex-col sm:w-full md:flex md:flex-col md:justfy-center md:items-center md:w-full">
 
            <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="w-20"
            />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center mr-10 mb-2 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="w-20"
            />
            <p>CSS</p>
          </div>

          <div className="flex flex-col items-center mr-10 sm:flex-col sm:mr-2 ">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="w-20"
            />
            <p>Javascript</p>
          </div>
          </div>

            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
            Problem Statement:
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12 ">
            The intense nature of this course has had a negative impact on the average bootcampers eating habits.
            </p>
            <h2 className="text-2xl overflow-hidden mt-4 mb-3 font-poppins">
              What's the solution?
            </h2>
            <p className="leading-loose sm:w-full md:w-11/12">
              Bootcamp Kitchen allows you to search for an ingridient such as chicken or gluten-free to provide relevant meals that can be made within 15 minutes. 
            </p>
          </div>

          <div className=" flex flex-col mt-6 px-30 p-4 m-4 sm:w-full  sm:flex sm:justify-center sm:items-center">
            <iframe
              width="600"
              height="415"
              src="https://www.youtube.com/embed/Pun7VPBVFn0?si=lRkiRm09xBTV6zYX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="md:w-96"
            ></iframe>

            <div className="flex flex-wrap  mt-4 items-center justify-center md:mt-8 md:flex md:flex-col">
              <a
                className="bg-turquoise p-3 rounded-xl border-black  text-center font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow sm:border sm:m-4 md:border md:m-4"
                href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-52 rounded-xl font-bold  m-0 p-0">
                  Demo
                </button>
              </a>
              <a
               className="bg-turquoise p-3 rounded-xl border-black  font-poppins hover:bg-light-gray shadow-nav-shadow sm:border sm:m-4 md:border md:m-4"
                href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-52 rounded-xl font-bold  sm:text-center  ">
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
