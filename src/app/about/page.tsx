export default function AboutPage() {
  return (
    <div className="bg-white">
      <img
        data-src="https:leminerale.com/storage/3612/findus_banner.png"
        alt="Temukan Kami"
        className="lozard hidden md:block w-full h-full object-cover"
        src="https://www.leminerale.com/storage/3612/findus_banner.png"
        data-loaded="true"
      ></img>
      <div className="py-[40px] md:py-[80px] hidden md:block">
        <div className="container max-w-full justify-center">
          <h1 className="section-title text-center  mb-[100px] font-afacad text-[40px] font-bold underline text-[#47BBF9]">
            Anugerah Mineral Alami
          </h1>
          <div className="flex -mx-8 justify-center md:mb-[30px]">
            <div className="w-4/5 md:w-1/3 px-8 md:mb-0">
              <div className="mx-auto flex justify-center">
                <img
                  data-src="https://www.lemineral.com/storage/3629/one.png"
                  alt="Mengandung"
                  className="lozard w-auto h-[380px]"
                  src="https://www.leminerale.com/storage/3629/one.png"
                  data-loaded="true"
                />
              </div>
              <div className="text-center w-2/3 mx-auto px-10 py-4 font-serif text-[18px] font-bold text-[#6C6E6F]">
                Mengandung Mineral Esensial Seimbang
              </div>
            </div>
            <div className="w-4/5 md:w-1/3 px-8 md:mb-0">
              <div className="mx-auto flex flex-col justify-center">
                <img
                  data-src="https://www.lemineral.com/storage/3631/two.png"
                  alt="Mengandung"
                  className="lozard w-auto h-[380px] object-contain"
                  src="https://www.leminerale.com/storage/3631/two.png"
                  data-loaded="true"
                />
                <div className="text-center mx-auto w-2/3 px-10 py-4 font-serif text-[18px] font-bold text-[#6C6E6F]">
                  Melindungi mineral esensialnya dengan 3 level proteksi
                  berlapis
                </div>
              </div>
            </div>
            <div className="w-4/5 md:w-1/3 px-8 md:mb-0">
              <div className="mx-auto flex flex-col justify-center">
                <img
                  data-src="https://www.lemineral.com/storage/3633/three.png"
                  alt="pengemasan"
                  className="lozard w-auto h-[380px] object-contain"
                  src="https://www.leminerale.com/storage/3633/three.png"
                  data-loaded="true"
                />
                <div className="text-center mx-auto w-2/3 px-10 py-4 font-serif text-[18px] font-bold text-[#6C6E6F]">
                  Pengemasan dilakukan di sumbernya tanpa tersentuh tangan
                  manusia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[80px]">
          <div className="md:container md:max-w-full">
            <h2 className="section-title text-center mb-[50px] font-sans text-[40px] font-bold underline text-[#47BBF9]">
              Kebaikan Mineral Alamin Le Minerale
            </h2>
            <div className="rounded-[20px] overflow-hidden mx-auto aspect-video max-w-[820px] bg-slate-400">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/KQ1ntJPGCsE"
                title="Youtube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              >
                #document (https://www.youtube.com/embed/KQ1ntJPGCsE)
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
