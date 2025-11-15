export default function Graphics() {
  const imgs = [
    "/ecoclimate/graphic/graphic1.jpg",
    "/ecoclimate/graphic/graphic2.jpg",
    "/ecoclimate/graphic/graphic3.jpg",
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">EcoClimate Graphics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imgs.map((img, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-3">
            <img src={img} className="w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

