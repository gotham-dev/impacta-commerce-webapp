import { useEffect, useState } from "react";

function Installment(props) {
  const fees = props.installment.hasFee ? "com juros" : "sem juros";
  return (
    <p>
      em {props.installment.number}x de R$ {props.installment.total} {fees}
    </p>
  );
}

function ProductListItem(props) {
  const defaultProductImage = "https://via.placeholder.com/150";

  return (
    <div className="d-flex position-relative border my-2">
      <img src={defaultProductImage} className="flex-shrink-0 me-3" />
      <div>
        <a href="#" className="stretched-link">
          <h3 className="mt-0">{props.product.title}</h3>
        </a>
        <h4>R$ {props.product.amount}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
}

function ProductsForSaleList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then(
        (json) => {
          setIsLoaded(true);
          json = [
            {
              title: "Caneca Personalizada de Porcelana",
              amount: 123.45,
              installments: { number: 3, total: 41.15, hasFee: true },
            },
            {
              title: "Caneca de Tulipa",
              amount: 123.45,
              installments: { number: 3, total: 41.15 },
            },
          ];
          setProducts(json);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const p = products.map((x, index) => <ProductListItem product={x} key={index} />);
    return <div>{p}</div>;
  }
}

export default ProductsForSaleList;
