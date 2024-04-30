// import React from 'react'
import Header from "./Components/Header";
import Component1 from "./Components/HomePageComponents/component1/Component1";
import DrawerAppBar from "./Components/Navbar/Navbar";
import Footer from "./Components/HomePageComponents/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import RequestCallback from "./Components/RequestCallback";
// import RequestCallback from "./Components/RequestCallback";
const App = () => {
  return (
    <Router>
      <div style={{ overflowX: "hidden" }}>
        <DrawerAppBar />
        <Component1 />

        <RequestCallback />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
