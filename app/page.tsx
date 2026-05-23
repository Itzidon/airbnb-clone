"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilters from "@/components/CategoryFilters";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Navbar />

      <CategoryFilters />

      <h1 className="text-3xl font-bold mb-6">
        Clon de Airbnb
      </h1>

      {loading ? (
        <p className="text-gray-500">
          Cargando habitaciones...
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>
      )}
    </main>
  );
}
