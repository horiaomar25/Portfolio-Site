/* eslint-disable react/no-unescaped-entities */
import edutask from "./../assets/edutaskshot.png";
import taskboard from "./../assets/taskboard.png";
import dashboard from "./../assets/dashboard.png";

const EduTask = () => {
  return (
    <>
      <div className="carousel w-full mt-4">
        <div id="slide1" className="carousel-item relative w-full flex justify-center">
          <img src={edutask} className="w-1/2 rounded-md border border-black" alt="EduTask" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center">
          <img src={dashboard} className="w-1/2 rounded-md border border-black" alt="Dashboard" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex justify-center">
          <img src={taskboard} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-center text-4xl font-extrabold overflow-hidden">EduTask</h2>

        <div className="flex flex-col justify-center items-center mx-12">
          <div className="border border-black rounded-md p-4 w-1/2 mt-4 shadow-lg">
            <p className="text-lg font-semibold leading-relaxed text-center">
              Technologies used: Next.js, PostgreSQL, Node.js, Playwright
            </p>
            <p className="text-lg font-semibold leading-relaxed text-center">
              My Role: Backend Developer
            </p>
          </div>

          <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
            <div>
              <h3 className="text-2xl font-extrabold">About</h3>
              <p className="text-sm lg:text-lg leading-relaxed">
                EduTask helps teaching assistants manage their weekly and daily tasks easily. It's easy to use and helps keep things organized, making work at school much simpler. With EduTask, teaching assistants can get more done and be more productive during the school week. Watch a video demo of EduTask here.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Challenges</h3>
              <p className="text-sm lg:text-lg leading-relaxed">
                Teaching assistants often find it difficult to keep track of tasks and need a useful management tool to organize their daily and weekly tasks. The challenge was to create a digital solution that could replace traditional paper lists, which can be easily lost or damaged.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Results</h3>
              <ol className="list-decimal pl-4 text-sm lg:text-lg leading-relaxed">
                <li>
                  <strong>Improved Task Management:</strong>
                  <ol className="list-decimal pl-4">
                    <li className="mb-3">Developed a task management system to categorize tasks as daily or weekly, ensuring better organization and tracking.</li>
                    <li>Implemented a digital storage solution to prevent loss of task lists and provide easy access anytime.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Enhanced Productivity:</strong>
                  <ol className="list-decimal pl-4">
                    <li className="mb-3">Streamlined task management processes, allowing teaching assistants to focus more on their core responsibilities and increase their productivity.</li>
                    <li>Provided a user-friendly interface that simplifies the task tracking process, making it easy for teaching assistants to update and manage their tasks.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Technological Achievement:</strong>
                  <ol className="list-decimal pl-4">
                    <li className="mb-3">Utilized Next.js for the frontend, PostgreSQL for the database, and Node.js for the server environment to create a robust and scalable application.</li>
                    <li>Incorporated Playwright for end-to-end testing, ensuring the application's reliability and performance.</li>
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

export default EduTask;

