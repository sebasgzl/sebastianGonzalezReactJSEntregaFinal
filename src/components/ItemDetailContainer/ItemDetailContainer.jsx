import { useState, useEffect } from "react";
import { getProductById } from "../../services/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { Ring } from "@uiball/loaders";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  if (isLoading) {
    return <Ring size={100} lineWeight={5} speed={1} color="red" />;
  } else {
    return product.length === 0 ? (
      <div className="ItemDetailContainer">
        <h1 className="h1DetailsTitulo">
          Hubo un error procesando la información, por favor intenta nuevamente
          más tarde.{" "}
        </h1>
      </div>
    ) : (
      <div className="ItemDetailContainer">
        <h1 className="h1DetailsTitulo">{greeting} </h1>
        <div className="ItemDetailDiv">
          <ItemDetail {...product} />
        </div>
      </div>
    );
  }
};

export default ItemDetailContainer;
