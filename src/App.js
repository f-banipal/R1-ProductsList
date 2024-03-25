import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import Nav from "./components/Nav/Nav";




const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ProductCard />
    </div>
  );
};

export default App;


