import picture from '../assets/picture.png';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="w-full px-6 py-8 border-t flex flex-col items-center "
      >
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-8 p-10">
          {/* About Me Text */}
          <div className="md:w-7/12 mb-6 md:mb-0">
            <h2 className="text-2xl mb-4 font-semibold">About Me</h2>
            <p className="leading-loose">
              I am a Junior Software Engineer with a background in education.
              I have always had a passion for learning. I really enjoy documentaries and learning about the world around me. It was
              one of the reasons why I went on to pursue a degree in History. I am a hard worker and enjoy a challenge. I
              am self-motivated and enjoy working as part of a team. I am
              looking forward to starting my career in tech.
            </p>
          </div>
          {/* Profile Picture */}
          <div className="md:w-4/12 flex justify-center">
            <img
              src={picture}
              alt="Profile"
              className="w-48 h-48 rounded-full"
            />
          </div>
        </div>

        {/* Why Tech Section */}
        <div className="w-full p-10">
          <h2 className="text-2xl mb-4 font-semibold">Why Tech?</h2>
          <p className="leading-loose">
            After working in education, I found tech to be an exciting career.
            It allows you to always keep learning and be able to be
            creative. You are solving problems to help people in their
            everyday life. I really enjoy the teamwork in tech as you always learn from others around you. 
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
