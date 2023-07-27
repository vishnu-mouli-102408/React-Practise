import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems[1].card.info.id);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
       <>
         <div className="flex justify-center">
            <h1 className="font-bold text-3xl p-2 m-3">Cart Items - {cartItems.length}</h1>
            <button className="p-2 m-5 rounded-xl bg-red-300" onClick={()=> handleClearCart()}>Clear Cart</button>
         </div>            
         <div className="flex flex-wrap justify-center">
            {cartItems.map((item) => <FoodItem key={item?.card?.info?.id} cartItem ={...item}/> )}
            
         </div>
        </>
    )
}

export default Cart;