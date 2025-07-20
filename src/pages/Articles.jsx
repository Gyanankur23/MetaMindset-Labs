export default function Articles() {
  const entries = [
    { title: 'The Clarity Curve', text: 'Why emotional clarity sharpens business decisions—especially in chaotic environments.' },
    { title: 'Soft Skills, Hard Impact', text: 'Navigating complexity with empathy and design thinking.' },
    { title: 'The Unspoken Mindset of Great Leaders', text: 'Exploring reflective silence as a leadership asset.' }
  ];

  return (
    <section className="px-10 py-16 text-white max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Featured Reflections</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entries.map((entry, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{entry.title}</h3>
            <p className="text-md text-gray-300">{entry.text}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
