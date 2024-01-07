import ProfilePicture from "../assets/picture.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center items-center w-auto px-30 p-6 m-4  sm:flex-col sm:w-full sm:m-0 ">
        <div className=" overflow-hidden h-60 w-1/2 text-center sm:w-full sm:h-full sm:p-5  ">
          <h1 className="text-3xl p-4  ">FullStack Developer</h1>
          <p className="mb-9">
            Hard-working
            <br />
            Keen to learn
            <br />
            Self-motivated
            <br />
          </p>

          <a
            className="bg-turquoise p-3 rounded-xl border-black border  font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow sm:flex-row sm:justify-center sm:gap-4 "
            href="https://github.com/horiaomar25"
            target="blank"
          >
 
            <button className="w-52 rounded-xl font-bold text  sm:mb-8  m-0 p-0 ">
              Github 
            </button>
          </a>
          <a
            className="bg-turquoise p-3 rounded-xl border-black border  font-poppins hover:bg-light-gray shadow-nav-shadow "
            href="https://www.linkedin.com/in/horia-omar"
            target="blank"
          >
            <button className="w-52 rounded-xl font-bold m-0 p-0 ">
              Linkedin
            </button>
          </a>
        </div>

        <img

          src={ProfilePicture}
          width={300}
         
          className="rounded-full sm:rounded-full border  mt-3"
          alt="Profile"
        />
      </section>
    </>
  );
};

export default HeroSection;
