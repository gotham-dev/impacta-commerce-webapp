import Layout from "../../components/Layout";
import Link from "next/link";
import { getOrder } from "../../libs/api";
import { currency } from "../../libs/formatters";

function orderResultsPage(props) {
  function sumQty() {
    return props.order.products
      .map((x) => x.qty)
      .reduce((prev, e) => prev + e, 0);
  }

  function sumUnitPrice() {
    return props.order.products
      .map((x) => x.unitPrice)
      .reduce((prev, e) => prev + e, 0);
  }

  const productsRow = props.order.products.map((x) => (
    <tr>
      <td>{x.title}</td>
      <td>{x.qty}</td>
      <td>{currency(x.unitPrice)}</td>
      <td>{currency(x.unitPrice * x.qty)}</td>
    </tr>
  ));

  return (
    <Layout>
      <h1 className="text-center mt-5">Pedido Finalizado &#127881;</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <p>O seu pedido foi finalizado com sucesso.</p>
            <table className="table table-bordered table-responsive">
              <thead class="table-light">
                <tr>
                  <th>Id</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.order.id}</td>
                  <td>{props.order.status}</td>
                  <td>{props.order.totalAmount}</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-bordered table-responsive">
              <thead class="table-light">
                <tr>
                  <th>Produtos</th>
                  <th>Qtde</th>
                  <th>Preço</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{productsRow}</tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td className="fw-bold">{sumQty()}</td>
                  <td className="fw-bold">{currency(sumUnitPrice())}</td>
                  <td className="fw-bold">
                    {currency(props.order.totalAmount)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <p>
              Se isso fosse uma e-commercer de verdade, provavelmente você
              receberia alguma coisa. Porém, este é apenas uma exercício. Então,
              não vamos lhe entregar nada &#128517;
            </p>
            <p>De qualquer forma, obrigado pela preferência!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link href="/products">
            <a className="btn btn-primary w-25" href="#" role="button">
              Ver mais produtos
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await getOrder(context.query.code);
  const order = response.data;

  return {
    props: { order },
  };
}

export default orderResultsPage;
