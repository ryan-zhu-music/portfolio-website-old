import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <main id="not-found">
      <Navbar />
      <h2>Page not found</h2>
      <p>Sorry, it doesn't seem like I've created a page here. 😔</p>
      <Link to="/" className="btn">
        Home
      </Link>
      <Footer />
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
