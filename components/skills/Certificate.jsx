import React from "react";

const skillsContent = [
  {
    name: "Remo: CR-512",
    date: "06/2022",
    link: "https://lemsainnov.com/",
  },
  {
    name: "Remo: CR-512",
    date: "06/2022",
    link: "https://lemsainnov.com/",
  },
  {
    name: "Remo: CR-512",
    date: "06/2022",
    link: "https://lemsainnov.com/",
  },
  {
    name: "Remo: CR-512",
    date: "06/2022",
    link: "https://lemsainnov.com/",
  },
];

const Certificate = () => {
  return (
    <>
     <img className="img_point2" src="/img/points/points2.png" alt="" />

      {skillsContent.map((val, i) => (
        <div className="certificate_detail"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="500"
        >
            <div className="certificate_info" >
              <h3>{val.name}</h3>
             <p>{val.date}</p> 
            </div>
            <div className="certificate_img">
              <img src="/img/service/view.jpg" alt="" />
                <a href={val.link} ><h3>View</h3></a>         
            </div>
        </div>
      ))}
    </>
  );
};

export default Certificate;
