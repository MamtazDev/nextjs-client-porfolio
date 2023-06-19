import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import testimonialContent from "../../data/projects";

export default function Projects() {
  const [animate, setAnimate] = useState(false);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrow: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };

  return (
    <div ref={testimonialRef} style={{ paddingBottom: "60px" }}>
      <Slider {...settings}>
        {testimonialContent.map((val, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: val.delayAnimation / 1000,
            }}
            className="project_card"
          >
            <div className="list_inner" style={{ height: "100%" }}>
              <div className="details">
                <div className="author">
                  <div className="image">
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(img/projects/${val.img}.png)`,
                      }}
                    ></div>
                    <div className="text">
                      <div className="short">
                        <h3>{val.designation}</h3>
                      </div>
                      <p>{val.desc}</p>
                      <div className="tag">
                        <p>tag 1</p>
                        <p>tag 1</p>
                      </div>
                    </div>
                  </div>
                  {/* End image */}
                  {/* End short description */}
                </div>
                {/* End author */}
                {/* End right quote icon */}
              </div>
              {/* End description */}
            </div>
          </motion.li>
        ))}
      </Slider>
    </div>
  );
}
