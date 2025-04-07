import React, { useEffect, useState } from "react";
import avaterdata from "../dataf/data.json";
import AvatarCard from "./AvatarCard";
export default function AvaterList(props) {
  const [data, setdata] = useState([]);
  // const fetchdata = ()=>{
  // const data =
  // }

  return (
    <div className="my-11 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-10 ">
      {avaterdata.map((item,index) => {
      return  <div className="container ">
        <AvatarCard 
        key={index} 
        avatar={item.avatar}
        name={item.name}
        age={item.age}
        description={item.description}
        tagline={item.tagline}
        hobbies={item.hobbies}
        location ={item.location}
        />
      </div>
        // console.log("this is dat",item)
      })}
    </div>
  );
}
