/* eslint-disable react/no-unescaped-entities */

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center items-center  px-6 py-4 lg:m-10 md:px-30 md:py-6 mx-2 my-4">
        <div className="flex flex-col items-center text-center lg:ml-8">
          <h6 className="text-gray-500 text-xl overflow-hidden">
            <span className="text-3xl">👋🏿</span>Hello I'm Horia
          </h6>
          <h1 className="text-4xl md:text-7xl p-2 font-poppins font-extrabold overflow-hidden">
            Junior{" "}
            <span className="bg-turquoise pb-4 -tracking-tight text-transparent bg-clip-text">
              Developer
            </span>
          </h1>
          <p className="text-gray-500 text-2xl mb-5">
            Eager Learner, Passionate Developer
          </p>
          <div className="flex flex-row mb-4">
            <a href="https://github.com/horiaomar25?tab=repositories">
              <img
                className="w-10 mr-6"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Linkedin"
              />
            </a>
            <a href="https://www.linkedin.com/in/horia-omar/">
              <img
                className="w-10"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

