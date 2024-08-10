
import historicalfigures from "../assets/historicalfigures.png";
import search from "../assets/search.png";
import figurecard from "../assets/figurescard.png";
import quiz from "../assets/quiz.png";

const HistoricalFigures = () => {
    return (
        <><div className="carousel w-full mt-4">
            <div id="slide1" className="carousel-item relative w-full flex justify-center">
                <img src={historicalfigures} className="w-1/2 rounded-md border border-black" alt="EduTask" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full flex justify-center">
                <img src={search} className="w-1/2 rounded-md border border-black" alt="Dashboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full flex justify-center">
                <img src={figurecard} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex justify-center">
                <img src={quiz} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div><section>
                <h2 className="text-center text-4xl font-extrabold overflow-hidden">EduTask</h2>

                <div className="flex flex-col justify-center items-center mx-12">
                    <div className="border border-black rounded-md p-4 w-1/2 mt-4 shadow-lg">
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            Technologies used: Next.js, React.js, TailwindCSS
                           

                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            
                            Backend: Node.js, Express, PostgreSQL

                        </p>
                
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            My Role: Full Stack Developer
                        </p>
                    </div>

                    <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-extrabold">About</h3>
                            <p className="text-sm lg:text-lg leading-relaxed">
                                Historical Figures is an educational application that helps students learn about important historical figures. The app provides information about various historical figures, including their biographies, achievements, and contributions to society. Students can search for specific figures, view detailed information about them, and take quizzes to test their knowledge. The app aims to make learning about history fun and engaging for students of all ages.
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-extrabold">Challenges</h3>
                            <p className="text-sm lg:text-lg leading-relaxed">
                                
                               The Historical Figures from API Ninja was a good information, however it was lacking in images for the historical figures. I had to combined this with the Wiki API to search for the image of the historical figure.
                               I used custom hooks to make 2 fetch requests to the API and then combined the data to display the information on the page. It was great learning experience.
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-extrabold">What I learnt</h3>
                            <ol className="list-decimal pl-4 text-sm lg:text-lg leading-relaxed">
                                <li>
                                    <strong>CSS:</strong>
                                    <ol className="list-decimal pl-4">
                                        <li className="mb-3">Learnt about creating a background gradient using TailwindCSS</li>
                                        <li>Exploring keyframes for animation. I was able to explore more TailwindCSS animation features to implement</li>
                                    </ol>
                                </li>
                                <li className="mt-2">
                                    <strong>Improving logic</strong>
                                    <ol className="list-decimal pl-4">
                                        <li className="mb-3">I learnt more about writing logic that it is cleaner when use State hook</li>
                                        <li className="mb-3">Using custom hooks to make multiple fetch requests</li>
                                        
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
            </section></>
    )
}

export default HistoricalFigures