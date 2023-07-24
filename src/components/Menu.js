import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "./Config";
import ShimmerUi from "./ShimmerUI";

const Menu = () => {
  const { id } = useParams();

  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantname] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
    // const timer= setInterval(() => {
    //   console.log("Restaurant");
    // }, 1000);

    // return () => {
    //   clearInterval(timer)
    //   console.log("unmounted");
    // };
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6868159&lng=83.2184815&restaurantId=" +
        id
    );
    const json = await response.json();
    const data = json?.data;
    // console.log(data);
    const menuItems = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.map((x) => x.card?.card)
      ?.filter(
        (x) =>
          x["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(menuItems[0]?.itemCards[0]?.card?.info?.name);
    setMenuItems(menuItems);
    setRestaurantname(data);
  }

  return !restaurantName ? (
    <ShimmerUi />
  ) : (
    <div className="container menu">
      <div>
        <h1>Restaurant Id : {id}</h1>
        <h1> {restaurantName?.cards[0]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMAGE_CDN_URL +
            restaurantName?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurantName?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurantName?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3>
          Rating : {restaurantName?.cards[0]?.card?.card?.info?.avgRating}
        </h3>
      </div>
      <div>
        <h1>Menu items</h1>
        {/* <ul>{menuItems.map((item)=>{item?.itemCards.map((e)=>console.log(e?.card?.info?.name))})}</ul> */}
        <ul>
          {menuItems?.map((item) =>
            item?.itemCards?.map((e) => (
              <li key={e?.card?.info?.id}>{e?.card?.info?.name}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
