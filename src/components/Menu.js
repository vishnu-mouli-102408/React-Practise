import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "./Config";
import ShimmerUi from "./ShimmerUI";
import useMenu from "../../utils/useMenu";

const Menu = () => {
  const { id } = useParams();

 const {menuItems, restaurantName} = useMenu(id);

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
