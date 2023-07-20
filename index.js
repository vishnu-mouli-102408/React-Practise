import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import applogo from "./images/applogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="image" src={applogo} />
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const restaurant = {
  type: "restaurant",
  info: {
    resId: 19269047,
    name: "Australian Cafe Pizza",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/7/19269047/92e8c02f2598f72b6240b934606a67e3_o2_featured_v2.jpg",
    },
    o2FeaturedImage: {
      url: "https://b.zmtcdn.com/data/pictures/7/19269047/92e8c02f2598f72b6240b934606a67e3_o2_featured_v2.jpg",
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "3.8",
      rating_text: "3.8",
      rating_subtitle: "Good",
      rating_color: "9ACD32",
      votes: "4,245",
      subtext: "REVIEWS",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: null,
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "4.2",
          reviewCount: "302",
          reviewTextSmall: "302 Reviews",
          subtext: "302 Dining Reviews",
          color: "#1C1C1C",
          ratingV2: "4.2",
          subtitle: "DINING",
          sideSubTitle: "Dining Reviews",
          bgColorV2: {
            type: "green",
            tint: "700",
          },
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "3.4",
          reviewCount: "3,943",
          reviewTextSmall: "3,943 Reviews",
          subtext: "3,943 Delivery Reviews",
          color: "#E23744",
          ratingV2: "3.4",
          subtitle: "DELIVERY",
          sideSubTitle: "Delivery Reviews",
          bgColorV2: {
            type: "green",
            tint: "500",
          },
          newOnDelivery: false,
        },
      },
    },
    cft: {
      text: "\u20b9400 for two",
    },
    cfo: {
      text: "\u20b9100 for one",
    },
    locality: {
      name: "Shahganj, Agra",
      address: "Ward 88, Jaipur House, Shahganj, Agra",
      localityUrl: "agra/shahganj-restaurants",
    },
    timing: {
      text: "Closes in 1 hour 15 minutes",
      color: "#e5521f",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
        url: "https://www.zomato.com/agra/restaurants/pizza/",
        name: "Pizza",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
        url: "https://www.zomato.com/agra/restaurants/burger/",
        name: "Burger",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
        url: "https://www.zomato.com/agra/restaurants/fast-food/",
        name: "Fast Food",
      },
    ],
    should_ban_ugc: false,
    costText: {
      text: "\u20b9100 for one",
    },
  },
  order: {
    deliveryTime: "45 min",
    isServiceable: true,
    hasOnlineOrdering: true,
    actionInfo: {
      text: "Order Now",
      clickUrl: "/agra/australian-cafe-pizza-shahganj/order",
    },
  },
  gold: [],
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/agra/australian-cafe-pizza-shahganj/order",
    clickActionDeeplink: "",
  },
  distance: "3.9 km",
  isPromoted: false,
  promotedText: "",
  trackingData: [
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"e991e8a7-4df4-496f-a8c3-df2ad415b0cc","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19269047","element_type":"listing","rank":1}',
      event_names: {
        tap: '{"action":"tap"}',
        impression: '{"action":"impression"}',
      },
    },
  ],
  allCTA: [],
  promoOffer: "",
  checkBulkOffers: true,
  bulkOffers: [
    {
      text: "50% OFF up to 100",
      color: {
        tint: "500",
        type: "blue",
      },
    },
  ],
  isDisabled: false,
  bottomContainers: [
    {
      image: {
        url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
        aspect_ratio: 2.66666666667,
      },
      text: "Follows all Max Safety measures to ensure your food is safe",
    },
  ],
};

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={restaurant.info.image.url} />
      <h1>{restaurant.info.name}</h1>
      <h2>{restaurant.info.cuisine[0].name}</h2>
      <h3>{restaurant.info.rating.rating_text}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restro">
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
      <RestaurantCard restaurant={restaurant} />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
