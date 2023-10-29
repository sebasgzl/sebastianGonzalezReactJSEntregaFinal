import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import Swal from 'sweetalert2';


const ItemDetail = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(props.id);

  const maxItems = itemInCart ? props.stock - itemInCart.count : props.stock;

  function handleAddToCart(quantity) {
    addToCart(props, quantity);
    Swal.fire({
      background: '#b22222',    
      border: `2px solid #F5F5F5`,
      iconColor: '#FFFFFF',
      color: '#FFFFFF',
      confirmButtonColor: '#2d2b2beb',
      title: "Producto agregado!",
      text: `Agregaste Tapete ${props.name}`,
      icon: "success",
      button: "Aww yiss!",
    });
    setIsAddedToCart(true);
  }

  return (
    <div className="CardItemDetails">
      <h4 className="CardHeaderDetails">{props.name}</h4>
      <img
        src={props.image}
        alt={props.name}
        className="fotosProductosDetails"
      />
      <div className="SectionDetails">
        <p className="InfoDetails">Precio: ${props.price}</p>
        <p className="InfoDetails">Categoria: {props.category}</p>
        <p className="InfoDetails">
          {!props.stock
            ? "Sin Stock Disponible"
            : `Stock Disponible: ${props.stock}`}
        </p>
        {props.stock > 0 ? (
          isAddedToCart ? (
            <NavLink className="navlink" to="/cart">
              Ir al carrito
            </NavLink>
          ) : (
            <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
          )
        ) : (
          <p className="SectionDetails">No hay stock disponible</p>
        )}
        {itemInCart && (
          <p className="SectionDetails">
            Ya agregaste {itemInCart.count} unidades de este producto
          </p>
        )}
        <NavLink to="/" className="Option2">
          Volver al inicio
        </NavLink>
      </div>
    </div>
  );
};

export default ItemDetail;
