import RestaurantCard from "./RestaurantCard";
import { restaurant } from "./Config";
import { useState } from "react";

function filterData(searchInput, restaurant){
    const data = restaurant.filter((rest)=> rest.title.includes(searchInput));
    return data;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurant);

  return (
    <>
      <div className="search-bar">
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
                setRestaurants(dataFilter);
            }}
        >
          Search
        </button>
      </div>
      <div className="restro">
        {restaurants.map((restaurant)=>{
            return (<RestaurantCard restaurant={...restaurant} key={restaurant.id} />)
          })}
        {/* <RestaurantCard
          restaurant={restaurant.products[0]}
          key={restaurant.products.id}
        /> */}
      </div>
    </>
  );
};

export default Body;
