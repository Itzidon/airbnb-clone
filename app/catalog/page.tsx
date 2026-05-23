import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

export default function CatalogPage() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Navbar />

      <h1 className="text-3xl font-bold mb-6">
        Catalog
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}