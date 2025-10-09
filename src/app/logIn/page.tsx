import SignOut from "@/component/signout";
import SignIn from "@/component/signin";

export default async function Login() {
  return (
    <main>
      <div className="bg-white h-screen">
        <div className=" p-6 bg-white items-center shadow-2xl rounded-2xl w-xl h-100 m-auto mt-[200px]">
          <h2 className="text-2xl bg-white text-[#47BBF9] text-center underline font-bold font-sans mb-4">
            Welcome To Le Minerale
          </h2>
          <div className="flex justify-center">
            <img src="/google.png" alt="google" width={100} />
          </div>
          <div className="shadow-xl p-6 rounded-2xl text-center transition-transform mt-5 font-bold font-sans text-white bg-[#47BBF9] hover:scale-105">
            <SignIn />
          </div>
          <div className="shadow-xl p-6 rounded-2xl text-center transition-transform mt-5 font-bold font-sans text-white bg-[#47BBF9] hover:scale-105">
            <SignOut />
          </div>
        </div>
      </div>
    </main>
  );
}
