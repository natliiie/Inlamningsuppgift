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
    <div>
      <header>My header</header>
      <Navbar />
      <div>This is me</div>
      {/* här vill jag ha info */}
      {/* här vill jag ha min form */}
      <Form handleMessages={handleMessages} />
      {/* här vill jag ha en div med de olika posterna */}
      <div>
        <ul>
          {messages.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
