const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={restaurant.thumbnail} />
      <h1>{restaurant.title}</h1>
      <h2>{restaurant.brand}</h2>
      <h3>{restaurant.rating}</h3>
    </div>
  );
};

export default RestaurantCard;
