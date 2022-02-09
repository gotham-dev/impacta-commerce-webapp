import Layout from "../../components/Layout";
import { listOrders } from "../../libs/api";
import OrderTable from "../../components/OrderTable";

function OrdersPage(props) {
  return (
    <Layout>
      <h1 className="text-center mt-5">Pedidos</h1>
      <OrderTable orders={props.orders} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await listOrders();
  const orders = response.data.orders;

  return {
    props: { orders }, // will be passed to the page component as props
  };
}

export default OrdersPage;
