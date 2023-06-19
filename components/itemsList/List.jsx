import React, { useEffect, useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import listContent from "../../data/list";

const List = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div>
          <div
              className="lemsainnov_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
             >
    
              <ul className="lemsa">
                {listContent.map((val, i) => (
                  <li key={i}>
                    <div>
                    <a href={val.itemRoute}>
                      {val.itemName}
                </a > 
                    </div>
                  </li>
                ))}
              </ul>
           </div>
       </div>
    </div>
    
    );
};

export default List;