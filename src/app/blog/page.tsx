export default function Blog() {
  return (
    <main>
      <div className="bg-white p-6 shadow rounded-2xl w-200 m-auto mt-[80px]">
        <h2 className="text-xl bg-white text-[#47BBF9] text-center  font-bold font-sans mb-4">
          Create Content Here
        </h2>
        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Input Name"
            className="shadow-xl p-2 rounded transition-transform hover:scale-110"
          />
          <input
            type="text"
            placeholder="Input Title"
            className="shadow-xl p-2 rounded transition-transform hover:scale-110"
          />
          <input
            type="content"
            placeholder="Input content"
            className="shadow-xl p-2 rounded transition-transform hover:scale-110"
          />
          <input
            type="text"
            placeholder="Input Url"
            className="shadow p-2 rounded transition-transform hover:scale-110"
          />
          <button
            type="submit"
            className=" bg-[#47BBF9] font-bold text-white py-2 rounded"
          >
            POST BLOG
          </button>
        </form>
      </div>
    </main>
  );
}
