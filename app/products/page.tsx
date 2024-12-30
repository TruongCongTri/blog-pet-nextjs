import React from "react";
type Product = {
  id: number;
  title: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>SSR Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
