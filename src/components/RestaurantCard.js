import {IMAGE_CDN_URL} from "./Config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={
          IMAGE_CDN_URL +
          restaurant.data.cloudinaryImageId
        }
      />
      <h1>{restaurant.data.name}</h1>
      <h2>{restaurant.data.cuisines.join(",")}</h2>
      <h3>Rating: {restaurant.data.avgRatingString}</h3>
    </div>
  );
};

export default RestaurantCard;
