import axios from "axios";

export async function queryProducts(query) {
  return fetch(`http://127.0.0.1:5000/products?query=${query}`).then(
    (response) => response.json()
  );
}

export async function getCart(code) {
  return fetch(`http://127.0.0.1:5000/carts/${code}`).then((response) =>
    response.json()
  );
}

export async function updateCart(code, products) {
  return axios.put(`http://127.0.0.1:5000/carts/${code}`, products);
}

export async function listOrders() {
  return axios.get("http://127.0.0.1:5000/orders");
}

export async function closeOrder(cart_code) {
  return axios.post("http://127.0.0.1:5000/orders/", { cart_code: cart_code });
}

export async function getOrder(id) {
  return axios.get(`http://127.0.0.1:5000/orders/${id}`);
}
