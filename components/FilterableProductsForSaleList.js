import { useEffect, useState } from "react";
import Link from "next/link";
import { queryProducts } from "../libs/api";
import { currency } from "../libs/formatters";

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
        <Link href={`/products/${props.product.code}`}>
          <a className="stretched-link">
            <h3 className="mt-0">{props.product.title}</h3>
          </a>
        </Link>
        <h4>{currency(props.product.amount)}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
}

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function searchProducts() {
    props.onSearch(query);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      searchProducts();
    }
  }

  return (
    <div className="row g-3">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar produtos, marcas e muito mais..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={searchProducts}>
          Buscar
        </button>
      </div>
    </div>
  );
}

function FilterableProductsForSaleList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productsSearchResult, setProductsSearchResult] = useState({
    results: [],
  });

  function clientSideQueryProduct(query) {
    queryProducts(query).then(
      (json) => {
        setIsLoaded(true);
        setProductsSearchResult(json);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }
  useEffect(() => {
    clientSideQueryProduct("");
  }, []);

  function handleOnSearch(query) {
    clientSideQueryProduct(query);
  }

  let result;

  if (error) {
    result = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    result = <div>Loading...</div>;
  } else {
    result = productsSearchResult.results.map((x, index) => (
      <ProductListItem product={x} key={index} />
    ));
  }

  return (
    <>
      <SearchBar onSearch={handleOnSearch} />
      <div>{result}</div>
    </>
  );
}

export default FilterableProductsForSaleList;
