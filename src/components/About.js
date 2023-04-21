import {Outlet} from "react-router-dom";
import React from "react";
import ProfileComp from "./Profile";
import Profile from "./ProfileClass";
// const About = () => {
//     return (
//         <div>
//             <h1>This is About Page</h1>
//             {/* <Outlet/> */}
//             <Profile name={"Naveen class"}/>
//             <ProfileComp name={"Naveen"}/>
//         </div>
//     )
// }
class About extends React.Component  {

constructor(props) {
    super(props);
    console.log("parent - constructor")
}
componentDidMount(){
    console.log("parent - componentidimount")
}
render(){
    console.log("parent - render ")
    return (
        <>
        <div>
         <h1>This is About Page</h1>
           {/* <Outlet/> */}
           <Profile name={"Naveen class"}/>
            <ProfileComp name={"Naveen"}/>
        </div>
        </>
    )
}
}
export default About;