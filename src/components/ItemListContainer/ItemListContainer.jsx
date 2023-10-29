import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getProductsByCategory, getProducts } from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Ring } from "@uiball/loaders";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();
  const asyncFunc = categoryId ? getProductsByCategory : getProducts;

  useEffect(() => {
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  if (isLoading) {
    return <Ring size={100} lineWeight={5} speed={1} color="red" />;
  } else {
    return products.length === 0 ? (
      <main>
        <div className="divProductos">
          <h1 className="h1Titulo">
            No hay productos disponibles para esa consulta.{" "}
          </h1>
        </div>
      </main>
    ) : (
      <main>
        <div className="divProductos">
          <h1 className="h1Titulo">{greeting} </h1>
          <ItemList products={products} />
        </div>
      </main>
    );
  }
};

export default ItemListContainer;
