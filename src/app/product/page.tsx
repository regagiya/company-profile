import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-white min-h-screen ">
      <Image
        src="/background.png"
        alt="background "
        width={2000}
        height={552}
      ></Image>
      <Image src="/botol.png" alt="botol" width={2000} height={552}></Image>
      <Image src="/galoncopy.png" alt="galon" width={2000} height={552}></Image>
      <Image src="/galon.png" alt="galon" width={2000} height={552}></Image>
    </div>
  );
}
