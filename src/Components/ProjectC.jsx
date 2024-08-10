import edutask from "../assets/edutask.png";
import lendlogicthumbnail from "../assets/ll.png";

export const ProjectC = () => {
  return (
    <section className="flex flex-row justify-between m-8">
      {/* Card Section */}
      <div className="card w-96 bg-base-100 hover:shadow-xl border border-black">
        <figure>
          <img src={edutask} alt="Thumbnail for EduTask project" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">EduTask</h2>
          <p>Task Management tool for Teaching Assistants</p>
          <div className="card-actions justify-between flex">

            <a
              href="https://edu-task-horias-projects-dc29575b.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary bg-turquoise w-40">
                Demo
              </button>
            </a>

            <a
              href="https://github.com/horiaomar25/edu-task"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary bg-turquoise w-40">
                Repo
              </button>
            </a>
          </div>
        </div>
      </div>



      {/* Card Section */}
      <div className="card w-96 bg-base-100 hover:shadow-xl border border-black">
        <figure>
          <img src={lendlogicthumbnail} alt="Thumbnail for EduTask project" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">LendLogic</h2>
          <p>
            Mortgage tool for first time buyer and those looking to remortgage
          </p>
          <div className="card-actions justify-between flex mt-5">
          <a
          
                href="https://land-logic-app-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Demo
                </button>
              </a>
              <a
           
                href="https://github.com/MartiZu/LendLogic-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Repo
                </button>
              </a>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 hover:shadow-xl border border-black">
        <figure>
          <img src={edutask} alt="Thumbnail for EduTask project" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">BootCamp Kitchen</h2>
          <p>Quick 15 minute recipies for bootcampers</p>
          <div className="card-actions justify-between flex mt-5">
          <a
              
                href="https://bc15-w8-project-front-end-fully-stacked.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Demo
                </button>
              </a>
              <a
        
                href="https://github.com/horiaomar25/bc15-w8-project-fully-stacked-bootcamp-kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary bg-turquoise w-40">
                  Repo
                </button>
              </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};
