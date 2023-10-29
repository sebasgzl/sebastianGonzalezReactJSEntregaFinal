import "./CartContainer.css";
import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import { NavLink } from "react-router-dom";

function CartContainer() {
  const { cart, getTotalItemsInCart, getSubTotal } = useContext(cartContext);

  const subTotal = getSubTotal();

  return (
    <div className="divItems">
      <h1 className="h1CartTitulo">Tus Productos</h1>
      <div>
        {cart.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      <div className="parrafosCart">
        <p className="cartInfo">Cant. Items: {getTotalItemsInCart()}</p>
        <p className="cartInfo">Total de la compra: ${subTotal}</p>
        {subTotal === 0 ? (
          <NavLink className="Option2" to="/">
            Volver al home
          </NavLink>
        ) : (
          <NavLink className="Option2" to="/checkout">
            COMPRAR
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default CartContainer;
