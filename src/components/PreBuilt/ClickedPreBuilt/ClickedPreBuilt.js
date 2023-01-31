import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import ClickedPreBuiltDetails from "./ClickedPreBuiltDetails";
import PreBuiltItemForm from "../PreBuiltItem/PreBuiltItemForm/PreBuiltItemForm";
import CartContext from "../../../store/cart-context";
import Spinner from "../../UI/Spinner/Spinner";
import useHttp from "../../../hooks/use-http";
import classes from "./ClickedPreBuilt.module.css";

const ClickedPreBuilt = (props) => {
  const [prebuilt, setPrebuilt] = useState([]);
  const { isLoading, httpError, fetchData } = useHttp();
  const params = useParams();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const transformData = (data) => {
      const loadedPrebuilt = [];
      for (const key in data) {
        loadedPrebuilt.push({
          id: key,
          name: data[key].name,
          img: data[key].img,
          cpu: data[key].cpu,
          gpu: data[key].gpu,
          price: data[key].price,
          case: data[key].case,
          cpu_cooler: data[key].cpu_cooler,
          dimension: data[key].dimension,
          motherboard: data[key].motherboard,
          os: data[key].os,
          psu: data[key].psu,
          ram: data[key].ram,
          ssd: data[key].ssd,
        });
      }
      setPrebuilt(loadedPrebuilt);
    };
    fetchData(transformData);
  }, [fetchData]);

  const clickedItem = prebuilt.find((item) => item.name === params.prebuilt_id);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: clickedItem.id,
      name: clickedItem.name,
      img: clickedItem.img,
      cpu: clickedItem.cpu,
      gpu: clickedItem.gpu,
      price: clickedItem.price,
      amount: amount,
    });
  };

  let loadItem;

  if (clickedItem) {
    loadItem = (
      <Fragment>
        <div className={classes["img-container"]}>
          <img src={clickedItem.img} alt="test" />
        </div>
        <div className={classes["item-details"]}>
          <ClickedPreBuiltDetails item={clickedItem} />
          <PreBuiltItemForm
            onAddToCart={addToCartHandler}
            onShowCart={props.onShowCart}
            btnType="primary"
          />
        </div>
      </Fragment>
    );
  }
  return (
    <div className={`${classes.item} row`}>
      {isLoading && <Spinner color="#181719" />}
      {httpError && <div className="error">{httpError}</div>}
      {!isLoading && !httpError && loadItem}
    </div>
  );
};

export default ClickedPreBuilt;
