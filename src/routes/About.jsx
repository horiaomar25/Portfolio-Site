

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex justify-center items-center w-auto px-30 p-6 border-top flex-col  sm:flex sm:flex-col "
      >
        <div className="flex justify-start  px-30 p-6 m-4 sm:flex-col sm:w-full md:flex md:flex-col">
          <div className="overflow-hidden  w-11/12 m-2  sm:w-full sm:m-0  sm:p-5 ">
            <h2 className="text-2xl mb-2 overflow-hidden text-center">About Me</h2>
            <p className=" leading-loose sm: w-full text-center">
              I am a Junior Software Engineer with a background in education.
              I have always had a passion for learning. I really
              enjoy documentaries and learning about the world around me. It was
              one of the reasons why I went on to pursue a degree in History.  I am a hard worker and enjoy a challenge. I
              am self-motivated and enjoy working as part of a team. I am
              looking forward to starting my career in tech.
            </p>

            <h2 className=" text-2xl overflow-hidden mt-4 mb-3 font-poppins text-center">
              Why Tech?
            </h2>
            <p className=" leading-loose sm: w-full text-center">
              After working in education, I found tech to be an exciting career.
              It allows you to always keep learning and be able to be
              creative. You are solving problems to help people in their
              everyday life. I really enjoy the teamwork in tech as you always learn from others around you. 

              I have always been drawn to the field of software development due to its dynamic nature and the endless opportunities for learning and growth it offers. During my time at a coding bootcamp, I discovered a passion for creating solutions that can significantly improve users' lives. 
              The experience of collaborating with a team to build a mortgage tool using Next.js and TailwindCSS highlighted my interest in blending technical proficiency with creativity to solve real-life problems. This project, alongside my continuous efforts to enhance my skills through hands-on projects and certifications such as AWS Essential Training for Developers, solidified my dedication to pursuing a career in tech. The prospect of joining an innovative environment where I can further develop my abilities and contribute to meaningful projects is incredibly exciting to me.
            </p>
          </div>

         
        </div>
      </section>
    </>
  )
}

export default About