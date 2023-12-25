import ProfilePicture from "../assets/picture.jpg";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="hero_container">
          <p className="hero_text">
            <h2>FullStack Developer</h2>
            School of Code graduate
            <br />
            Hard-working
            <br />
            Keen to learn
            <br />
            Self-motivated
            <br />
            <button className="social_links"><a  href="https://github.com/horiaomar25" target="blank">Github</a></button>
            <button className="social_links"><a  href="https://www.linkedin.com/in/horia-omar" target="blank">Linkedin</a></button>
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
