import { useState, useEffect } from "react";
import { restarauntList } from "../constants";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "./common/useOnline";
// no key(is not acceptable ) <<<<<<<<<<<<< index(use only if you don't have anything) << unique key(bext practice)

function filterData(searchText, restaraunts) {
  console.log(searchText);
  console.log(restaraunts);
  const filterDatas = restaraunts.filter((restaraunt) =>
    restaraunt?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filterDatas);
  return filterDatas;
}
const BodyComponent = () => {
  const [allRestaraunts, setAllRestaraunts] = useState([]);
  const [restaraunts, setRestaraunts] = useState(restarauntList);
  const [searchText, setSearchText] = useState("");
  //empty dependency array => once after render
  //dependency array [searchtext] => once after initial render + every time after render (my search text changes)
  useEffect(() => {
    getRestaraunts();
  }, []);
  // const isOnline = useOnline();
  // if(!isOnline){
  //   return <><h1>offline , please check your network connection</h1></>
  // }
  async function getRestaraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.430431798250495&lng=78.32553472369908&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining  ?
    setAllRestaraunts(json?.data?.cards[2]?.data?.data?.cards);
    setRestaraunts(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }
  console.log("render");
  //early render - not render component
  if (!allRestaraunts) return null;
  if (restarauntList.length === 0)
    return <h1>No restaraunt match your filter</h1>;
  return allRestaraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            console.log("entering input");
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("clicked");
            //need to filter the data
            //update the state - restaruants
            const data = filterData(searchText, allRestaraunts);
            setRestaraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaraunt-list">
        {restaraunts.map((restaraunt) => {
          return (
            <Link to={"/restaraunt/" + restaraunt.data.id}
            key={restaraunt.data.id}
            >
            <RestarauntCard {...restaraunt?.data} key={restaraunt?.data?.id} />
            </Link>
          );
        })}
        {/* <RestarauntCard {...restarauntList[0].data} />
        <RestarauntCard {...restarauntList[1].data} />
        <RestarauntCard {...restarauntList[2].data} />
        <RestarauntCard {...restarauntList[3].data} />
        <RestarauntCard {...restarauntList[4].data} />
        <RestarauntCard {...restarauntList[5].data} /> */}
      </div>
    </>
  );
};
export default BodyComponent;
