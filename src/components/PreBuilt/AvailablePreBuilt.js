import { useNavigation } from "react-router-dom";

import classes from "./AvailablePreBuilt.module.css";
import PreBuiltItem from "./PreBuiltItem/PreBuiltItem";
import Spinner from "../UI/Spinner/Spinner";

const AvailablePreBuilt = (props) => {
  const navigation = useNavigation();

  const preBuiltItem = props.prebuilt.map((item) => (
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
      <div className="row">
        <h1 className={classes.title}>Pre-Built PC</h1>
        <div className={classes.filter}>
          <span>Showing 1-9 of 20 results</span>
          <select className={classes.sort}>
            <option value="low">Sort by price: low to high</option>
            <option value="high">Sort by price: high to low</option>
          </select>
        </div>
        {navigation.state === "loading" && <Spinner />}
        {props.httpError && <div className="error">{props.httpMessage}</div>}
        {/* {!isLoading && !httpError && (
          <div className={classes.items}>{preBuiltItem}</div>
        )} */}
        <div className={classes.items}>{preBuiltItem}</div>
      </div>
    </div>
  );
};

export default AvailablePreBuilt;
