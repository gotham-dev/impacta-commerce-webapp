import Link from "next/link";
import Layout from "../components/Layout";
import Cart from "../components/ShoppingCart/Cart";

export default function ShoppingCartPage() {
  return (
    <Layout>
      <h1 className="text-center mt-5">Carrinho de Compras</h1>

      <Cart />

      <Link href="/orders/1234345345">
        <a className="btn btn-primary" href="#" role="button">
          Fechar pedido
        </a>
      </Link>
    </Layout>
  );
}
