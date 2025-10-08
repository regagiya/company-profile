import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Image src="/homebg.png" alt="background" width={1750} height={300} />
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
                className="inline-flex justify-center mt-6 items-center w-full md:w-[180px] shadow-2xl h-[50px] bg-[#35A4EC] text-white hover:bg-[#74D5ff] border rounded-[10px] border-[#35A4EC] hover:border-[#74D5FF] transition-color duration-200 ease-in-out group"
              >
                <h1 className="mr-3 font-[600]">SELENGKAPNYA</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image src="/imagee.png" alt="banner" width={1750} height={400} />
      <div className="m-32">
        <img src="/perjalanan.png" alt="perjalanan" width={1800} />
      </div>
      <div className="container max-w-full py-[50px]">
        <h2 className="section-title text-center mb-[30px] font-bold font-sans text-[#35A4EC] underline text-[30px]">
          Partner Le Minerale
        </h2>
      </div>
      <div className="h-screen">
        <div className=" grid grid-rows-2 grid-cols-6 place-items-center gap-4">
          <div className="transition-transform hover:scale-120">
            <img src="/klh.png" alt="klh" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/lion.png" alt="lion" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/kki.png" alt="kki" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/tkn.png" alt="tkn" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/kekb.png" alt="kekb" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/pelindo.png" alt="pelindo" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/asparminas.png" alt="asparminas" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/gapmmi.png" alt="gapmmi" width={130} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/sirsak.png" alt="sirsak" width={160} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/kpri.png" alt="kpri" width={170} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/prevent.png" alt="prevent" width={170} />
          </div>
          <div className="transition-transform hover:scale-120">
            <img src="/idupi.png" alt="idupi" width={170} />
          </div>
        </div>
      </div>
    </main>
  );
}
