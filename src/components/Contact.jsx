import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kww3oef",
        "template_huw7ri9",
        form.current,
        "Zb2qfXNI10w3ACGvL"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          props.notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
    </form>
  );
};
