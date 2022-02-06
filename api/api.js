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
