function Summary(props) {
  const subtotalCalculated = props.products
    .map((x) => x.unitPrice * x.qty)
    .reduce((prev, e) => prev + e, 0);

  const subtotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotalCalculated);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-4 text-end">SUBTOTAL</div>
        <div className="col-2 text-end">
          <h5>{subtotal}</h5>
        </div>
      </div>
    </div>
  );
}

export default Summary;
