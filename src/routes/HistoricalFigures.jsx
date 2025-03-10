
import historicalfigures from './../assets/historicalfigures.png'
import search from './../assets/search.png'
import quiz from './../assets/quiz.png'

const HistoricalFigures = () => {
    return (
        <>
            <div className="carousel w-full mt-4">
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
                    <img src={quiz} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div><section>
                <h2 className="text-center text-4xl font-extrabold overflow-hidden">Historical Figures</h2>

                <div className="flex flex-col justify-center items-center mx-12">
                    <div className="border border-black rounded-md p-4 w-1/2 mt-4 shadow-lg">
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            Technologies used: Next.js, React.js, DaisyUI

                        </p>
                        <p className="text-lg font-semibold leading relaxed text-center">Tested with: Jest</p>
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            My Role: Full Stack Developer
                        </p>
                    </div>

                    <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-extrabold">About</h3>
                            <p className="text-sm lg:text-lg leading-relaxed">
                                The Historical Figures project is a web application that allows users to search and explore information about notable historical figures. It integrates data from the Historical Figures API and Wiki API to provide comprehensive biographies, achievements, and historical significance.
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-extrabold">Key Features</h3>
                            <ul className="list-disc pl-6 text-lg text-gray-700">
                                <li>Search for historical figures by name.</li>
                                <li>View detailed biographies, achievements, and historical impact.</li>
                                <li>Easy-to-use and visually engaging interface.</li>
                                <li>Fetches real-time data from Historical Figures API and Wiki API.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-2xl font-extrabold">Results</h3>
                            <li><strong>Enhanced Accessibility:</strong> A central hub for researching historical figures.</li>
                            <li><strong>Improved Educational Experience:</strong> Interactive and user-friendly interface for history enthusiasts.</li>
                            <li><strong>Up-to-Date Information:</strong> Reliable and real-time data integration with external APIs.</li>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HistoricalFigures