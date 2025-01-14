import illustrationImg from "./assets/images/illustration-working.svg";
import brandIcon from "./assets/images/icon-brand-recognition.svg";
import detailedIcon from "./assets/images/icon-detailed-records.svg";
import customizeIcon from "./assets/images/icon-fully-customizable.svg";
import logo from "./assets/images/logo.svg";
import facebookLogo from "./assets/images/icon-facebook.svg";
import Xlogo from "./assets/images/icon-twitter.svg";
import pinterestLogo from "./assets/images/icon-pinterest.svg";
import instagramLogo from "./assets/images/icon-instagram.svg";

const Home = () => {
  return (
    <>
      <main>
        <div className="change-color1">
          <section className="getting_started">
            <div className="how-to">
              <h1>More than just shorter links</h1>
              <p>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="get-started">Get Started</button>
            </div>
            <div className="illus-img">
              <img src={illustrationImg} aria-hidden="true" />
            </div>
          </section>
        </div>
        <section className="link-shotener">
          <input
            type="url"
            id="link-input"
            placeholder="Shorten a link here..."
            required
          />
          <button className="sorten-it">Shorten It!</button>
        </section>
        <div className="change-color">
          <section className="statistics">
            <div className="details">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <hr />
            <div className="desc-box">
              <div className="desc-items">
                <img src={brandIcon} aria-hidden="true" />
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>

              <div className="desc-items first-type">
                <img src={detailedIcon} aria-hidden="true" />
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>

              <div className="desc-items second-type">
                <img src={customizeIcon} aria-hidden="true" />
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="boost-link">
          <h4>Boost your links today</h4>
          <button className="get-started">Get Started</button>
        </section>

        <footer>
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-links">
            <h5>Features</h5>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </div>
          <div className="footer-links">
            <h5>Resources</h5>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </div>
          <div className="footer-links">
            <h5>Company</h5>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
          <div className="social-links">
            <img src={facebookLogo} aria-hidden="true" />
            <img src={Xlogo} aria-hidden="true" />
            <img src={pinterestLogo} aria-hidden="true" />
            <img src={instagramLogo} aria-hidden="true" />
          </div>
        </footer>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://myportfolio-theta-plum.vercel.app/#" target="_blank">
            Tabong Philip
          </a>
          .
        </div>
      </main>
    </>
  );
};

export default Home;
