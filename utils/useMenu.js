import { useState, useEffect } from "react";

const useMenu = (id) => {
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
    //   console.log(data);
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
    
    return {menuItems, restaurantName};
  
}

export default useMenu;
