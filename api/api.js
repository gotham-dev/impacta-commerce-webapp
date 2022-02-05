export async function queryProducts(query) {
  return fetch(`http://127.0.0.1:5000/products?query=${query}`)
    .then((response) => response.json())    
}
