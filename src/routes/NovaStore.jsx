

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
    <h3 className="text-2xl font-extrabold">What I Learned</h3>
    <ol className="list-decimal pl-4 text-sm lg:text-lg leading-relaxed">
        <li>
            <strong>Separating Data and Logic:</strong>
            <ol className="list-decimal pl-4">
                <li className="mb-3">Defined data structures and types in separate TypeScript files (e.g., `Products.d.ts`). This approach facilitated easier management of component data and improved type safety, reducing errors during development.</li>
                <li className="mb-3">Organized logic and state management to be more modular and reusable across components, enhancing the maintainability of the codebase.</li>
            </ol>
        </li>
        <li className="mt-2">
            <strong>Improving Logic and State Management:</strong>
            <ol className="list-decimal pl-4">
                <li className="mb-3">Enhanced understanding of using React hooks (e.g., `useState`, `useEffect`) for cleaner and more efficient state management.</li>
                <li className="mb-3">Developed custom hooks for managing complex logic and multiple fetch requests, promoting code reuse and separation of concerns.</li>
            </ol>
        </li>
        <li className="mt-2">
            <strong>Technological Achievements:</strong>
            <ol className="list-decimal pl-4">
                <li className="mb-3">Successfully integrated TypeScript with React to manage and type-check data from DummyAPI, leading to a more robust and error-resistant frontend.</li>
                <li className="mb-3">Implemented responsive design techniques to ensure the application provides a seamless user experience across various devices and screen sizes.</li>
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