import axios from "axios";

const API = process.env.NEXT_PUBLIC_API

export async function queryProducts(query) {
  return fetch(`${API}/products?query=${query}`).then(
    (response) => response.json()
  );
}

export async function getCart(code) {
  return fetch(`${API}/carts/${code}`).then((response) =>
    response.json()
  );
}

export async function updateCart(code, products) {
  return axios.put(`${API}/carts/${code}`, products);
}

export async function listOrders() {
  return axios.get(`${API}/orders`);
}

export async function closeOrder(cart_code) {
  return axios.post(`${API}/orders/`, { cart_code: cart_code });
}

export async function getOrder(id) {
  return axios.get(`${API}/orders/${id}`);
}
