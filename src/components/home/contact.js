import React, { useState } from "react";
import emailjs from "emailjs-com";
import { socials } from "../../data/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_qwrbtip",
        "template_xjhwgzg",
        e.target,
        "user_rSxo0vLg6VJZeYL1cffxD"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="form-description">
        <h2>Contact</h2>
        <p>
          Want to get in touch? Fill out the form below, and I'll get back to
          you!
        </p>
        <p>Feel free to contact me about anything!</p>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
          <p>rz.ryanzhu@gmail.com</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} size="1x" />
          <p>(437) 776-1039</p>
        </div>
        <ul className="socials">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                {social.component}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-container">
        <form
          name="form"
          validate
          onSubmit={handleSubmit}
          autoComplete="off"
          className="form"
        >
          <div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div>
            <div className="form-group">
              <input
                type="tel"
                id="number"
                name="number"
                className="form-input"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              className="form-text-area"
              rows="4"
              placeholder="Message"
              required
              onChange={handleChange}
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <button type="submit" className="btn">
            Send!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
