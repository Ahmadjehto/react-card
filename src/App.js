import React from "react";
import "./style.css";
import Header from "./components/base/Header";
import Main from "./components/main/Main";
import Footer from "./components/base/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
