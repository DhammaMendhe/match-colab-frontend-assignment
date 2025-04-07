import React from "react";
export default function AvatarCard({ avatar, name, age, hobbies, location }) {
  return (
    <div className="flex-col justify-center items-center border  rounded-md  border-red-500 w-80">
      <div className="flex flex-col items-center justify-center py-4 bg-white rounded-t-md">
        <img className="rounded-full w-20 hover:scale-110 hover:cursor-pointer " src={avatar} alt="" />
        <h2 className=" text-lg font-semibold py-1">{name}</h2>
        <h3 className=" text-lg font-semibold ">{age}</h3>
      </div>
      <div className="hobbies bg-white my-4 px-3 py-3">
        <h2 className="font-bold text-lg px-2 py-3">Hobbies</h2>
        <div className="">
          <ul className="">
            {hobbies.map((hobby, index) => (
              <li className="hobies border-b-2 my-2 p-2 " key={index}>
                <strong>{hobby.title} : </strong> <p>{hobby.description}</p>
               
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
      <div className="place bg-white rounded-b-md py-4 px-4 ">
      <strong>Place</strong>
        <h3>{location}</h3>
      </div>
    </div>
  );
}
