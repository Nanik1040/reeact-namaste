import {useEffect, useState} from "react";
const Profile = (props) => {
    const[count,setCount] = useState(0);
    const[count2,setCount2]=useState(1);
    useEffect(()=>{
        //API Call
        return()=>{
              //it will call when we are leaving the page
        }
         console.log("use effect")
    },[]  // //it will execute when we are updating state or props or force update()
    //if we are going to update the every time (timer or cricket live score ) , this function will be called by every subsequent render
    )
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