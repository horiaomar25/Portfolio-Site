import ProfilePicture from "../assets/picture.jpg";



const HeroSection = () => {

  return (
    
    <>
  <section >
    
    <div className= "hero_container">
   
     
        <p className="hero_text">   
        <h2 >FullStack Developer</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated
        </p>

      <img
      className="hero_image"
        src={ProfilePicture}
       width={300}
        alt="Profile"
      />
    </div>
    
  </section>
</>
  );
};

export default HeroSection;