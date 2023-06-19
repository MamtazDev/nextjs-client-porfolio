import { useState } from "react";
import Certificate from "./Certificate";
import Modal from "react-modal";
import RizzFlask from "./RizzFlask";

// import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#__next");

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="lemsainnov_tm_skills">
      <div>
        <div className="skill_container" id="skills">
          <div className="content">
            <div
              className="leftpart"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="about_title">
                <h3>Certificates</h3>
              </div>
              <div className="my_skills">
                <div className="wrapper">
                  <div className="dodo_progress">
                    <Certificate />
                  </div>
                </div>
              </div>
            </div>
            {/* End leftpart */}

            <div
              className="rightpart rizzflask"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="about_title">
                <h3>TechStack()</h3>
              </div>
              <div className="lemsainnov_tm_portfolio" id="portfolio">
                <div className="container">
                  <RizzFlask />
                </div>
              </div>
              {/* End RizzFlask */}
            </div>
            {/* End righttpart */}
          </div>
        </div>
      </div>

      {/* Start Skills Details Modal */}
    </div>
    // /ABOUT
  );
};

export default Skills;
