import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import classes from "./ClickedPreBuilt.module.css";
import img from "../../../assets/pre-built1.png";
import useHttp from "../../../hooks/use-http";
import Spinner from "../../UI/Spinner/Spinner";

const ClickedPreBuilt = () => {
  const [prebuilt, setPrebuilt] = useState([]);
  const { isLoading, httpError, fetchData } = useHttp();

  const params = useParams();

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

  let loadItem;

  if (clickedItem) {
    loadItem = (
      <Fragment>
        <div className={classes["img-container"]}>
          <img src={img} alt="test" />
        </div>
        <div className={classes["item-details"]}>
          <h3
            className={classes.name}
          >{`${clickedItem.name} - ${clickedItem.cpu}, ${clickedItem.gpu}`}</h3>
          <p className={classes.price}>{`$${clickedItem.price}`}</p>
          <div className={classes.specs}>
            <li>
              <span>Motherboard:</span>
              <span>{clickedItem.motherboard}</span>
            </li>
            <li>
              <span>Ram:</span>
              <span>{clickedItem.ram}</span>
            </li>
            <li>
              <span>SSD:</span>
              <span>{clickedItem.ssd}</span>
            </li>
            <li>
              <span>Cpu Cooler:</span>
              <span>{clickedItem.cpu_cooler}</span>
            </li>
            <li>
              <span>Power Supply:</span>
              <span>{clickedItem.psu}</span>
            </li>
            <li>
              <span>Case:</span>
              <span>{clickedItem.case}</span>
            </li>
            <li>
              <span>Operating System:</span>
              <span>{clickedItem.os}</span>
            </li>
            <li>
              <span>Dimension:</span>
              <span>{clickedItem.dimension}</span>
            </li>
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <div className={`${classes.item} side-padding`}>
      {isLoading && <Spinner color="#181719" />}
      {httpError && <div className="error">{httpError}</div>}
      {!isLoading && !httpError && loadItem}
    </div>
  );
};

export default ClickedPreBuilt;
