import ProfilePicture from "../assets/picture.jpg";



const HeroSection = () => {
  return (
    <>
      <section>
        <div className="hero_container">
          <p className="hero_text">
            <h1>FullStack Developer</h1>
            School of Code graduate
            <br />
            Hard-working
            <br />
            Keen to learn
            <br />
            Self-motivated
            <br />
                
 <a  className="social_links"  href="https://github.com/horiaomar25" target="blank">  <button className="social_links"> Github</button></a>
<a className="social_links" href="https://www.linkedin.com/in/horia-omar" target="blank"><button className="social_links">Linkedin</button></a>
       
          </p>
 
        <img
            className="hero_image"
            src={ProfilePicture}
            width={300}
            style={{ borderRadius: "50%", border: "solid 2px #fff", boxShadow: "0px 0 10px #edf2fb"  }}
            alt="Profile"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
