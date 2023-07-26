import RestaurantCard from "./RestaurantCard";
// import { restaurant } from "./Config";
import { useState, useEffect } from "react";

import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/utils";
import useOffline from "../../utils/useOffline";




const Body = () => {
  const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
      getApiData();
    },[])

    async  function getApiData(){
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json);
      const y = json?.data?.cards?.filter((item)=> item?.card?.card?.gridElements?.infoWithStyle["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle").map((item)=> item?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const z = y.flat();
      // console.log(z);
      setRestaurants(z);
      setFilteredRestaurants(z);
      const x = json.data.cards.filter((item)=>item.cardType === "seeAllRestaurants")
      // setRestaurants(x[0].data.data.cards);
      // setFilteredRestaurants(x[0].data.data.cards);
      // console.log(x[0].data.data.cards);
      } catch (error) {
        console.log(error.message);
      }
    }

   const online = useOffline();

   if(!online) {
      return <h1>Oops something went wrong!!</h1>
   }

    if (!restaurants) return null;

  return (restaurants?.length === 0) ? <ShimmerUi/> : (
    <>
      <div className="p-4 text-center">
        <input
          className="p-2 m-1 focus:bg-blue-100"
          placeholder="Enter here"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-sky-500 hover:bg-sky-700 p-2 rounded-3xl text-white font-semibold"
            onClick={()=>{
                const dataFilter = filterData(searchInput, restaurants);
                setFilteredRestaurants(dataFilter);
            }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        { (filteredRestaurants?.length === 0) ? <h1>No Restaurants found your match</h1> : filteredRestaurants.map((restaurant)=>{
            return (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard restaurant={...restaurant}  /></Link>
            )
          })}
      </div>
    </>
  );
};

export default Body;
