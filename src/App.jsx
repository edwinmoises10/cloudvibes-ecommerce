import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import Error404 from "./components/Error404";
import ItemDetailsProduct from "./components/ItemDetailsProduct";
import { CartProvider } from "./context/cartContext";
import Checkout from "./components/Checkout";
import { getBDData } from "./data/firestore";



function App() {

  getBDData()
  
  return (
    <>
  
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/details/:itemID" element={<ItemDetailsProduct />} />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/genre/:genreID" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
