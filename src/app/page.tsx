import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Image src="/homebg.png" alt="background" width={2000} height={550} />
      <h1 className="section-title text-center  mb-[100px] font-sans mt-[70px] text-[40px] font-bold underline text-[#47BBF9]">
        Kebaikan Mineral Alami
      </h1>
      <Image src="/imagee.png" alt="banner" width={2000} height={400} />
    </main>
  );
}
