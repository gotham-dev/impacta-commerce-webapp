function ItemQuantity(props) {
  function buildQuantityEventChanged(increment) {
    return {
      product: props.product,
      newQty: props.product.qty + increment,
    };
  }

  function decrement() {
    props.onQuantityChanged(buildQuantityEventChanged(-1));
  }

  function increment() {
    props.onQuantityChanged(buildQuantityEventChanged(+1));
  }

  function handleChange(e) {
    props.onQuantityChanged(
      buildQuantityEventChanged(e.target.value - props.product.qty)
  );
  }

  return (
    <div className="input-group mb-3">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={decrement}
      >
        -
      </button>
      <input
        type="number"
        className="form-control text-center"
        value={props.product.qty}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
export default ItemQuantity;
