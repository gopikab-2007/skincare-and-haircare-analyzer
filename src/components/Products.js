import React from 'react';

const products = [
  { id: 1, name: 'Moisturizer', description: 'Hydrates your skin all day', price: '₹499' },
  { id: 2, name: 'Shampoo', description: 'Nourishes hair from root to tip', price: '₹299' },
  { id: 3, name: 'Face Serum', description: 'Glowing skin in 7 days', price: '₹699' },
  { id: 4, name: 'Hair Oil', description: 'Strengthens hair naturally', price: '₹399' },
];

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <span className="text-pink-500 font-bold">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
