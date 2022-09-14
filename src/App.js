import "./App.css";
import { useState } from "react";
import { Navbar, Form } from "./Components";

function App() {
  const [messages, setMessages] = useState([]);

  const handleMessages = (message) => {
    setMessages([...messages, message]);
    console.log(messages);
  };

  return (
    <div className="body">
      <Navbar />
      <div className="navStyle flexCol">
        <p className="textStyle">
          Har en kreativ och lösningsorienterad förmåga som tillsammans med mitt
          strukturerade och nyfikna sätt gör mig till en lovande blivande
          utvecklare. På fritiden gillar jag att lösa pussel vilket jag tycker
          speglar mitt tålamod och intresse för problemlösning. Det är viktigt
          för mig att växa och utvecklas individuellt och jag ser inga problem
          med att göra det tillsammans med andra. Jag söker nu LIA i samband med
          mina studier som webbutvecklare inom .NET. Hoppas att ni är
          intresserade av att lära känna mig mera! 😊
        </p>
        <div className="navStyle centerDiv">
          <Form handleMessages={handleMessages} />
        </div>
        <div>
          <ul className="listStyle">
            {messages.map((item) => (
              <li className="list">
                <p>{item.fromMessage}</p>
                <p className="italic">- {item.fromMail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
