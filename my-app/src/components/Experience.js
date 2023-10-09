import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={classes.exp}>
      <h2 className={classes.title}>Doświadczenie</h2>
      <div className={classes.separator} />
      <div className={classes.experience}>
        <div className={classes.time} />
        <div className={classes.item}>
          <h3>Collegium Da Vinci </h3>
          <p className={classes.text}>
            Podczas nauki na swojej uczelni poznałem wiele języków programowania
            oraz różnych narzędzi związanych z IT. Między innymi: Python, HTML5,
            CSS3 (SCSS/Bootstrap), JavaScript, Asembler, Figma, Java.
          </p>
          <p className={classes.date}>2020 - obecnie</p>
        </div>
        <div className={classes.item}>
          <h3>Kursy</h3>
          <h4>Na platformie Udemy.</h4>
          <p className={classes.text}>
            Podczas nauki na swojej uczelni poznałem wiele języków programowania
            oraz różnych narzędzi związanych z IT. Między innymi: Python, HTML5,
            CSS3 (SCSS/Bootstrap), JavaScript, Asembler, Figma, Java.
          </p>
          <p className={classes.date}>2020 - obecnie</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
