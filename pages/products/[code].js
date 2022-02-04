import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function ProductDetailsPage(props) {
  const router = useRouter();
  const { code } = router.query;

  return (
    <Layout>
      <h1 className="text-center mt-5">Detalhes do produto</h1>
      <p>Código do produto selecionado é: {code}</p>
    </Layout>
  );
}

export default ProductDetailsPage;
