

const ProjectCard = () => {
  return (
    <section >
         <h3 style={{ marginLeft:'50px', fontSize: '24px'}}>Projects</h3>
    <div className="container">
    <div className= "project_container column">
   
    
        <p className="hero_text">   
        <h2 >EduTask</h2>
         <p> This is a task management tool for teaching assistants to keep track of their daily and weekly tasks during a school week.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/C9_1leIDqNg?si=EoJlBqYUNtGLPMks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
           <button className="social_links"><a  href="https://edu-task-horias-projects-dc29575b.vercel.app/" target="blank">Demo</a></button>
           <button className="social_links"><a  href="https://github.com/horiaomar25/edu-task" target="blank">Repo</a></button>
         
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