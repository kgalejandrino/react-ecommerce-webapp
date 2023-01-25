import classes from "./CheckoutDetails.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CheckoutDetails = () => {
  return (
    <div className={classes.main}>
      <div className={classes["main-content"]}>
        <div className={classes["form-container"]}>
          <CheckoutHeader />
          <CheckoutForm />
        </div>
      </div>
      <div className={classes["side-content"]}>
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default CheckoutDetails;
