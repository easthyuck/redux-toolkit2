import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-http-c930c-default-rtdb.firebaseio.com/meals.json")
      .then((Response) => {
        const getItems = [];
        for (const key in Response.data) {
          getItems.push({
            id: key,
            name: Response.data[key].name,
            price: Response.data[key].price,
            desc: Response.data[key].description,
          });
        }

        setItems(getItems);
      });
  }, []);

  const itemList = items.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      desc={item.desc}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>즐겨 먹는 음식</h2>
      <ul>{itemList}</ul>
    </section>
  );
};

export default Products;
