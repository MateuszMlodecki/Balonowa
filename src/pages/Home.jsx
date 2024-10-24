import React from "react";
import "./styles.css";
import ExpandableList from "../components/ExpandableList";
import dmuchaniec from "../images/img_dmuchaniec.jpg";
import strzałka from "../images/strzałka.png";
import ReviewWidget from "../components/ElfsightWidget";

const Home = () => {
  return (
    <div>
      <img src={dmuchaniec} alt="" className="mx-auto w-4/5 rounded-3xl" />
      <div>
        <h2 className="flex justify-center text-center my-6 text-xl">
          „Radość w każdej chwili – z nami każdy moment jest magiczny!”
        </h2>
        <ExpandableList />
        <div className="flex justify-center text-center text-3xl mb-6">
          Zapraszamy serdecznie!
        </div>
        <div className="flex justify-center text-xl ">
          <ReviewWidget />
        </div>

        <div className="grid grid-cols-5 grid-rows-2 gap mt-6">
          <div className="col-start-3 flex flex-row justify-start items-center whitespace-nowrap">
            <img src={strzałka} alt="strzałka" className="w-10" />
            <div className="text-xl">
              Kontakt: tel. <br /> <a href="tel:661099051">661 099 051</a>
            </div>
          </div>
          <div className="col-start-3 row-start-2 flex flex-row justify-start items-center whitespace-nowrap">
            <img src={strzałka} alt="strzałka" className="w-10" />
            <div className="text-xl py-4">
              Adres: <br />
              <a
                href="https://www.google.com/maps/place/Balony+z+helem+Balonowa+Radocha+-+nape%C5%82nianie+balon%C3%B3w+helem/@52.1748999,18.2050212,793m/data=!3m1!1e3!4m6!3m5!1s0x471b33829ee1103f:0xffe624b27166a51c!8m2!3d52.1747983!4d18.2062753!16s%2Fg%2F11v60qtrsh?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Stare Miasto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
