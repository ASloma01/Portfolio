import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>Cześć! Mam na imię Adam.</h1>
      <h3 className={classes.subtitle}>
        Jestem inżynierem o zmysle projektowym i skupionym na szczegółach, który
        pasjonuje się połączeniem pięknego kodu z pięknym projektem.
      </h3>
      <div className={classes.separator}></div>
      <img src="../Images/DesktopBg.png" alt="MyPhoto" className={classes.me} />
      <p className={classes.text}>
        <span>
          Jestem studentem czwartego roku na Collegium Da Vinci w Poznaniu,
          studiującym informatykę ze specjalizacją aplikacje i strony
          internetowe
        </span>
        . Mam doświadczenie w tworzeniu i projektowaniu stron internetowych.
        Dążę do tworzenia oprogranmowania, które nie tylko działa sprawnie, ale
        również jest intuicyjne oraz idealnie dopasowane dla użytkownika.
      </p>
      <p className={classes.text}>
        Lubię uczyć się nowych i lepszych sposobów tworzenia stron
        internetowych, tak więc co za tym idzie - czystego i skalowalnego kodu.
      </p>
      <p className={classes.text}>
        <span> Kiedy nie siedzę przy komputerze</span> lubię grać w piłkę,
        uczęszczać na siłownię, podróżować, bawić się ze swoim psem oraz pływać
        na basenie.
      </p>
    </section>
  );
};

export default About;
