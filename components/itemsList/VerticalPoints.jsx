import React, { useEffect, useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import verticalPoints from "../../data/verticalPoints";

const VerticalPoints = () => {
  useEffect(() => {
    const homeDot = document.querySelector('[href="#home"]');
    if (homeDot) {
      homeDot.classList.add("active");
    }
  }, []);
  return (
    <div className={"horizontal-menu"}>
      <div className={"lemsainnov_tm_sidebar"}>
        <div className="sidebar_inner sidebar_list">
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "projects",
                "skill",
                "experiencs",
                "about",
              ]}
              activeNavClass="active"
              scrollDuration="100"
            >
              <div className="dotstyle">
                <ul style={{ flexDirection: "column" }}>
                  {verticalPoints.map((val, i) => (
                    <li key={i}>
                      <div className="list_inner">
                        <a
                          href={val.itemRoute}
                          style={{
                            padding: "8px",
                            borderRadius: "50%",
                            width: "10px",
                          }}
                        ></a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollspyNav>
          </div>
          {/* End .menu */}
        </div>
      </div>
    </div>
  );
};

export default VerticalPoints;
