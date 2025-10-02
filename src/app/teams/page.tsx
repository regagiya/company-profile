import Image from "next/image";

export default function Teams() {
  return (
    <main>
      <div className="bg-white"></div>
      <div>
        <Image
          src="/teams.png"
          alt="teams background"
          width={1800}
          height={200}
        />
      </div>
      <div className="h-screen grid grid-cols-4 gap-4"></div>
    </main>
  );
}
