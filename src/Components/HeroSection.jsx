import ProfilePicture from "../assets/picture.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center items-center px-30 p-6 m-4   sm:flex sm:flex-col  md:flex md:flex-col ">
        <div className="overflow-hidden w-1/2 md:w-1/2 text-center sm:flex sm:flex-col">
          <h1 className="text-2xl p-4  md:overflow-hidden">Junior Software Engineer</h1>
          <p className="mb-9 md:mb-9">
            Hard-working
            <br />
            Keen to learn
            <br />
            Self-motivated
            <br />
          </p>

          <div className="flex flex-wrap mt-4 justify-center md:flex md:flex-col md:items-center md:justify-center   sm:flex sm:flex-col sm:items-center sm:justify-center ">
  <a
    className="bg-turquoise p-3 rounded-xl border-black border font-poppins mr-4 hover:bg-light-gray shadow-nav-shadow md:border md:m-0 sm:m-0 "
    href="https://github.com/horiaomar25"
    target="_blank"
    rel="noreferrer"
  >
    <button className="w-52 md:w-20 sm:w-20  rounded-xl font-bold text m-0 p-0">Github</button>
  </a>
  <a
    className="bg-turquoise p-3 rounded-xl border-black border font-poppins hover:bg-light-gray shadow-nav-shadow md:border md:m-2"
    href="https://www.linkedin.com/in/horia-omar"
    target="_blank"
    rel="noreferrer"
  >
    <button className="w-52 md:w-20 sm:w-20 rounded-xl font-bold m-0 p-0">Linkedin</button>
  </a>
</div>

        </div>

        <img
          src={ProfilePicture}
          width={300}
          className="rounded-full  sm:rounded-full border mt-3 md:w-2/5"
          alt="Profile"
        />
      </section>
    </>
  );
};

export default HeroSection;
