import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PropsType {
  children: React.ReactNode;
}

const MainContainer = ({ children }: PropsType) => (
  <div className="wrapper">
    <Sidebar />
    <div className="main-panel">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  </div>
);

export default MainContainer;
