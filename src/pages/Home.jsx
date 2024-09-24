import React from "react";
import "./styles.css";
import ExpandableList from "../components/ExpandableList";
import dmuchaniec from "../images/img_dmuchaniec.jpg";
import strzałka from "../images/strzałka.png";

const Home = () => {
  return (
    <div>
      <img src={dmuchaniec} alt="" className="firstImg" />
      <div>
        <h2 className="tempClass my-6">
          „Radość w każdej chwili – z nami każdy moment jest magiczny!”
        </h2>
        <ExpandableList />
        <div className="flex justify-center text-center text-3xl">
          Zapraszamy serdecznie!
        </div>
        <div className="flex justify-center text-xl">
          google rewiev widget placeholder.
        </div>
        <div className="grid grid-cols-1 grid-rows-2">
          <div className="flex flex-row col-start-1 row-start-1 justify-center">
            <img src={strzałka} alt="strzałka" className="w-10" />
            <div className="text-xl">
              Kontakt: tel. <br /> <a href="tel:661099051">661 099 051</a>
            </div>
          </div>
          <div className="flex flex-row col-start-1 row-start-2 justify-center">
            <img src={strzałka} alt="strzałka" className="w-10" />
            <div className="text-xl">Adres: Stare Miasto</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
