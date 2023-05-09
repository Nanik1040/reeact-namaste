import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from "../constants"
import Shimmer from "./Shimmer";
import useRestaraunt from "./common/useRestaraunt";

export default  RestarauntMenu = () => {
    // const [resInfo,setResInfo]= useState(null);
    // const[resMenu,setResMenu] = useState({});
    const {id} = useParams();
    // useEffect (()=>{
    //     console.log("use effect called")
    //     getRestarauntInfo();
    // },[]);

const resRestarauntObj = useRestaraunt(id);

//     async function getRestarauntInfo() {
 
//      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.430431798250495&lng=78.32553472369908&restaurantId="+ id);
//      const json = await data.json();

// setResMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
//     }
return !resRestarauntObj.resInfo ? <Shimmer/> : (
    <>
    <div className="res-details">
        {console.log("return")}
        <div className="">
        <h1>Restaraunt details : {id}</h1>
        {/* <h2>{resInfo?.cards[0]?.card?.card?.info.name}</h2> */}
        <h2>{resRestarauntObj.resInfo.name}</h2>
                <span className="h-1 w-6" >
                    <img className="item-image h-1" src={IMG_CDN_URL + resRestarauntObj.resInfo.cloudinaryImageId}></img>
        </span>
        <h2>{resRestarauntObj.resInfo.areaName}</h2>
        <h2>{resRestarauntObj.resInfo.avgRating}</h2>
        </div>
        <div>
        <h1>Menu</h1>
{/* <h2>{resMenu}</h2> */}
        <ul>
        {    Object.values(resRestarauntObj.resMenu).map((item)=>(
            <li keys={item.card.info.id}>{item.card.info.name}</li>
        ))}
        </ul>
        </div>
        </div>
        </>
)
}