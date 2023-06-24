import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

Modal.setAppElement("#__next");

const Experience = () => {
  return (
    <div className="text">
      <div>
        <div>
          <div className="intro">
            <div className="container experience-container">
              <div
                className="lemsainnov_tm_title"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h3 id="eperience"> Experience()</h3>
                <img
                  className="img_point3"
                  src="/img/points/points3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="timeline">
            <ul>
              <li>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span className="divImag firstImg">
                    <time className="fromImg"> 2021</time>
                    <time className="toImg">Now</time>{" "}
                  </span>
                  <span>
                    <h2 className="company_text">Company A</h2>
                  </span>
                  <span style={{ display: "flex" }} className="job_text">
                    <h3>(</h3>
                    <h3 style={{ color: "#52b3cb", fontWeight: "500" }}>
                      Job A
                    </h3>
                    <h3>)</h3>
                  </span>
                  <p className="experience-details">
                    Responsibilities:
                    <p> - Lorem Lorem lorem lorem lorem lorem loren</p>
                    <p>
                      {" "}
                      - Lorem Lorem lorem lorem lorem lorem lorem loren lorem
                      dfafafd afafad adfadsf adfadf adsf asdfad asdfas adfdfadf
                    </p>
                    <p> - Lorem Lorem lorem lorem lorem loren, lorem</p>
                    <p>
                      - Lorem Lorem lorem lorem lorem lorem lore fklfj afjklsfdj
                      fkljafklaj afjaklf fjklafjd
                    </p>
                  </p>{" "}
                  <br />
                </div>
              </li>

              <li>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span className="divImag left second-experience">
                    <time className="fromImg"> 2021</time>
                    <time className="toImg">Now</time>
                  </span>
                  <span className="second-experience-texts">
                    <h2 className="company_text">Company A</h2>
                  </span>
                  <span style={{ display: "flex" }} className="job_text">
                    <h3>(</h3>
                    <h3 style={{ color: "#52b3cb", fontWeight: "500" }}>
                      Job A
                    </h3>
                    <h3>)</h3>
                  </span>
                  <p className="experience-details">
                    Responsibilities:
                    <br />
                    - Lorem Lorem lorem lorem lorem lorem loren
                    <br />
                    - Lorem Lorem lorem lorem lorem lorem lorem loren lorem
                    <br />
                    - Lorem Lorem lorem lorem lorem loren, lorem
                    <br />- Lorem Lorem lorem lorem lorem lorem lore
                  </p>{" "}
                  <br />
                  <img
                    className="img_point4"
                    src="/img/points/points.png"
                    alt=""
                  />
                </div>
              </li>

              <li>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span className="divImag">
                    <time className="fromImg"> 2021</time>
                    <time className="toImg">Now</time>
                  </span>
                  <span>
                    <h2 className="company_text">Company A</h2>
                  </span>
                  <span style={{ display: "flex" }} className="job_text">
                    <h3>(</h3>
                    <h3 style={{ color: "#52b3cb", fontWeight: "500" }}>
                      Job A
                    </h3>
                    <h3>)</h3>
                  </span>
                  <p className="experience-details">
                    Responsibilities:
                    <br />
                    - Lorem Lorem lorem lorem lorem lorem loren
                    <br />
                    - Lorem Lorem lorem lorem lorem lorem lorem loren lorem
                    <br />
                    - Lorem Lorem lorem lorem lorem loren, lorem
                    <br />- Lorem Lorem lorem lorem lorem lorem lore
                  </p>{" "}
                  <br />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
