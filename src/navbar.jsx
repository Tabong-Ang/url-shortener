import logo from "./assets/images/logo.svg";

const Navbar = () => {

    function toggleMenu() {
        const navMenu = document.querySelector(".navbar");
        if (!navMenu.classList.contains("active")) {
            navMenu.classList.add("active");
        } else {
            navMenu.classList.remove("active");
        }
      }

  return (
    <header>
        <img src={logo} alt="logo" />
      <nav className="navbar active">
        <div className="links links-left">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="links links-right">
          <a href="#">login</a>
          <button id="sign-up">Sign Up</button>
        </div>
      </nav>
      <div onClick={toggleMenu} className="hamburger-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </header>
  );
};

export default Navbar;
