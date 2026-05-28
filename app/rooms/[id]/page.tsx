"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

export default function CatalogPage() {
  const [sort, setSort] = useState("asc");

  const sortedRooms = [...rooms].sort((a, b) =>
    sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Navbar />

      <section className="mb-8">
        <p className="text-sm text-gray-500 mb-2">
          Alojamientos disponibles
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Encuentra tu próxima estancia
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Explora casas, apartamentos y cabañas seleccionadas para tus próximas vacaciones.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border rounded-2xl p-4">
        <div>
          <p className="font-semibold">
            {rooms.length} alojamientos encontrados
          </p>

          <p className="text-sm text-gray-500">
            Ordena los resultados según tu presupuesto.
          </p>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="asc">Precio menor primero</option>
          <option value="desc">Precio mayor primero</option>
        </select>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}