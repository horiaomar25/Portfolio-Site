

import novastore from '../assets/novastore.png'
import productlist from '../assets/productlist.png'
import cart from '../assets/cart.png'
import checkout from '../assets/checkout.png'

const NovaStore = () => {
    return (
        <><div className="carousel w-full mt-4">
            <div id="slide1" className="carousel-item relative w-full flex justify-center">
                <img src={novastore} className="w-1/2 rounded-md border border-black" alt="EduTask" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full flex justify-center">
                <img src={productlist} className="w-1/2 rounded-md border border-black" alt="Dashboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full flex justify-center">
                <img src={cart} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full flex justify-center">
                <img src={checkout} className="w-1/2 rounded-md border border-black" alt="Taskboard" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div><section>
            {/* NovaStore */}
                <h2 className="text-center text-4xl font-extrabold overflow-hidden">NovaStore</h2>

                <div className="flex flex-col justify-center items-center mx-12">
                    <div className="border border-black rounded-md p-4 w-1/2 mt-4 shadow-lg">
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            Technologies used: TypeScript, React.js, TailwindCSS, DaisyUI(Component Library)
                           

                        </p>
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            
                            Backend: DummyJSON API

                        </p>
                
                        <p className="text-lg font-semibold leading-relaxed text-center">
                            My Role: Frontend Developer
                        </p>
                    </div>

                    <div className="rounded-md p-6 max-w-3xl mx-auto leading-relaxed">
                        <div>
                            <h3 className="text-2xl font-extrabold">About</h3>
                            <p className="text-sm lg:text-lg leading-relaxed">
                            This is a ecommerce store that displays products using the data from DummyJSON API which is great resource to showcase frontend development. 
I enjoy building the project as it really helped me to understand the importance of using Typescript and really understand the data that I am 
using in my project.
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
                                    <strong>Separating data and logic:</strong>
                                    <ol className="list-decimal pl-4">
                                        <li className="mb-3">I had to define the data that I fetched from the API in seperate file. This made it easier to deal when building my components as I could use Products.d.ts in my component to define the data I was using and avoid errors.
                                        </li>
                                        
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
                                        <li className="mb-3">Utilized Typescript with React to deal with data from DummyAPI for the frontend.</li>
                                       
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default NovaStore