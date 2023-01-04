import React from "react";

import classes from "./AvailablePreBuilt.module.css";
import PreBuiltItem from "./PreBuiltItem/PreBuiltItem";
import data from "../../DUMMY_DATA";

const AvailablePreBuilt = () => {
  const preBuiltItem = data.map((item) => (
    <PreBuiltItem
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.img}
      cpu={item.cpu}
      gpu={item.gpu}
      price={item.price}
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
