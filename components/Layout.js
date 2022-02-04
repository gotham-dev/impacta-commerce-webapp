import Head from "next/head";
import Menu from "../components/Menu";

function Layout(props) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Impacta Commerce</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />
        </Head>

        <div>
          <div className="container-fluid py-4">
            <Menu />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}


export default Layout;