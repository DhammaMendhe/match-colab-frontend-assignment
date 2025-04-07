import React from "react";
export default function AvatarCard({ avatar, name, age, hobbies, location }) {
  return (
    <div className="flex-col justify-center items-center ">
      <div className="flex flex-col items-center justify-center">
        <img className="rounded-full w-20 " src={avatar} alt="" />
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
      <div className="hobbies">
        <h2>hobbies sections</h2>
        <div>
          <ul>{hobbies.map((hobby,index) => (
            <li className="hobies" key={index}>
            <strong>{hobby.title} : </strong>
            <p>{hobby.description}</p>
           </li>
          ))}</ul>
          <div></div>
        </div>
      </div>
      <div className="place">
        <h3>{location}</h3>
      </div>
    </div>
  );
}
