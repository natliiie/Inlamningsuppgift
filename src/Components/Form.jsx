import React from "react";
import { useState } from "react";

const Form = ({ handleMessages }) => {
  const [mailMessage, setMailMessage] = useState({
    fromMail: "",
    fromMessage: "",
  });

  const handleSubmit = (e) => {
    //prevent the page from load onClick
    e.preventDefault();

    //skicka mailet
    // handleMessages(mailMessage.fromMessage)
    handleMessages(mailMessage);
    setMailMessage({ fromMail: "", fromMessage: "" });
  };

  const handleChange = (e) => {
    setMailMessage({ ...mailMessage, [e.target.name]: e.target.value });
  };
  return (
    <div className="formContainer">
      <p>Post a message?</p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="fromMail"
          placeholder="name@email.com"
          value={mailMessage.fromMail}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          name="fromMessage"
          placeholder="Say Hi"
          value={mailMessage.fromMessage}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
