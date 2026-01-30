// src/pages/ShopAll.js
import React, { useState, useMemo } from "react";

const SAMPLE_PRODUCTS = [
  { id:1, title:"Hydrating Moisturizer", category:"Skin", price:499 },
  { id:2, title:"Anti-Fall Shampoo", category:"Hair", price:349 },
  { id:3, title:"Glow Duo Set", category:"Combo", price:899 },
  { id:4, title:"Vitamin C Serum", category:"Skin", price:699 },
  // add more
];

export default function ShopAll(){
  const [filter, setFilter] = useState("All");
  const categories = ["All","Skin","Hair","Combo"];

  const filtered = useMemo(()=> {
    if(filter==="All") return SAMPLE_PRODUCTS;
    return SAMPLE_PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-pink-500 font-bold mb-4">Shop All</h2>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={()=>setFilter(cat)}
             className={`px-3 py-2 rounded ${filter===cat ? "bg-pink-500 text-white" : "bg-gray-100"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="ml-auto">
          <input placeholder="Search products..." className="p-2 border rounded" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Image</div>
            <h3 className="font-semibold">{p.title}</h3>
            <div className="text-gray-600">{p.category}</div>
            <div className="mt-2 font-bold">₹{p.price}</div>
            <div className="mt-4 flex gap-2">
              <button className="bg-pink-500 text-white px-3 py-1 rounded">Add</button>
              <button className="border px-3 py-1 rounded">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
