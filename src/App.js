import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
