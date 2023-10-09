import classes from "./WhatIDo.module.css";

const WhatIDo = () => {
  return (
    <section classNam={classes.section}>
      <h1 className={classes.title}>Co robię?</h1>
      <div className={classes.separator} />
      <div className={classes.sebsection}>
        <i class="fa-solid fa-code"></i>
        <h2 className={classes.secTitle}>Web Development</h2>
        <p className={classes.text}>
          Korzystając z HTML, CSS i JavaScript z preprocesorami i narzędziami do
          budowy, takimi jak Sass oraz frameworkiem React.js, pasjonuję się
          tworzeniem perfekcyjnych pod względem pikseli stron internetowych i
          aplikacji, jednocześnie dbając o semantykę, modularność oraz kodem bez
          powtórzeń.
        </p>
      </div>
      <div className={classes.sebsection}>
        <i class="fa-solid fa-pencil"></i>
        <h2 className={classes.secTitle}>Web & Graphic Design</h2>
        <p className={classes.text}>
          Korzystając z HTML, CSS i JavaScript z preprocesorami i narzędziami do
          budowy, takimi jak Sass oraz frameworkiem React.js, pasjonuję się
          tworzeniem perfekcyjnych pod względem pikseli stron internetowych i
          aplikacji, jednocześnie dbając o semantykę, modularność oraz kodem bez
          powtórzeń.
        </p>
      </div>
    </section>
  );
};
export default WhatIDo;
