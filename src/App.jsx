// import React from 'react'
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import Component1 from "./Components/HomePageComponents/component1/Component1";
import DrawerAppBar from "./Components/Navbar/Navbar";
// import RequestCallback from "./Components/RequestCallback";
const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <DrawerAppBar />
      <Component1 />
      <Footer />
    </div>
  );
};

export default App;
