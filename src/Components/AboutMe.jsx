/* eslint-disable react/no-unescaped-entities */
import profilePicture from '../assets/picture.png'; // Replace this with the correct path
import codingImage from '../assets/coding.png'; // Replace this with the correct path

const AboutMe = () => {
  return (
    <>
      <section id="about" className="w-full px-6 py-8 m-9 flex flex-col items-center">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 p-6">
          {/* About Me Text */}
          <div className="md:w-7/12 mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4 overflow-hidden">About.</h2>
            <p className="leading-loose text-gray-300 text-lg">
            Hello, I'm Horia. I am a passionate Junior Developer with a background in full-stack development and a strong foundation in modern web technologies. Recently, I completed a series of coding bootcamp where I honed my skills in frameworks like React, Next.js, and other languages such as Java. With a love for problem-solving and creating intuitive digital experiences, I am eager to contribute to impactful projects and collaborate within a dynamic team environment.
      
              
              <br /><br />
              Outside of work, I love to learn about the world around me. 
              <br /><br />
              I'm looking for new positions where I can merge my love for code with my love for the creativity.  
            </p>
          </div>
          {/* Profile Picture */}
          <div className="md:w-4/12 flex justify-center">
            <img src={profilePicture} alt="Profile" className="w-48 h-48 rounded-full" />
          </div>
        </div>

        

        {/* Why Tech Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full p-6">
          {/* Why Tech Text */}
          <div className="md:w-7/12 mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-2">Why Tech?</h2>
            <p className="leading-loose text-gray-300 text-lg">
              After working in education, I found tech to be an exciting and dynamic career that offers endless opportunities for growth and creativity. One of the things I love most about technology is its constantly evolving nature, which keeps me in a state of continuous learning. This resonates deeply with my passion for expanding my knowledge and staying on the cutting edge of the industry.
              <br /><br />
              In tech, you're not just solving abstract problems; you're building solutions that have real-world impacts, whether it's improving user experiences, optimizing processes, or creating tools that enhance people's everyday lives. The creative aspect of web development, where you can take an idea and turn it into a functional, engaging digital product, is incredibly fulfilling.
            </p>
          </div>
          {/* Coding Image */}
          <div className="md:w-4/12 flex justify-center">
            <img src={codingImage} alt="Coding" className="w-72 h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;


