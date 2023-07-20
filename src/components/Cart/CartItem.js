import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItemToCart, removeItemFromCart } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, totalPriceOfItem, price, id } = props.item;

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        title,
        price,
        id,
      })
    );
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  // Ensure price and total are numbers
  const formattedTotal =
    typeof totalPriceOfItem === "number" ? totalPriceOfItem.toFixed(2) : "0.00";
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "0.00";

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${formattedTotal}{" "}
          <span className={classes.itemprice}>( ${formattedPrice}/item )</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
