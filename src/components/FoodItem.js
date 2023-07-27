import { IMAGE_CDN_URL } from "./Config";

const FoodItem = ({cartItem}) => {
    // console.log(cartItem);
    return (
        <div className="w-52 shadow-md p-3 m-3 bg-sky-200 rounded-md overflow-hidden">
          <img src={IMAGE_CDN_URL + cartItem?.card?.info?.imageId} />
          <h1 className="font-bold text-lg">{cartItem?.card?.info.name}</h1>
          <h2 className="text-base font-semibold">Rating: {cartItem?.card?.info?.ratings?.aggregatedRating?.rating}</h2>
          <h3 className="text-lg font-semibold">Rs. {cartItem?.card?.info?.price / 100}</h3>
        </div>
      );
}

export default FoodItem;