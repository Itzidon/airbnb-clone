"use client";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function CategoryFilters({
  active,
  setActive,
}: Props) {
  const categories = [
    "Todos",
    "Playa",
    "Ciudad",
    "Montaña",
  ];

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-4 py-2 rounded-full border transition ${
            active === category
              ? "bg-black text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}