import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    const newCart = [...cart];
    if (isInCart(product.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...product, count };
      newCart.push(newItemInCart);
      setCart(newCart);    }
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    return setCart([]);
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getSubTotal(){
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price*item.count;
    });
    return subtotal;
  }

  return (
    <cartContext.Provider
      value={{
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getSubTotal
      }}
    >
      { props.children }
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
