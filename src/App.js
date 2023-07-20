import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { showNotification } from "./store/uiSlice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notificationData = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      try {
        dispatch(
          showNotification({
            status: "Pending",
            title: "Sending...",
            message: "Sending cart data!",
          })
        );

        const response = await fetch(
          "https://reduxcart-5a1f5-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Sending cart data failed!");
        }

        dispatch(
          showNotification({
            status: "success",
            title: "Success!",
            message: "Cart data sent successfully!",
          })
        );
      } catch (error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
    };
    // so when the application started.To prevent sending the cart data at the initial application load,
    //  they introduce a variable isInitial, which they set to true outside the component function.
    // If it's the initial load, the sendCartData function is returned early without executing the HTTP request.
    //  After the first run, isInitial is set to false, ensuring the cart data is not sent again.
    // With that addition made here,
    // if I reload we don't see the notification.
    // We're not sending that cart request
    // but if I add something to my cart,
    // we have the pending state
    // and then the success state, and that works just fine.
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
