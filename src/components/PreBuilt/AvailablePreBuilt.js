import { useEffect, useState } from "react";

import classes from "./AvailablePreBuilt.module.css";
import PreBuiltItem from "./PreBuiltItem/PreBuiltItem";

const AvailablePreBuilt = (props) => {
  const [prebuilt, setPrebuilt] = useState([]);

  useEffect(() => {
    const fetchPrebuilt = async () => {
      const response = await fetch(
        "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/prebuilt.json"
      );
      const data = await response.json();

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
    fetchPrebuilt();
  }, []);

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
      <h1 className={classes.title}>Pre-Built PC</h1>
      <div className={`${classes.flex} side-padding`}>
        <span>Showing 1-9 of 20 results</span>
        <select className={classes.sort}>
          <option value="low">Sort by price: low to high</option>
          <option value="high">Sort by price: high to low</option>
        </select>
      </div>
      <div className={`${classes.items} side-padding`}>{preBuiltItem}</div>
    </div>
  );
};

export default AvailablePreBuilt;
