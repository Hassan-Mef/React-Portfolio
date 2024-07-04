import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} description={`Streaming App`} h3={`Viberr`} />
        <ProjectCard
          src={freshBurger}
          description={`Hamburger Restaurant`}
          h3={`Fresh Burger`}
        />
        <ProjectCard
          src={fitLift}
          description={`Fitness App`}
          h3={`Fit-Lift`}
        />
      </div>
    </section>
  );
}

export default Projects;
