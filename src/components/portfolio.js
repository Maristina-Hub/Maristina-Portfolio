import React, { useState } from "react";
import Nav from "./nav";
import Side from "./sidebar";

const Portfolio = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        {/* <!-- nav content --> */}
        <div>
          <Nav setShow={setShow} show={show} />
          <Side show={show} />
        </div>

        <div>
          <section className="flex    p-20 ">
            <div className="flex flex-wrap justify-around gap-5 p-3">
              <a href="https://farmcorps.net/">
                <img src="./img/farmcorp.jpeg" alt="" className="img" />
              </a>
              <a href="https://loyalbaze-task.netlify.app/">
                <img src="./img/portfolio5.jpeg" alt="" className="img " />
              </a>
              <a href="https://pullova.netlify.app/">
                <img src="./img/portfolio1.jpeg" alt="" className="img " />
              </a>
              <a href="https://silly-noether-76f19b.netlify.app">
                <img src="./img/portfolio2.jpeg" alt="" className="img " />
              </a>

              <a href="https://maristina-hub.github.io/Modal-Forms/">
                <img src="./img/portfolio3.jpeg" alt="" className="img " />
              </a>

              <a href="https://distracted-elion-1a8101.netlify.app">
                <img src="./img/portfolio4.jpeg" alt="" className="img " />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
