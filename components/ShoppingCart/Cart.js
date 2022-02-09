import { useEffect, useState } from "react";

import ItemsList from "./ItemsList";
import Summary from "./Summary";
import { getCart, updateCart } from "../../libs/api";

const FIXED_CART_CODE = "fixed-cart-code";

function Cart(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart(FIXED_CART_CODE).then(
      (json) => {
        setIsLoaded(true);
        setProducts(json.products);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  function onQuantityChanged(ev) {
    for (const product of products) {
      if (product.code === ev.product.code) {
        product.qty = ev.newQty;
        setProducts(products.map((x) => x));
        updateCart(FIXED_CART_CODE, products);
        break;
      }
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <hr />
        <ItemsList products={products} onQuantityChanged={onQuantityChanged} />
        <hr />
        <Summary products={products} />
      </div>
    );
  }
}

export default Cart;
