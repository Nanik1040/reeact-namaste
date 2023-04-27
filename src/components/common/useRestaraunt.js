import {useState,useEffect} from "react";
import { FETCH_MENU_URL } from "../../constants";
const useRestaraunt = (id) => {
    const [resInfo,setResInfo]= useState(null);
    const[resMenu,setResMenu] = useState({});
    useEffect (()=>{
        console.log("use effect called")
        getRestarauntInfo();
    },[]);
    
    async function getRestarauntInfo() {
        console.log("api call")
     const data = await fetch( FETCH_MENU_URL+ id);
     const json = await data.json();
     console.log("lol")
     console.log(json.data);
     setResInfo(json.data.cards[0]?.card?.card.info);
 setResMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }
    const resRestarauntObj= {
        resInfo:resInfo,
        resMenu:resMenu

    }
    return resRestarauntObj;
}
export default useRestaraunt;