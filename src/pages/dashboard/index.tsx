
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar02 from "../../components/navebars/navbar02";
import router from "next/router";
import WatchCard from "../../components/watchcard";


type UserInfo = {
  name: string;
};

export default function Dashboard() {
  // const [userInfo, setUserInfo] = useState<UserInfo>({ name: ""});

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .get("http://localhost:8080/users/info", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
         
  //         setUserInfo({ name: response.data.authenticatedUserName });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <>
      <div className="min-h-full">
        <Navbar02 />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {/* Olá, {userInfo.name.charAt(0).toUpperCase() + userInfo.name.slice(1)} */}
            </h1>
            <h2 className="text-xl regular tracking-tight text-gray-900">
              É bom ter você de volta!
            </h2>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
             <WatchCard videoTitle={undefined} videoThumbnailUrl={undefined} videoLink="https://event-plataform-pied-two.vercel.app/event"/>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}