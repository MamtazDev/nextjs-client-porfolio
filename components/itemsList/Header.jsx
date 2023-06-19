import React, { useEffect, useState } from "react";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={"horizontal-menu"}>
      <div className={"lemsainnov_tm_sidebar  menu-open"}>
        <div
          className="sidebar_inner main-logo-container"
          style={{ padding: "70px 7% 0 7%" }}
        >
          <div className="logo social-logo-container">
            <div
              className="social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
            <div
              className="social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a href="https://www.github.com" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
            </div>

            {/* End left side icons */}
          </div>
          <div className="menu menu-mail">
            <div
              className="social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a
                href="https://www.mail.com/feed/"
                style={{ zIndex: "1" }}
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
                <p>Get in Touch</p>
              </a>
            </div>
            {/* End .logo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
