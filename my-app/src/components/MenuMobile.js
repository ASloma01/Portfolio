import classes from "./MenuMobile.module.css";

const MenuMobile = (props) => {
  return (
    <nav className={classes.nav}>
      <div>
        <h2>Adam Słoma</h2>
        <i onClick={props.closeMenu} class="fa-solid fa-xmark"></i>
      </div>

      <ul>
        <li>
          <a href="#s">INTRO</a>
        </li>
        <li>
          <a href="#s">O MNIE</a>
        </li>
        <li>
          <a href="#s">CO ROBIĘ</a>
        </li>
        <li>
          <a href="#s">UMIEJĘTNOŚCI</a>
        </li>
        <li>
          <a href="#s">DOŚWIADCZENIE</a>
        </li>
        <li>
          <a href="#s">KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
