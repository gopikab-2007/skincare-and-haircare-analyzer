const faqs = [
  {q:"Are your products safe for sensitive skin?", a:"Yes — all products are dermatologist-formulated and tested."},
  {q:"Do you test on animals?", a:"No — we are cruelty-free."},
  {q:"How does subscription work?", a:"You get monthly refills; we review and adjust every 30 days."},
];

export default function FAQ(){
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h3 className="text-2xl font-bold text-pink-500 mb-4">FAQ</h3>
      <div className="space-y-3">
        {faqs.map((f,i)=>(
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="font-medium">{f.q}</div>
            <div className="text-gray-700 mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
