export default function CategoryFilters() {
  const categories = ["Beach", "City", "Mountain"];

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          className="border px-4 py-2 rounded-full hover:bg-gray-100"
        >
          {category}
        </button>
      ))}
    </div>
  );
}