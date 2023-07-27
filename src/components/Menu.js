import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "./Config";
import ShimmerUi from "./ShimmerUI";
import useMenu from "../../utils/useMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";


const Menu = () => {
  const { id } = useParams();

  const { menuItems, restaurantName } = useMenu(id);
  // console.log(addItems);

  const dispatch = useDispatch();
  // const handleClick = () =>{
  //   dispatch(addItems("green"));
  // }

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  }

  return !restaurantName ? (
    <ShimmerUi />
  ) : (
    <div className="p-3 m-3">
      <div className="text-center">
        <h1 className="font-semibold py-2 text-2xl">Restaurant Id : {id}</h1>
        <h1 className="font-semibold py-2 text-lg">
          {" "}
          {restaurantName?.cards[0]?.card?.card?.info?.name}
        </h1>
        <img
          className="h-52 w-72 block ml-auto mr-auto"
          src={
            IMAGE_CDN_URL +
            restaurantName?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3 className="font-medium text-lg py-2">
          {restaurantName?.cards[0]?.card?.card?.info?.city}
        </h3>
        <h3 className="font-medium text-lg">
          {restaurantName?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3 className="font-medium text-lg">
          Rating : {restaurantName?.cards[0]?.card?.card?.info?.avgRating}
        </h3>
      </div>
      {/* <button className="p-2 m-2 bg-green-300 font-semibold text-xl" onClick={()=> handleClick()}>Add Items</button> */}
      <h1 className="font-semibold text-2xl text-center py-3">Menu items</h1>
      <div className="text-center">
        {/* <ul>{menuItems.map((item)=>{item?.itemCards.map((e)=>console.log(e?.card?.info?.name))})}</ul> */}
        <ul>
          {menuItems?.map((item) =>
            item?.itemCards?.map((e) => (
              <li key={e?.card?.info?.id}>{e?.card?.info?.name} - <button className="p-1 m-1 bg-green-200" onClick={()=> handleAddItems(e)}>Add</button></li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
