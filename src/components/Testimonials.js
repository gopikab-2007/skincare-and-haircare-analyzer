const sample = [
  {name:"Ananya", text:"My acne reduced in 2 months. The regimen is gentle.", city:"Bengaluru"},
  {name:"Rohit", text:"My hairfall decreased and hair feels healthier.", city:"Delhi"},
];

export default function Testimonials(){
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-bold text-pink-500 mb-4">What our customers say</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {sample.map((t,i)=>(
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{t.name} — <span className="text-gray-500">{t.city}</span></div>
            <p className="text-gray-700 mt-2">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
