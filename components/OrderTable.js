import Link from "next/link";
import { currency } from "../libs/formatters";

function OrderHead() {
  return (
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Qtde de Produtos</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
      <th scope="col">Criado em</th>
      <th scope="col">Atualizado em</th>
      <th scope="col">Ações</th>
    </tr>
  );
}
function OrderRow(props) {
  return (
    <tr>
      <td>{props.order.id}</td>
      <td>{props.order.products.length}</td>
      <td>{currency(props.order.totalAmount)}</td>
      <td>{props.order.status}</td>
      <td>{props.order.createdAt}</td>
      <td>{props.order.updatedAt}</td>
      <td>
        <Link href={`/orders/${props.order.id}`}>
          <a>detalhes</a>
        </Link>
      </td>
    </tr>
  );
}

function OrderTable(props) {
  const rows = props.orders.map((order) => <OrderRow order={order} />);

  return (
    <table className="table table-bordered table-responsive">
      <caption>Todos os pedidos do sistema</caption>
      <thead class="table-light">
        <OrderHead />
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default OrderTable;
