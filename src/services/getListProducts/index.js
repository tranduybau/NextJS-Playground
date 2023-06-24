async function getListProducts() {
  const res = await fetch("https://gmen-admin.wii.camp/api/v1.0/products", {
    'cache-control': 'no-cache',
  });

  const projects = await res.json();

  return projects;
}

export default getListProducts;
