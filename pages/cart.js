import Link from "next/link";
import Layout from "../components/Layout";
import Cart from "../components/ShoppingCart/Cart";

const CARTITEMS = {
  createdAt: "2022-01-01T14:38:33Z", // datas em ISO-8601
  updatedAt: "2022-01-01T14:38:33Z", // datas em ISO-8601
  products: [
    {
      code: "1",
      title: "Caneca Personalizada de Porcelana",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-pers-porc.jpg",
      qty: 1,
      unitPrice: 123.45,
    },
    {
      code: "2",
      title: "Caneca Importada Personalizada em Diversas Cores",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-import-colors.jpg",
      qty: 2,
      unitPrice: 123.45,
    },
    {
      code: "3",
      title: "Caneca de Tulipa",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-tuli.jpg",
      qty: 1,
      unitPrice: 123.45,
    },
  ],
};

export default function ShoppingCartPage() {
  return (
    <Layout>
      <h1 className="text-center mt-5">Carrinho de Compras</h1>

      <Cart cart={CARTITEMS} />

      <Link href="/orders/1234345345">
        <a className="btn btn-primary" href="#" role="button">
          Fechar pedido
        </a>
      </Link>
    </Layout>
  );
}
