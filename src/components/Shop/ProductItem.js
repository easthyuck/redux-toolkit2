import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { name, price, desc, id } = props;
  const addToCartHandler = () => {
    // const addItem = { name: props.name, price: props.price, desc: props.desc };
    // dispatch(cartActions.addItemToCart(addItem));
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        desc,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.name}</h3>
          <div className={classes.price}>{props.price}원</div>
        </header>
        <p>{props.desc}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>장바구니 추가하기</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
