import {IMAGE_CDN_URL} from "./Config";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={
          IMAGE_CDN_URL +
          restaurant.info.cloudinaryImageId
        }
      />
      <h1>{restaurant.info.name}</h1>
      <h2>{restaurant.info.cuisines.join(",")}</h2>
      <h3>Rating: {restaurant.info.avgRatingString}</h3>
    </div>
  );
};

export default RestaurantCard;
