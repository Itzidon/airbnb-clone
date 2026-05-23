import Link from "next/link";

type Props = {
  room: {
    id: string;
    title: string;
    location: string;
    price: number;
    rating: number;
    image: string;
  };
};

export default function RoomCard({ room }: Props) {
  return (
    <Link href={`/rooms/${room.id}`}>
      <div className="rounded-2xl overflow-hidden cursor-pointer">
        <img
          src={room.image}
          alt={room.title}
          className="h-64 w-full object-cover rounded-2xl"
        />

        <div className="mt-3">
          <div className="flex justify-between">
            <h2 className="font-semibold">
              {room.title}
            </h2>

            <span>★ {room.rating}</span>
          </div>

          <p className="text-gray-500">
            {room.location}
          </p>

          <p className="mt-1">
            <span className="font-bold">
              ${room.price}
            </span>{" "}
            night
          </p>
        </div>
      </div>
    </Link>
  );
}