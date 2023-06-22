import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import rizzflaskData from "../../data/rizzflask";

Modal.setAppElement("#__next");

const RizzFlask = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleRizzflaskData = (id) => {
    const find = rizzflaskData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleRizzflaskData(id);
  };

  return (
    <div className="my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings} arrows={false}>
          {rizzflaskData.map((item) => (
            <li
              key={item.id}
              data-aos="fade-left"
              data-aos-duration="5500"
              data-aos-delay="100"
            >
              <div
                className="list_inner"
                style={{ padding: "10px 20px 10px 20px", borderRadius: "30px" }}
              >
                <div className="image">
                  <div
                    onClick={() => handleModle(item?.id)}
                    className="details"
                  >
                    <img
                      src={item.portfolioImage}
                      data-tip
                      data-for={item.tooltipId}
                      alt="portfolio"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
      {/* End ul */}
    </div>
  );
};

export default RizzFlask;
