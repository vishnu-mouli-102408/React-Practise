import { IMAGE_CDN_URL } from "./Config";
// import { useContext } from "react";
// import userContext from "../../utils/userContext";

const RestaurantCard = ({ restaurant }) => {

  // const {user} = useContext(userContext);

  return (
    <div className="w-52 shadow-md p-3 m-3 bg-sky-200 rounded-md overflow-hidden">
      <img src={IMAGE_CDN_URL + restaurant?.info?.cloudinaryImageId} />
      <h1 className="font-bold text-lg">{restaurant?.info?.name}</h1>
      <h2>{restaurant?.info?.cuisines.join(",")}</h2>
      <h3 className="font-medium text-sm">Rating: {restaurant?.info?.avgRating}</h3>
      {/* <h4>{user.name}</h4> */}
    </div>
  );
};

export default RestaurantCard;
