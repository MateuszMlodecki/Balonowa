import React from "react";
import CzarekBear from "../Gallery/Misie2.jpg";

const Oferta = () => {
  return (
    <div>
      <div className="mx-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {/* offer badge */}
        <div className="bg-[#80D958] rounded-3xl p-6 w-64 text-center shadow-lg drop-shadow-2xl">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-black text-2xl font-bold ">
              Pakiet Podstawowy
            </h2>
            <p className="text-black text-xl mt-2">2h</p>
            <div className="bg-[#C5FC79] font-bold rounded-full px-4 py-2 mt-4 inline-block drop-shadow-2xl">
              450 zł +<br></br> Koszt dojazdu
            </div>
          </div>

          {/* Content */}
          <div className="text-left">
            <ul className="px-5 space-y-3 text-sm text-gray-800 list-disc">
              <li>Animacje dostosowane do wieku uczestników</li>
              <li>Zabawy integracyjne</li>
              <li>Zabawy taneczne</li>
              <li>Zabawy ruchowe</li>
              <li>Tory przeszkód</li>
              <li>Bańki mydlane</li>
            </ul>
          </div>
        </div>
        {/* offer badge */}
        <div className="bg-[#80D958] rounded-3xl p-6 w-64 text-center shadow-lg drop-shadow-2xl">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-black text-2xl font-bold">
              Pakiet Rozszerzony
            </h2>
            <p className="text-black text-xl mt-2">3h</p>
            <div className="bg-[#C5FC79] font-bold rounded-full px-4 py-2 mt-4 inline-block drop-shadow-2xl">
              600 zł +<br></br> Koszt dojazdu
            </div>
          </div>

          {/* Content */}
          <div className="text-left">
            <ul className="px-5 space-y-3 text-sm text-gray-800 list-disc">
              <li>Animacje dostosowane do wieku uczestników</li>
              <li>Zabawy integracyjne</li>
              <li>Zabawy taneczne</li>
              <li>Zabawy ruchowe</li>
              <li>Tory przeszkód</li>
              <li>Tatuaże brokatowe</li>
              <li>Bańki mydlane</li>
              <li>Zaplatanie warkoczyków</li>
            </ul>
          </div>
        </div>
        {/* offer badge */}
        <div className="bg-[#80D958] rounded-3xl p-6 w-64 text-center shadow-lg drop-shadow-2xl">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-black text-2xl font-bold">
              Pakiet <br></br>Maxi
            </h2>
            <p className="text-black text-xl mt-2">3h</p>
            <div className="bg-[#C5FC79] font-bold rounded-full px-4 py-2 mt-4 inline-block drop-shadow-2xl">
              900 zł +<br></br> Koszt dojazdu
            </div>
          </div>

          {/* Content */}
          <div className="text-left">
            <ul className="px-5 space-y-3 text-sm text-gray-800 list-disc">
              <li>
                Dmuchana zjeżdżalnia Jungle ( wysokość 5,5m; szerokość 4m;
                długość 7m)
              </li>
              <li>Animacje dostosowane do wieku uczestników</li>
              <li>Zabawy integracyjne</li>
              <li>Zabawy taneczne</li>
              <li>Zabawy ruchowe</li>
              <li>Tory przeszkód</li>
              <li>Tatuaże brokatowe</li>
              <li>Bańki mydlane</li>
              <li>Bańki XXl</li>
              <li>Zaplatanie warkoczyków</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="text-center">
        <li>Ceny obejmują do 12 dzieci</li>
        <li>Powyżej 12 dzieci dodatkowy koszt 100zł/h</li>
      </ul>
      <div className="px-28 ">
        <h2 className="text-center font-bold text-3xl">Cennik Maskotek</h2>
        <div className="bg-[#C5FC79] rounded-3xl p-6 shadow-lg drop-shadow-2xl w-64 mx-auto my-4">
          Każdy Miś w cenie ma balony z helem, z którymi wchodzi na salę 😊 +
          koszt dojazdu.
        </div>
        <div className="grid grid-cols-2  justify-items-center bg-[#80D958] rounded-3xl shadow-lg drop-shadow-2xl h-96 place-items-center w-2/3 mx-auto my-4">
          <img
            className="max-h-80 rounded-2xl"
            src={CzarekBear}
            alt="Miś Czarek"
          ></img>
          <p>Miś Czarek – 30 minut- 200 zł</p>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
