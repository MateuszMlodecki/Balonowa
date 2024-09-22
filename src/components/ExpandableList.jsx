import React, { useState } from "react";
import "./expandableList.css"; // Upewnij się, że styl działa poprawnie

const ExpandableList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleClick(0)} className="li1">
          Animacje
          <div style={{ display: expandedIndex === 0 ? "block" : "none" }}>
            <p>
              Witaj w magicznym świecie zabawy i kreatywności! Jako doświadczeni
              animatorzy dla dzieci, specjalizujemy się w organizacji
              niezwykłych imprez, które pozostaną w pamięci najmłodszych na
              długo. Dlaczego warto wybrać właśnie nas?
            </p>
            <ol>
              <li>
                <b>Kreatywność:</b> potrafimy wymyślać ciekawe i oryginalne gry
                oraz zabawy, które pobudzają wyobraźnię dzieci.
              </li>
              <li>
                <b>Umiejętność komunikacji:</b> potrafimy skutecznie
                porozumiewać się z dziećmi, dostosowując swój język i sposób
                wyrażania się do ich wieku i poziomu zrozumienia.
              </li>
              <li>
                <b>Empatia:</b> umiemy rozpoznać potrzeby dzieci i reagować na
                nie, co pozwala na lepsze zrozumienie emocji uczestników zabaw.
              </li>
              <li>
                <b>Energiczność:</b> dysponujemy dużą ilością energii, co
                sprawia, że jesteśmy w stanie prowadzić dzieci przez długie
                godziny pełne zabawy.
              </li>
              <li>
                <b>Organizacja:</b> potrafimy zorganizować czas oraz przestrzeń,
                aby dzieci mogły czuć się bezpiecznie i swobodnie podczas
                zabawy.
              </li>
              <li>
                <b>Profesjonalizm i Pasja:</b> Z pasją podchodzimy do każdej
                imprezy, co przekłada się na radość dzieci i zadowolenie
                rodziców.
              </li>
              <li>
                <b>Bezpieczeństwo:</b> Dbamy o bezpieczeństwo i komfort małych
                uczestników. Nasze animacje są prowadzone w sposób, który
                zapewnia zabawę przy zachowaniu odpowiednich standardów
                bezpieczeństwa.
              </li>
              <li>
                <b>Indywidualne Podejście:</b> Każda impreza jest inna, dlatego
                do każdej z nich podchodzimy indywidualnie.
              </li>
            </ol>
            <h3>Nasze Usługi Obejmują:</h3>
            <li>
              <ul>• Animacje na urodzinach, weselach, chrzcinach</ul>
              <ul>• Animacje na festynach i imprezach plenerowych</ul>
              <ul>• Oraz wiele innych imprez okolicznościowych</ul>
            </li>
            <p>
              Oferujemy szeroki zakres usług, które mają na celu zapewnienie
              atrakcyjnej i angażującej rozrywki dla najmłodszych. Oto niektóre
              z najczęściej spotykanych usług:
            </p>
            <ol>
              <b>
                <li>Malowanie twarzy</li>
                <li>Kolorowe warkoczyki</li>
                <li>Zamykanie w bańce oraz duże bańki</li>
                <li>Zabawy ruchowe</li>
                <li>Zabawy taneczne</li>
                <li>Zabawy integracyjne</li>
                <li>Tory przeszkód</li>
                <li>Tatuaże brokatowe</li>
                <li>Maskotki</li>
              </b>
            </ol>
            <p>
              Przekonaj się, jak wiele radości możemy wnieść w życie Twoich
              dzieci! Zapraszam do kontaktu, aby omówić szczegóły i wspólnie
              stworzyć niezapomniane chwile pełne uśmiechu i radości!
            </p>
          </div>
        </li>
        <li onClick={() => handleClick(1)} className="li2">
          Maskotki
          <div style={{ display: expandedIndex === 1 ? "block" : "none" }}>
            <p>
              Znajdziecie u nas również maskotki, które sprawdzą się bardzo
              dobrze na różnych uroczystościach. W naszej ofercie jest:
            </p>
            <ol>
              <li>
                <b>Miś Zdziś-</b> który rozkręci każdą imprezę taneczną. Jest
                bardzo wysoki bo mierzy 250 cm. Bardzo lubi zabawę oraz tańczyć
                na parkiecie.
              </li>
              <li>
                <b>Miś Czarek-</b> to mały brązowy miś, który uwielbia
                przytulasy. Kocha bawić się i tańczyć z dziećmi podczas imprez.
              </li>
              <li>
                <b>Strażak Staszek-</b> to wspaniały i dzielny strażak, który
                lubi biegać i bawić się z dziećmi.
              </li>
            </ol>
            <p>
              Na każdą imprezę urodzinową maskotki przynoszą balony z helem dla
              solenizanta
            </p>
          </div>
        </li>
        <li onClick={() => handleClick(2)} className="li1">
          Balony z helem
          <div style={{ display: expandedIndex === 2 ? "block" : "none" }}>
            <p>
              Dekoracje z balonów z helem to doskonały sposób na urozmaicenie
              zarówno małych, jak i dużych wydarzeń, takich jak urodziny,
              wesela, baby shower czy przyjęcia okolicznościowe. Znajdziecie u
              nas szeroki wybór balonów na każdą okazję oraz zamówić
              personalizowane balony.
            </p>
            <b>Personalizowane balony:</b> Balony z helem można personalizować,
            zamawiając te z imionami, datami lub innymi ważnymi dla solenizanta
            informacjami. To doskonały sposób na sprawienie, by dekoracje były
            bardziej osobiste.
            <b>( czas realizacji takich balonów wynosi 2 dni).</b>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExpandableList;
