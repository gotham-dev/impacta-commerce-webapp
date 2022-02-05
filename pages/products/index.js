import Head from "next/head";
import Menu from "../../components/Menu";
import FilterableProductsForSaleList from "../../components/FilterableProductsForSaleList";
import Layout from "../../components/Layout";

const products = [
  {
    code: "8C9F552D-D22C-4B76-AAF6-233F806F6484",
    title: "Caneca Personalizada de Porcelana",
    amount: 123.45,
    installments: { number: 3, total: 41.15, hasFee: true },
  },
  {
    code: "ED1F26D1-81B2-424E-A79F-DA74E9DDBAB7",
    title: "Caneca de Tulipa",
    amount: 123.45,
    installments: { number: 3, total: 41.15 },
  },
];

function ProductsForSalePage() {
  return (
    <Layout>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Impacta Commerce</h1>
          {/* <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p> */}
          {/* <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button> */}
        </div>
      </div>

      <div className="py-3">
        <FilterableProductsForSaleList />

        {/* Page nav */}
        <div className="row text-center py-5">
          <div className="col">
            <span>&#8592; Anterior </span>
          </div>
          <div className="col">
            <span>1 de 10</span>
          </div>
          <div className="col">
            <span> Seguinte &#8594;</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductsForSalePage;
