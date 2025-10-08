"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Teams() {
  const [users, setUsers] = useState([]);

  interface IUser {
    name: { first: string; last: string };
    picture: { large: string };
    role: string;
    quotes: string;
    objectId: string;
    photo: string;
  }

  interface IUpdateUser {
    name: string;
    photo: string;
    role: string;
    quotes: string;
    objectId: string;
  }

  useEffect(() => {
    async function fetchUser() {
      const roles = [
        "General Manager Of marketing",
        "General Manager Of Production",
        "General Manager Of Quality Control",
        "General Manager Of Human Resource",
        "General Manager Of Finance And Tax",
        "General Manager Of General Affairs",
      ];

      const quotes = [
        "At Le Minerale, we don't just provide water-we provide natural goodness that keeps Indonesia hydrate and healthy",
        "Quality is not just out standard,it's our promise in every drop of Le Minerale",
        "Our mission is to deliver pure,mineral-rich water while ensuring sustainability for future generation",
        "We belive great products start from great sources--that's why Le Minerale is committed to protecting nature's purity",
        "Success at Le Minerale comes from teamwork,integrity,and a shared vision to serve millions of Indonesians every day",
        "Innovation and care drive us forward--we're building a brand that reflect the essence of health and trust",
      ];
      const response = await fetch("https://randomuser.me/api?results=6", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(
        data.results.map((user: IUser, index: number) => {
          return {
            name: `${user.name.first}${user.name.last}`,
            photo: user.picture.large,
            role: roles[index],
            quotes: quotes[index],
            objectId: index,
          };
        })
      );
    }
    fetchUser();
  }, []);
  return (
    <main className="bg-white flex flex-col min-h-screen w-full text-white">
      <div>
        <Image
          src="/teams.png"
          alt="teams background"
          width={1800}
          height={200}
        />
      </div>
      <div className="w-full h-40 flex justify-center items-center border-b-1 border-gray-200">
        <p className="text-4xl text-[#68B8F3] font-bold underline">Teams</p>
      </div>
      <div className="bg-white  w-full h-full grid grid-cols-3 gap-10 p-10 px-40">
        {users.map((user: IUpdateUser) => (
          <div
            key={user.objectId}
            className="bg-[#35A4EC] h-100 flex flex-col gap-5 items-center p-4 justify-center rounded-2xl shadow-2xl hover:scale-105 transition"
          >
            <img
              src={user?.photo}
              alt="user"
              className="rounded-full shadow-xl"
            ></img>
            <p className="font-medium text-xl tracking-wide">{user.name}</p>
            <p className="rounded bg-[#35A4EC] px-5 py-0.5 font-bold underline">
              {user.role}
            </p>
            <p className="text-center text-lg font-sans text-white tracking-wide">
              {user.quotes}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
