import lendlogic from "./../assets/lendlogic.png";
import questionnaire from "./../assets/questionnaire.png";
import lldashboard from "./../assets/lldashboard.png";

const LendLogic = () => {
  return (
    <>
      <div className="carousel w-full mt-4">
        <div id="slide1" className="carousel-item relative w-full flex justify-center">
          <img src={lendlogic} className="w-1/2 rounded-md border border-black" alt="Lend Logic" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center">
          <img src={questionnaire} className="w-1/2 rounded-md border border-black" alt="Lend Logic" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex justify-center">
          <img src={lldashboard} className="w-1/2 rounded-md border border-black" alt="Lend Logic" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-center text-4xl font-extrabold overflow-hidden">LendLogic</h2>

        <div className="flex flex-col justify-center items-center mx-12 ">
          <div className="border border-black rounded-md p-4  w-1/2 mt-4 shadow-lg">
            <p className="text-lg font-semibold leading-relaxed text-center">Technologies used:
              Next.js, React.js, TailwindCSS,
              Tested with: Jest, Cypress

            </p>
            <p className="text-lg font-semibold leading-relaxed text-center">My Role: FullStack Developer</p>
          </div>

          <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
            <div>
              <h3 className="text-2xl font-extrabold">About</h3>
              <p className="text-sm lg:text-lg leading-relaxed">
                LendLogic is an innovative all-in-one application designed to provide personalized financial insights and decision-making tools related to mortgages. Recognizing the unique needs of users dealing with mortgage-related matters, LendLogic goes beyond the conventional one-size-fits-all approach by offering specialized features and services. Through collaboration with stakeholders and technical experts, the project aimed to serve a substantial portion of users who engage with mortgage-related apps but are currently underserved due to the lack of user-specific features. LendLogic enhances the customer experience by offering features and services specifically tailored to individual financial situations, values, and goals.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Challenges</h3>
              <ol className="list-decimal pl-4 text-sm lg:text-lg mt-2 leading-relaxed">
                <li>
                  <strong>Understanding User Needs:</strong>
                  <ol className="list-decimal pl-4 mt-2">
                    <li>Conducting comprehensive research, including competitive analysis and user interviews, to identify the specific desires and requirements of users at different stages of the property ladder.</li>
                    <li>Developing a refined problem statement based on insights from the research to ensure the solution addresses actual user needs.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Technical Implementation:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Building a robust preference gathering tool to capture user needs and deliver tailored information.</li>
                    <li>Ensuring seamless integration of user authentication and data storage using cookies to enhance the user experience.</li>
                    <li>Creating a dynamic and interactive dashboard that reflects personalized financial data and tools.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Customization and Flexibility:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Implementing features that allow users to adjust financial inputs dynamically, such as property values and savings goals, to reflect changes in their financial situation.</li>
                    <li>Designing tools for both new buyers and those looking to remortgage, catering to a wide range of user scenarios.</li>
                  </ol>
                </li>
              </ol>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Results</h3>
              <ol className="list-decimal pl-4 text-sm lg:text-lg leading-relaxed">
                <li>
                  <strong>Personalized User Experience:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Successful creation of a preference gathering tool that engages users to collect data about their financial preferences, goals, and requirements.</li>
                    <li>Development of a personalized and dynamic user experience within the LendLogic app, with tailored financial tools and features displayed on the user dashboard.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Enhanced Financial Planning Tools:</strong>
                  <ol className="list-decimal pl-4mb">
                    <li className="mb-2">1. For new buyers like Kat, implementation of features such as property deposit estimation, suggested monthly savings, and dynamic user input adjustments to promote financial planning and goal setting.</li>
                    <li>2. For remortgage users like Jenny, integration of features to explore different deals and timelines, providing detailed information based on their current mortgage plans.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong className="mb-2">Technological Success:</strong>
                  <ol className="list-decimal pl-4">
                    <li className="mb-2">1. Utilization of Next.js for the frontend, JSON server for the backend, and Tailwind CSS for styling, ensuring a responsive and efficient application.</li>
                    <li>2. Effective use of cookies for user authentication and data storage, providing a seamless and secure user experience.</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LendLogic;

