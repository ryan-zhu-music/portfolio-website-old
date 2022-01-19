import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
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
      .sendForm("service_qwrbtip", "template_xjhwgzg", e.target, "user_rSxo0vLg6VJZeYL1cffxD")
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
    <div id="site-contact" data-aos="fade-up">
      <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="site-contact__body">
                <h2>Get In Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="site-contact__form-container">
                <form name="site-contact__form" validate onSubmit={handleSubmit} autocomplete="off" className="site-contact__form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="site-contact__form-input"
                          placeholder="Full Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="site-contact__form-input"
                          placeholder="Email Address"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          className="site-contact__form-input"
                          placeholder="Phone Number"
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="site-contact__form-input"
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
                      className="site-contact__form-text-area"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="btn-container">
                    <button type="submit" className="btn btn-custom">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
