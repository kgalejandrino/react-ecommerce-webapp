import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

import classes from "./AvailablePreBuilt.module.css";
import PreBuiltItem from "./PreBuiltItem/PreBuiltItem";
import Spinner from "../UI/Spinner/Spinner";

const AvailablePreBuilt = (props) => {
  const [prebuilt, setPrebuilt] = useState([]);

  const { isLoading, httpError, fetchData } = useHttp();

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
        });
      }
      setPrebuilt(loadedPrebuilt);
    };
    fetchData(
      {
        url: "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/prebuilt.json",
      },
      transformData
    );
  }, [fetchData]);

  const preBuiltItem = prebuilt.map((item) => (
    <PreBuiltItem
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.img}
      cpu={item.cpu}
      gpu={item.gpu}
      price={item.price}
      onShowCart={props.onShowCart}
    />
  ));

  return (
    <div className={classes.prebuilt}>
      <div className="row">
        <h1 className={classes.title}>Pre-Built PC</h1>
        <div className={classes.filter}>
          <span>Showing 1-9 of 20 results</span>
          <select className={classes.sort}>
            <option value="low">Sort by price: low to high</option>
            <option value="high">Sort by price: high to low</option>
          </select>
        </div>
        {isLoading && <Spinner />}
        {httpError && <div className="error">{httpError}</div>}
        {!isLoading && !httpError && (
          <div className={classes.items}>{preBuiltItem}</div>
        )}
      </div>
    </div>
  );
};

export default AvailablePreBuilt;
