import Head from "next/head";
import ProductsForSaleList from "./components/ProductsForSaleList";

const products = [
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

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Impacta Commerce</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </Head>

      <div>
        <div className="container-fluid py-4">
          <nav className="navbar navbar-expand-lg navbar-light border">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Impacta Commerce
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      PRODUTOS
                    </a>
                  </li>
                </ul>
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      CARRINHO DE COMPRAS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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

          <form className="row g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar produtos, marcas e muito mais..."
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </form>
          {/* Product list */}
          <div className="py-3">
            <ProductsForSaleList />

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
        </div>
      </div>
    </div>
  );
}
