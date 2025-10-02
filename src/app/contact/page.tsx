export default function contact() {
  return (
    <div className=" bg-white">
      <img src="/imagecontact.png" alt="background" width={1750} height={200} />
      <div className="font-sans text-[40px] mt-9 font-bold text-[#56AAE3] flex justify-center">
        <h1>Temukan Agen Kami Di Kotamu</h1>
      </div>
      <form
        action="https://leminerale.com/find-us#agent"
        method="GET"
        className="w-fit relative bg-[#56AAE3] mx-87 mt-[50px] p-4 rounded-xl mb-20"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-[100px]">
          <div className="gap-[100px] pl-10 flex justify-between">
            <input
              type="text"
              id="searchText"
              name="s"
              className="bg-white border-none rounded-lg h-[60] w-full pl-9"
              placeholder="Cari Lokasi"
            />
            <select
              name="city"
              id="city"
              className="bg-white text-[#68B8F3] w-full border-none rounded-lg h-[60] "
            >
              <option value="0">--Kota Kabupaten--</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Banten">Banten</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="Sumatera">Sumatera</option>
              <option value="Kalimantan">Kalimantan</option>
              <option value="Sulawesi">Sulawesi</option>
              <option value="NTB">NTT</option>
            </select>
            <select
              name="sub_district"
              id="sub_district"
              className="bg-white text-[#68B8F3]  w-full border-none rounded-lg h-[60]"
            >
              <option value="0">--Kecamatan--</option>
              <option value="Leuwi Panjang">Leuwi Panjang</option>
              <option value="Lengkong">Lengkong</option>
              <option value="Cibaduyut">Cibaduyut</option>
              <option value="Sunda">Karapitan</option>
              <option value="Buah Batu">Buah Batu</option>
              <option value="Kamojang">Kamojang</option>
              <option value="Bantul">Bantul</option>
              <option value="Sleman">Sleman</option>
              <option value="Palagan">Palagan</option>
              <option value="Magelang">Magelang</option>
            </select>
            <select
              name="vilage"
              id="vilage"
              className="bg-white text-[#68B8F3]  w-full border-none rounded-lg h-[60]"
            >
              <option value="0">--Kelurahan--</option>
              <option value="Ibun">Ibun</option>
              <option value="Majalaya">Majalaya</option>
              <option value="Harjatani">Harjatani</option>
              <option value="AmbarKetawang">AmbarKetawang</option>
              <option value="Dago">Dago</option>
            </select>
          </div>
        </div>
      </form>
      <div className="mb-60">
        <img src="/agent.png" alt="agent" width={1700} height={550} />
      </div>
    </div>
  );
}
