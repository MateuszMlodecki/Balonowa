import React from "react";
import "./styles.css";
import ExpandableList from "../components/ExpandableList";
import dmuchaniec from "../images/img_dmuchaniec.jpg";

const Home = () => {
  return (
    <div>
      <img src={dmuchaniec} alt="" className="firstImg" />
      <div>
        <h2 className="tempClass">
          „Radość w każdej chwili – z nami każdy moment jest magiczny!”
        </h2>
        <ExpandableList />
        <h3>Zapraszamy serdecznie</h3>
        <div className="tempClass">google rewiev widget placeholder.</div>
        <div className="tempClass">
          Kontakt
          <p>tel. 661 099 051</p>
          <div>
            <p>Adres: Stare Miasto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
