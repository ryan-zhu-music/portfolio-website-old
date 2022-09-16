import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/home/contact";
import Footer from "../components/footer";
import "../styles/contact.css";

const ContactPage = () => {
  return (
    <main id="contact-page">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage;
