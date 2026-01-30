import React from "react";

const Products = () => {
  const products = [
    { name: "Moisturizer", desc: "Hydrates your skin all day", price: 499 },
    { name: "Shampoo", desc: "Nourishes hair from root to tip", price: 299 },
    { name: "Face Serum", desc: "Glowing skin in 7 days", price: 699 },
    { name: "Hair Oil", desc: "Strengthens hair naturally", price: 399 },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">Our Products</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-700">{p.desc}</p>
            <p className="text-pink-500 font-bold mt-2">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
