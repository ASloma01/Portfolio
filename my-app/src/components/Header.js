import { useState } from "react";
import classes from "./Header.module.css";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  let content;

  const handleClick = () => {
    setIsOpen(true);
  };
  if (!isOpen) {
    content = (
      <>
        <i onClick={handleClick} class="fa-solid fa-bars"></i>
        <div className={classes.intro}>
          <h1>Adam Słoma</h1>
          <p>FORNT-END DEVELOPER</p>
        </div>
      </>
    );
  } else if (isOpen) {
    content = <MenuMobile closeMenu={() => setIsOpen(false)} />;
  }

  return <header className={classes.photo}>{content}</header>;
};

export default Header;
