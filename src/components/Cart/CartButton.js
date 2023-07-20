import classes from "./CartButton.module.css";
import { toggle } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
