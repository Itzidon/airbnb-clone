"use client";

import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8">
      <h1 className="text-2xl font-bold text-red-500">
        Airbnb
      </h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-full px-4 py-2"
      />
    </nav>
  );
}