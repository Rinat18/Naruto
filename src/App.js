import React from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/ui/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
};

export default App;
