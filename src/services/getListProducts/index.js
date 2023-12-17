async function getListProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    'cache-control': 'no-cache',
  });

  const projects = await res.json();

  return projects;
}

export default getListProducts;
