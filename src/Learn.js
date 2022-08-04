import React, { useEffect, useState } from "react";

export const Learn = ({name , eventHandler}) => {
  const [profile, setprofile] = useState({ firstname : '', lastname:'',age:''});
  useEffect(() => {
      
    // setname("Sajjad")
  }, [])
  

//   const NameChange = ()=>{
//     // setname("Arsalan")
//   }
  return (
    <>
        <input value={profile.firstname} placeholder="first name" onChange={(e)=>setprofile({...profile,firstname : e.target.value})} />
        <input value={profile.lastname} placeholder="last name" onChange={(e)=>setprofile({...profile,lastname : e.target.value})} />
        <input value={profile.age}  placeholder="age" onChange={(e)=>setprofile({...profile,age : e.target.value})} />
      <div>{profile.firstname}</div>
      <div>{profile.lastname}</div>
      <div>{profile.age}</div>
      {/* <div>{name}</div> */}
      <button onClick={()=>eventHandler("Arsalan")}>Change</button>
    </>
  );
};
