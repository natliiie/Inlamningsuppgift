import React from "react";
import { Navbar } from "../Components";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="navStyle flexCol">
        <h1>UTBILDNING</h1>

        <div className="navStyle flexCol">
          <h2>
            Webbutveckling inom .NET Yrkeshögskolan EC Utbildning 2021 – 2023
            (pågående)
          </h2>
          <h3>År 1</h3>
          <p>
            - C#, 40 yhp <br />
            - Datalagring, 40 yhp <br />
            - HTML & CSS, 25 yhp <br />
            - Javascript, 35 yhp <br />
            - ASP .NET Core, 30 yhp <br />
            - Web API, 20 yhp <br />- Agil Systemutveckling, 25 yhp
          </p>

          <p></p>
          <h3>År 2</h3>
          <p>
            -CMS, 20 yhp <br />
            - LIA Applikationsutveckling, 35 yhp <br />
            - Systemintegration, 20 yhp <br />
            - React, 20 yhp <br />
            - LIA Mjukvaruutveckling, 70 yhp <br />
            - Examensarbete, 20 yhp <br />
          </p>
        </div>
        <div className="navStyle flexCol">
          <h2>Informatik A+B</h2>
          <p>Örebro Universitet 2014</p>
        </div>

        <div className="navStyle flexCol">
          <h2>Samhällsvetenskapligaprogrammet</h2>
          <p>Karolinskaskolan 2006 - 2009</p>
        </div>
      </div>

      <div className="navStyle flexCol">
        <h1>ARBETSLIVSERFARENHET</h1>
        <div className="navStyle flexCol">
          <h2>Biltema Logistics AB - Administratör Spedition 2020 – 2021</h2>
          <p>
            Hantering av samtliga tullärenden gällande både import och export.
            Kommunikation med myndigheter och internationella leverantörer och
            exportörer.
          </p>
        </div>

        <div className="navStyle flexCol">
          <h2>
            Biltema Logistics AB (Retlog AB) – Lagerarbetare/Logistiksupport
            2015 – 2020
          </h2>
          <p>
            Hantering av hela flödet av lagerhållning - från inleverans till
            utleverans. Även tjänst som Logistiksupport där huvudsaklig uppgift
            var att hålla lagerarbetare i drift med hjälp av systemsupport,
            inventering och problemlösning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
