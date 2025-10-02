export default function Blog() {
  return (
    <main>
      <div className="bg-white h-screen">
        <div className=" p-6 bg-white shadow rounded-2xl w-200 h-190 m-auto mt-[80px]">
          <h2 className="text-2xl bg-white text-[#47BBF9] text-center underline font-bold font-sans mb-4">
            Create Content Here
          </h2>
          <form className="flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Input Name"
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Input Title"
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <input
              type="text"
              placeholder="Input Url"
              className="shadow-xl p-2 rounded-2xl transition-transform hover:scale-105"
            />
            <textarea
              placeholder="Input Content"
              className="shadow-xl p-2 h-100 rounded-2xl transition-transform hover:scale-105"
            />
            <button
              type="submit"
              className=" bg-[#47BBF9] font-bold text-white py-2 rounded-2xl"
            >
              POST BLOG
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
