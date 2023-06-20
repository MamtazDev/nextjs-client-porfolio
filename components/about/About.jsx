import { useState } from "react";
import Modal from "react-modal";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="lemsainnov_tm_about">
      <div className="container" id="about">
        <div className="content">
          <div className="leftpart leftPartForBigDevice">
            <div
              className="uk-container"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
              style={{ width: "20vw" }}
            >
              <h4 style={{ paddingTop: "20px" }}>Location</h4>
              <img src="img/about/UK.png" alt="" />

              <h4>United Kingdom</h4>
              <h4>
                <div
                  style={{
                    display: "flex",
                    fontWeight: "400",
                    paddingBottom: "20px",
                  }}
                >
                  (
                  <h4 style={{ color: "#52b3cb", fontWeight: "400" }}>
                    1 week stay
                  </h4>
                  )
                </div>{" "}
              </h4>
            </div>
            <div
              className="uk-container"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
              style={{ width: "20vw" }}
            >
              <h4 style={{ paddingTop: "20px" }}>Education</h4>
              <img src="img/about/university.png" alt="" />

              <h4 style={{ paddingTop: "20px" }}>University of Zarjan</h4>
              <h4>
                <div
                  style={{
                    display: "flex",
                    fontWeight: "400",
                    paddingBottom: "20px",
                  }}
                >
                  (
                  <h4 style={{ color: "#52b3cb", fontWeight: "400" }}>
                    Plumbing Require
                  </h4>
                  )
                </div>
              </h4>
            </div>
          </div>
          {/* End leftpart */}

          {/* End righttpart */}
          <div
            className="rightpart"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div
              className="about_title"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h3 className="aboutme_headline">About Me</h3> <br />
              <div className="leftpart leftPartForMobileDevice">
                <div
                  className="uk-container"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  style={{ width: "20vw" }}
                >
                  <h4 style={{ paddingTop: "20px" }}>Location</h4>
                  <img src="img/about/UK.png" alt="" />

                  <h4>United Kingdom</h4>
                  <h4>
                    <div
                      style={{
                        display: "flex",
                        fontWeight: "400",
                        paddingBottom: "20px",
                      }}
                    >
                      (
                      <h4 style={{ color: "#52b3cb", fontWeight: "400" }}>
                        1 week stay
                      </h4>
                      )
                    </div>{" "}
                  </h4>
                </div>
                <div
                  className="uk-container"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  style={{ width: "20vw" }}
                >
                  <h4 style={{ paddingTop: "20px" }}>Education</h4>
                  <img src="img/about/university.png" alt="" />

                  <h4 style={{ paddingTop: "20px" }}>University of Zarjan</h4>
                  <h4>
                    <div
                      style={{
                        display: "flex",
                        fontWeight: "400",
                        paddingBottom: "20px",
                      }}
                    >
                      (
                      <h4 style={{ color: "#52b3cb", fontWeight: "400" }}>
                        Plumbing Require
                      </h4>
                      )
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <img className="img_point5" src="/img/points/points5.png" alt="" />

            <div className="info">
              <h3>
                <span>Rokers Nelson</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="divider">-----------------</div>
            <div className="social_about">
              <div
                className="social"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <a
                  href="https://www.mail.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail style={{ color: "#898989" }} />
                  <p
                    style={{
                      color: "#898989 ",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Get in Touch
                  </p>
                </a>
              </div>
              <div
                className="social"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <a
                  href="https://www.mail.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub style={{ color: "white" }} />
                  <p
                    style={{
                      color: "white ",
                      fontSize: "21px",
                      fontWeight: "600",
                    }}
                  >
                    Github
                  </p>
                </a>
              </div>
              <div
                className="social"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <a
                  href="https://www.mail.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin style={{ color: "#0072b1" }} />
                  <p
                    style={{
                      color: "#0072b1",
                      fontSize: "21px",
                      fontWeight: "600",
                    }}
                  >
                    Linked
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
