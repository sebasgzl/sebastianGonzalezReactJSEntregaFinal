import "./CartItem.css";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

const CartItem = (props) => {
  const { removeItem } = useContext(cartContext);

  return (
    <div className="CartItemDetails">
      <img
        src={props.image}
        alt={props.name}
        className="CartDetails fotosProductosCartDetails"
      />
      <p className="CartDetails">{props.name}</p>
      <p className="CartDetails">Categoria: {props.category}</p>
      <p className="CartDetails">Precio por unidad: ${props.price}</p>
      <p className="CartDetails">Subtotal: ${props.count * props.price}</p>
      <button className="CartButton" onClick={() => removeItem(props.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
