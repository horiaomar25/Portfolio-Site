

const ProjectCard = () => {
  return (
    <section >
         <h3 style={{ marginLeft:'50px', fontSize: '24px'}}>Projects</h3>
    <div className="container">
    <div className= "project_container column">
   
    
        <p className="hero_text">   
        <h2 >EduTask</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated<br/>
           <button className="social_links">Demo</button>
          <button className="social_links">Repo</button>
         
        </p>
     

        <p className="hero_text">   
        <h2 >LendLogic</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated<br />
          <button className="social_links">Demo</button>
          <button className="social_links">Repo</button>
        </p>

      

        <p className="hero_text">   
        <h2 >BootCamp Kitchen</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated<br/>
          <button className="social_links">Demo</button>
          <button className="social_links">Repo</button>
        </p>

        

    </div>
    <div className="video_container column ">
    <p className="hero_text">   
        <h2 >BootCamp Kitchen Video</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated<br/>
          <button className="social_links">Demo</button>
          <button className="social_links">Repo</button>
        </p>

        <p className="hero_text">   
        <h2 >EduTask Video</h2>
          School of Code graduate<br />
          Hard-working<br />
          Keen to learn<br />
          Self-motivated<br/>
          <button className="social_links">Demo</button>
          <button className="social_links">Repo</button>
        </p>



        </div>
        </div>
  </section>
  )
}

export default ProjectCard