import { IMG_CDN_URL } from "../constants";

const RestarauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <>
      <div className="card">
        <img
          className="food-card-img"
          alt="burgerking logo"
          src={IMG_CDN_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{lastMileTravelString} </h6>
      </div>
    </>
  );
};
export default RestarauntCard;
