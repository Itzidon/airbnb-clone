import Navbar from "@/components/Navbar";
import { rooms } from "@/data/rooms";

export default function RoomDetailPage() {
  const room = rooms[0];

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <Navbar />

      <img
        src={room.image}
        alt={room.title}
        className="h-96 w-full object-cover rounded-2xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">
        {room.title}
      </h1>

      <p className="text-gray-500 mb-2">
        {room.location}
      </p>

      <p className="mb-6">
        ★ {room.rating}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded-xl">
          Casa de playa increíble con vistas preciosas, perfecta para vacaciones.
        </div>

        <div className="p-4 border rounded-xl">
          <p className="font-bold text-xl">
            ${room.price} noche
          </p>

          <button className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl font-semibold">
            Reservar
          </button>
        </div>
      </div>
    </main>
  );
}