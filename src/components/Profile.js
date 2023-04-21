import {useEffect, useState} from "react";
const Profile = (props) => {
    const[count,setCount] = useState(0);
    const[count2,setCount2]=useState(1);
    useEffect(()=>{
        //API Call
         console.log("use effect")
    })
     console.log("render then useeffect")
    return (
        <>
        {console.log("return in func comp")}
        <h1>this is profile functional comp page</h1>
        <h2>Name:{props.name}</h2>
        <h3>func comp count : {count} {count2}</h3>
        <button onClick={()=>{setCount(100);setCount2(2)}}>func SetCount</button>
        </>
    )
}
export default Profile;