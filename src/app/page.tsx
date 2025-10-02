import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Image src="/homebg.png" alt="background" width={1750} height={300} />
      <h1 className="section-title text-center  mb-[100px] font-sans mt-[70px] text-[40px] font-bold underline text-[#47BBF9]">
        Kebaikan Mineral Alami
      </h1>
      <Image src="/imagee.png" alt="banner" width={1750} height={400} />
      <div className="py-[50px] relative z-0">
        <div className="md:hidden absolute left-0 top-0 w-full h-full bg-white opacity-80 z-0"></div>
        <div className="container max-w-full relative z-[1]">
          <div className=" flex flex-wrap md:flex-nowrap items-center justify-between">
            <figure className="w-full ml-[150px] md:w-1/2">
              <img src="/product.png" alt="product" />
            </figure>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="section-title font-sans text-3xl font-bold underline text-[#47BBF9] mb-6">
                Produk Le Minerale
                <span className="leminerale-text w-[162px] ml-2"></span>
              </h2>
              <p className="text-[#6C6E6F] max-w-[500px] text-2xl">
                Berasal dari sumber mata air pegunungan terpilih yang mengandung
                mineral esensial yang baik untuk tubuh. Dikemas dengan teknologi
                Mineral Protection Syetem yang menjamin kualitas air dan mineral
                didalamnya tetap utuh sampai ke tangan anda
              </p>
              <a
                href="https://leminerale.com/product"
                className="inline-flex justify-center mt-6 items-center w-full md:w-[180px] h-[50px] bg-[#35A4EC] text-white hover:bg-[#74D5ff] border rounded-[10px] border-[#35A4EC] hover:border-[#74D5FF] transition-color duration-200 ease-in-out group"
              >
                <h1 className="mr-3 font-[600]">SELENGKAPNYA</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
