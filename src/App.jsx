import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartContextProvider } from "./context/cartContext";
import Checkout from "./components/Checkout/Checkout";
import Comprobante from "./components/Comprobante/Comprobante";

function App() {
  return (
    <body className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Productos"} />}
            />
            <Route
              path="/category/:categoryId"
              element={<CategoryItemListContainer />}
            />
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer greeting={"Tu Alfombra"} />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/comprobante" element={<Comprobante />} />
            <Route path="*" element={<h1>404 NOT FOUNT</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </body>
  );
}

//Cambiar automáticamente el título de la página
function CategoryItemListContainer() {
  const { categoryId } = useParams();
  return <ItemListContainer greeting={categoryId} />;
}

export default App;
