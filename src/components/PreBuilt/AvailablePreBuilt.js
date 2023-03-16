import classes from "./AvailablePreBuilt.module.css";
import PreBuiltItem from "./PreBuiltItem/PreBuiltItem";

const AvailablePreBuilt = (props) => {
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
        {/* {isLoading && <Spinner />}
        {httpError && <div className="error">{httpError}</div>} */}
        {/* {!isLoading && !httpError && (
          <div className={classes.items}>{preBuiltItem}</div>
        )} */}
        <div className={classes.items}>{preBuiltItem}</div>
      </div>
    </div>
  );
};

export default AvailablePreBuilt;
