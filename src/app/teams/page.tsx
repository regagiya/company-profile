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
      <div className="h-screen grid grid-cols-3 grid-rows-2 mb-10 mt-20 ml-[50px] gap-4">
        <div className="mt-[40px] max-w-[300px] font-sans border-[] py-5 px-5 bg-[#68B8F3] underline  text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
        <div className="mt-[40px] max-w-[300px]  font-sans border-[] py-5 px-5 bg-[#68B8F3] underline text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
        <div className="mt-[40px] max-w-[300px] font-sans border-[] py-5 px-5 bg-[#68B8F3] underline text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
        <div className="mt-[40px] max-w-[300px]  font-sans border-[] py-5 px-5 bg-[#68B8F3] underline text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
        <div className="mt-[40px] max-w-[300px]  font-sans border-[] py-5 px-5 bg-[#68B8F3] underline text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
        <div className="mt-[40px] max-w-[300px]  font-sans border-[] py-5 px-5 bg-[#68B8F3] underline text-white shadow-2xl rounded-2xl transition-transform hover:scale-120">
          CEO
        </div>
      </div>
    </main>
  );
}
