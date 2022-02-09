import { currency } from "../../libs/formatters";

function Summary(props) {
  const subtotal = props.products
    .map((x) => x.unitPrice * x.qty)
    .reduce((prev, e) => prev + e, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-4 text-end">SUBTOTAL</div>
        <div className="col-2 text-end">
          <h5>{currency(subtotal)}</h5>
        </div>
      </div>
    </div>
  );
}

export default Summary;
