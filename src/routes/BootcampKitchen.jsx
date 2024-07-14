/* eslint-disable react/no-unescaped-entities */
import bootcampkitchen from "./../assets/bootcampkitchen.png";
import meal1 from "./../assets/Searchrecipe.png";

const BootcampKitchen = () => {
  return (
    <>
      <div className="carousel w-full mt-4">
        <div id="slide1" className="carousel-item relative w-full flex justify-center">
          <img src={bootcampkitchen} className="w-1/2 rounded-md border border-black" alt="Bootcamp Kitchen" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center">
          <img src={meal1} className="w-1/2 rounded-md border border-black" alt="Meal 1" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
      
      </div>

      <section>
        <h2 className="text-center text-4xl font-extrabold overflow-hidden">Bootcamp Kitchen</h2>

        <div className="flex flex-col justify-center items-center mx-12">
          <div className="border border-black rounded-md p-4 w-1/2 mt-4 shadow-lg">
            <p className="text-lg font-semibold leading-relaxed text-center">
              Technologies used: HTML, CSS, Bootstrap, PostrgreSQL
              Tested with: Playwright, Supertest
            </p>
            <p className="text-lg font-semibold leading-relaxed text-center">
              My Role: Fullstack Developer
            </p>
          </div>

          <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
            <div>
              <h3 className="text-2xl font-extrabold">About</h3>
              <p className="text-sm lg:text-lg leading-relaxed">
                Welcome to Bootcamp Kitchen, your all-in-one solution for finding 15-minute recipes to make during lunch break. Bootcamp Kitchen provides quick recipes that bootcampers can use to make nutritious meals while learning. The application offers a variety of meals, including gluten-free options.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Challenges</h3>
              <p className="text-sm lg:text-lg leading-relaxed">
                The intense nature of the 16-week bootcamp had a negative impact on the average bootcamper's eating habits. Many bootcampers found it difficult to find time to prepare nutritious meals. The challenge was to create an application that could provide quick and nutritious recipes to help bootcampers maintain healthy eating habits during their busy schedule.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold">Results</h3>
              <ol className="list-decimal pl-4 text-sm lg:text-lg leading-relaxed">
                <li>
                  <strong>User-Centered Design:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Conducted thorough research, including competitor analysis and user interviews, to identify the specific needs and desires of bootcampers.</li>
                    <li>Created a problem statement based on insights from the research to ensure the solution addresses actual user needs.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Effective Solution Implementation:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Developed an application that provides 15-minute recipes to give bootcampers more time to focus on their studies while ensuring they have nutritious meals.</li>
                    <li>Included a variety of meal options, such as gluten-free recipes, to cater to different dietary needs.</li>
                  </ol>
                </li>
                <li className="mt-2">
                  <strong>Positive User Impact:</strong>
                  <ol className="list-decimal pl-4">
                    <li>Improved the eating habits of bootcampers by providing easy access to quick and nutritious recipes.</li>
                    <li>Enhanced the overall bootcamp experience by reducing the stress related to meal preparation and allowing bootcampers to focus more on their studies.</li>
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

export default BootcampKitchen;
