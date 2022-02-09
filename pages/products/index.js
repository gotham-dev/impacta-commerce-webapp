import FilterableProductsForSaleList from "../../components/FilterableProductsForSaleList";
import Layout from "../../components/Layout";

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
