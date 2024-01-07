/* eslint-disable react/prop-types */

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="flex justify-center items-center w-auto px-30 p-6 border-top flex-col"
      >
        <div className="flex justify-start  px-30 p-6 m-4 sm:flex-col sm:w-full  ">
          <div className="overflow-hidden  w-11/12 m-2  sm:w-full sm:m-0  sm:p-5 ">
            <h2 className="text-2xl mb-2 overflow-hidden">About Me</h2>
            <p className=" leading-loose sm: w-full">
              I am a Junior Full Stack Developer with a background in education.
              I have always had a passion for learning new things. I really
              enjoy documentaries and learning about the world around me. It was
              one of the reasons why I went on to pursue a degree in History. I
              have also worked as a volunteer at the Royal Academy of Art
              providing vistors with information about the historical Burlington
              House and it's rooms . I am a hard worker and enjoy a challenge. I
              am self-motivated and enjoy working as part of a team. I am
              looking forward to starting my career in tech.
            </p>

            <h2 className=" text-2xl overflow-hidden mt-4 mb-3 font-poppins">
              Why Tech?
            </h2>
            <p className=" leading-loose sm: w-full">
              After working in education, I found tech to be an exciting career.
              It allows you to always keep learning and be able to be
              creativity. You are solving problems to help people in their
              everyday life. It also provides continious learning, which is of
              great appeal to me.
            </p>
          </div>

          <img
            src="https://img.freepik.com/free-vector/formula-concept-illustration_114360-8337.jpg?t=st=1704225008~exp=1704225608~hmac=ed5df135e1f316e4619851edf1f4dd19e2ee5083a993640476ad4d2421238d3f"
            width={900}
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
