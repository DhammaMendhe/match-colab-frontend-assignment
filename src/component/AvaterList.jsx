import React, { useEffect, useState } from "react";
import avaterdata from "../dataf/data.json";
import AvatarCard from "./AvatarCard";
export default function AvaterList(props) {
  const [data, setdata] = useState([]);
  // const fetchdata = ()=>{
  // const data =
  // }

  return (
    <div className="flex flex-col justify-center items-center bg-amber-200">
      <div className="py-6 text-xl font-bold text-white"  >
        <h1  className="text-4xl font-bold text-white">Featured Profiles</h1>
      </div>

      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  py-9">
        {avaterdata.map((item, index) => {
          return (
            <div className="container ">
              <AvatarCard
                key={index}
                avatar={item.avatar}
                name={item.name}
                age={item.age}
                description={item.description}
                tagline={item.tagline}
                hobbies={item.hobbies}
                location={item.location}
              />
            </div>
          );
          // console.log("this is dat",item)
        })}
      </div>
    </div>
  );
}
