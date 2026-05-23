"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
      <Link href="/">
        <h1 className="text-3xl font-bold text-red-500 cursor-pointer">
          Airbnb
        </h1>
      </Link>

      <div className="flex gap-3 items-center">
        <Link
          href="/catalog"
          className="border rounded-full px-4 py-2 hover:bg-gray-100 transition"
        >
          Catálogo
        </Link>

        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-full px-5 py-3 w-64"
        />
      </div>
    </nav>
  );
}