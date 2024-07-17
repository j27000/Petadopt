import React from "react";
import { Header } from "./components/Layouts/Header";
import { Footer } from "./components/Layouts/Footer";
import { AllRoutes } from "./routes/AllRoutes";



function App() {




  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
