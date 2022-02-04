import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

function orderResultsPage() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <Layout>
      <h1 className="text-center mt-5">Pedido Finalizado &#127881;</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <p>
              O seu pedido <b>{code}</b> foi finalizado com sucesso.
            </p>
            <p>
              Agora, o seu carrinho está vazio. Se isso fosse uma e-commercer de
              verdade, provavelmente você receberia alguma coisa. Porém, este é
              apenas uma exercício. Então, não vamos lhe entregar nada &#128517;
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

export default orderResultsPage;
