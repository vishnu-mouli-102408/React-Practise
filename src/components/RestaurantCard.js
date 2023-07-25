import { IMAGE_CDN_URL } from "./Config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-52 shadow-md p-3 m-3 bg-sky-200 rounded-md overflow-hidden">
      <img src={IMAGE_CDN_URL + restaurant.data.cloudinaryImageId} />
      <h1 className="font-semibold">{restaurant.data.name}</h1>
      <h2>{restaurant.data.cuisines.join(",")}</h2>
      <h3>Rating: {restaurant.data.avgRatingString}</h3>
    </div>
  );
};

export default RestaurantCard;
