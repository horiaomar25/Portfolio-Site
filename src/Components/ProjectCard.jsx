

const ProjectCard = () => {
  return (
    <section >
         <h3 style={{ marginLeft:'50px', fontSize: '24px'}}>Projects</h3>
    <div className="container">
    <div className= "project_container column">
   
    
        <p className="hero_text">   
        <h2 >EduTask</h2>
         <p> This is a task management tool for teaching assistants to keep track of their daily and weekly tasks during a school week.</p>
          <iframe width="390" height="315" src="https://www.youtube.com/embed/C9_1leIDqNg?si=EoJlBqYUNtGLPMks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
           <a className="social_links" href="https://edu-task-horias-projects-dc29575b.vercel.app/" target="blank"><button className="social_links">Demo</button></a>
           <a className="social_links" href="https://github.com/horiaomar25/edu-task" target="blank"><button className="social_links">Repo</button></a>
         
        </p>
     

        <p className="hero_text">   
        <h2 >LendLogic</h2>
          <p> In a group of 6, we built a mortgage tool for those looking to remortage and new buyers. This was heavily focused on user needs. </p>
          <iframe width="390" height="315" src="https://www.youtube.com/embed/C9_1leIDqNg?si=EoJlBqYUNtGLPMks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <a className="social_links" href="https://land-logic-app-frontend.vercel.app/" target="blank"><button className="social_links">Demo</button></a>
          <a className="social_links" href="https://land-logic-app-frontend.vercel.app/" target="blank"><button className="social_links">Repo</button></a>
        </p>

      

        <p className="hero_text">   
        <h2 >BootCamp Kitchen</h2>
        <p> In a group of 6, we built a application that provide quick 15 minutes meal to make the most of your lunchtime. </p>
        <iframe width="390" height="315" src="https://www.youtube.com/embed/C9_1leIDqNg?si=EoJlBqYUNtGLPMks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <a className="social_links" href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/" target="blank"><button className="social_links">Demo</button></a>
          <a className="social_links" href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen" target="blank"><button className="social_links">Repo</button></a>
        </p>

        

    </div>
    </div>
    </section>
  )
}

export default ProjectCard