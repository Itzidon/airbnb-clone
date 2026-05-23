"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilters from "@/components/CategoryFilters";
import RoomCard from "@/components/RoomCard";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] =
    useState("Todos");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filteredRooms = rooms.filter((room) => {
    if (activeCategory === "Todos") {
      return true;
    }

    return room.category === activeCategory;
  });

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Navbar />

      <CategoryFilters
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <h1 className="text-3xl font-bold mb-6">
        Clon de Airbnb
      </h1>

      {loading ? (
        <p className="text-gray-500">
          Cargando habitaciones...
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>
      )}

      <Footer />
    </main>
  );
}