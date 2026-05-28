"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

export default function CatalogPage() {
  const [sort, setSort] = useState("asc");

  const sortedRooms = [...rooms].sort((a, b) => {
    if (sort === "asc") {
      return a.price - b.price;
    }

    return b.price - a.price;
  });

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Navbar />

      <h1 className="text-3xl font-bold mb-6">
        Catálogo
      </h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">
          {rooms.length} alojamientos
        </p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="asc">
            Precio menor
          </option>

          <option value="desc">
            Precio mayor
          </option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
      </div>
    </main>
  );
}