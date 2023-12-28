import icon from "../assets/html.png";
import CssIcon from "../assets/CSS.png";
import JavascriptIcon from "../assets/javascript.png";
import PostgreSQL from "../assets/postgresql.png";
import vitestIcon from "../assets/vitest.png";
import nextIcon from "../assets/Next.png";
import reactIcon from "../assets/react.png";
import githubIcon from "../assets/github.png";
import tailwindIcon from "../assets/tailwind.png";
import typescriptIcon from "../assets/typescript.png";
import materialUIIcon from "../assets/materialUI.png";
const Skills = () => {
  return (
    <>
      <section>
       <h3 style={{ marginLeft: "50px", fontSize: "24px" }}>Skills</h3>
        <div className="skills_container"> 
        
          <div className="img_container">
            <img src={icon} width={100} alt={"html"} />
            <img src={CssIcon} width={70} alt={"css"} />
            <img src={JavascriptIcon} width={100} alt={"JavaScript"} />
          </div>
          <div className="img_container">
            <img src={PostgreSQL} width={100} alt={"PostgreSQL"} />
            <img src={vitestIcon} width={100} style={{ marginTop: "15px"}} alt={"Vitest Icon"} />
            <img src={nextIcon} width={90} style={{ marginTop: "20px"}} alt={"Next Icon"} />
          </div>

          <div className="img_container">
            <img src={reactIcon} width={100} alt={"React Icon"} />
            <img src={githubIcon} width={100} style={{ marginTop: "50px", marginBottom:'20px'}} alt={"Github Icon"} />
            <img src={tailwindIcon} width={100} style={{ marginTop: "30px"}} alt={"Tailwind Icon"} />
          </div>

          <div className="img_container">
            <img src={typescriptIcon} width={80} style={{ marginTop: "30px"}}  alt={"Typescript Icon"} />
            <img src={materialUIIcon} width={100} style={{ marginBottom: "120px", marginTop: "50px"}}  alt={"Material UI Icon"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
