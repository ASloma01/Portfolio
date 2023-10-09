import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Umiejętności</h2>
      <div className={classes.separator} />
      <div>
        <i class="fa-solid fa-gear"></i>
        <h3>Development & Design</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Figma</li>
          <li>Canva</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
