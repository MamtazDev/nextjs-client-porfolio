import React from "react";
import ReactTyped from "react-typed";
import Image from "next/image";
import heroImage from "../../public/img/hero/1.png";
import List from "../itemsList/List";
import VerticalPoints from "../itemsList/VerticalPoints";
import { FiMail } from "react-icons/fi";
const heroContent = {
  heroImage: heroImage,
  name: "ilyas chenouf",
  description: `AlhamduAllah.`,
};

const Hero = () => {
  return (
    //    HERO

    <div className="lemsainnov_tm_hero res-hero">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
        <Image src={heroContent.heroImage} alt="brand" />
      </div>
      <div className="extra">
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          className="hello"
        >
          PLUMBS DEPORTEAR
        </p>
        <h1
          className="name"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <span className="typer-toper">
            <ReactTyped
              loop
              typeSpeed={150}
              backSpeed={60}
              strings={["FARGA RIMINDONE", "Junior Fellow"]}
              smartBackspace
              shuffle={false}
              backDelay={1}
              fadeOut={false}
              fadeOutDelay={100}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
          </span>
        </h1>

        <div>
          <List />
        </div>
      </div>
      <div
        className="social hero_mail"
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
          <FiMail style={{ height: "40px", width: "40px" }} />
        </a>
      </div>
      {/* <VerticalPoints /> */}
    </div>
    // /HERO
  );
};

export default Hero;
