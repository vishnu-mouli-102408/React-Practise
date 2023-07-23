import RestaurantCard from "./RestaurantCard";
// import { restaurant } from "./Config";
import { useState, useEffect } from "react";

import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants){
    const data = restaurants.filter((rest)=> rest.info.name.toLowerCase().includes(searchInput.toLowerCase()));
    return data;
}


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
      getApiData();
    },[])

    async  function getApiData(){
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json);
      setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (!restaurants) return null;

  return (restaurants?.length === 0) ? <ShimmerUi/> : (
    <>
      <div className="container">
        <input
          className="search-input"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-button"
            onClick={()=>{
                const dataFilter = filterData(searchInput, restaurants);
                setFilteredRestaurants(dataFilter);
            }}
        >
          Search
        </button>
      </div>
      <div className="restro">
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
