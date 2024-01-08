import ProfilePicture from "../assets/picture.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center items-center  px-30 p-6 m-4 sm:flex sm:flex-col sm:w-auto   md:flex md:flex-col ">
        <div className=" overflow-hidden h-60 w-1/2 text-center  sm:flex sm:flex-col  md:w-full   ">
          <h1 className="text-3xl p-4 md:overflow-hidden   ">
            FullStack Developer
          </h1>
          <p className="mb-9 md:mb-9 ">
            Hard-working
            <br />
            Keen to learn
            <br />
            Self-motivated
            <br />
          </p>

          <a
            className="bg-turquoise p-3 rounded-xl border-black border font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow "
            href="https://github.com/horiaomar25"
            target="_blank" rel="noreferrer"
          >
            <button className="w-52 rounded-xl font-bold text m-0 p-0 ">
              Github
            </button>
          </a>
          <a
            className="bg-turquoise p-3 rounded-xl border-black border font-poppins hover:bg-light-gray shadow-nav-shadow"
            target="_blank" rel="noreferrer"
          >
            <button className="w-52 rounded-xl font-bold m-0 p-0 ">
              Linkedin
            </button>
          </a>
        </div>

        <img
          src={ProfilePicture}
          width={300}
          className="rounded-full sm:rounded-full border  mt-3 md:w-2/5 md:mt-20"
          alt="Profile"
        />
      </section>
    </>
  );
};

export default HeroSection;
