import vitestIcon from "../assets/vitest.png";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex justify-center items-center w-auto px-30 p-6 flex-col sm:w-full sm:items-center sm:justify-center "
      >
        <h2 className="text-3xl ml-5 text-center  overflow-hidden">Skills</h2>

        <div className="flex flex-row m-5  sm:flex  sm:flex-col sm:w-auto md:flex md:flex-col md:w-auto  ">
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
          <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="w-20"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              className="w-20"
            />
            <p>NextJS</p>
          </div>

          <div className="flex flex-col items-center mr-10 sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              className="w-20"
            />
            <p>TypeScript</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              className="w-20 ml-3"
            />
            <p>PostgreSQl</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              className="w-20"
            />
            <p>Node</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              className="w-20"
            />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              className="w-20 ml-2"
            />
            <p>Jest</p>
          </div>

          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            <i>Tailwind</i>
          </div>
          <div className="flex flex-col items-center mr-10 justify-center sm:mr-2">
            <img src={vitestIcon} className="w-20 " />
            <i>Vitest</i>
          </div>
        </div>
        {/*<----------------------------------------------SOFT SKILLS ------------------------------------------------>*/}

        <div className="flex flex-row  ml-4 justify-center items-center  sm:flex sm:justify-center sm:items-center sm:flex-col  sm:w-auto  md:flex-col md:w-auto">
          <div className="flex flex-row   justify-center items-center sm:flex-col md:flex-col md:justify-center md:items-center ">
            <img
              src="https://img.freepik.com/free-vector/agile-method-concept-illustration_114360-9906.jpg?w=1380&t=st=1704227095~exp=1704227695~hmac=914a2e3abe1acee23100cd517d081edd0f86651fdec3e85ee7e6aedbe77ff87d"
              alt="illustrastration"
              width={500}
              className=" mr-10  sm:w-11/12 sm:m-0 md:w-11/12"
            />

            <p className="w-full  m-8 p-2  leading-loose sm:w-full md:w-full">
              {" "}
              <h4 className=" text-2xl overflow-hidden ">Agile </h4>
              I have worked in an Agile enviroment where our team had daily stand ups
              and retrospectives. I have worked in sprints acting as a project manager on a once a week basis.
            </p>
          </div>

          <div className="flex flex-row   justify-center items-center sm:flex-col md:flex md:flex-col md:justify-center md:items-center ">
            <img
              src="https://img.freepik.com/free-vector/ui-ux-team-concept-illustration_114360-11223.jpg?w=1380&t=st=1704385270~exp=1704385870~hmac=e53de651916e75abb23a03254c3d29a814bba015e7856771af4f054a24c73cf3"
              alt="debugging"
              width={500}
              className=" mr-10  sm:w-11/12 sm:m-0"
            />

            <p className="w-full  m-8 p-2  leading-loose sm:w-full md:w-full">
              {" "}
              <h4 className=" text-2xl overflow-hidden ">
                Teamwork and Empathy
              </h4>
              An important aspect to any team working together is make sure
              everyone feels they are in a safe working space. During my group
              projects, it was important to encourage my teammates to celebrate
              our successes.
              
            </p> 
          
          </div>

          
        </div>
        <div className="flex flex-row lg:w-1/2   justify-center items-center sm:flex-col md:flex md:flex-col md:justify-center md:items-center ">
            <img
              src="https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4271.jpg?w=826&t=st=1704385987~exp=1704386587~hmac=3b200dee9ba9693df4f51d887f5961f0587bfbab4aa655fd7a9b6a0e4569a1f5"
              alt="debugging"
              width={500}
              className=" mr-10  sm:w-11/12 sm:m-0 md:w-11/12 md:m-0"
            />

            <p className="w-full  m-8 p-2  leading-loose sm:w-full md:w-full">
              {" "}
              <h4 className=" text-2xl overflow-hidden ">Problem Solving</h4>
              In my group projects, I have contributed to help our team with problem-solving. I have exercised my problem-solving skills by helping my team with brainstorming and debugging. I have also been able to use this skill in my own personal projects.
            </p>
          </div>
      </section>
    </>
  );
};

export default Skills;
