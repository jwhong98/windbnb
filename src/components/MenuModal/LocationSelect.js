import React from "react";
import { LocationList } from "./LocationSelectElements";

const LocationSelect = (props) => {
  const onClickHandler = (e) => {
    props.setLocation(e.target.dataset.location);
  };
  return (
    <LocationList>
      <li onClick={onClickHandler} data-location="Helsinki">
        <ion-icon name="location-sharp"></ion-icon>
        Helsinki, Finland
      </li>
      <li onClick={onClickHandler} data-location="Turku">
        <ion-icon name="location-sharp"></ion-icon>
        Turku, Finland
      </li>
      <li onClick={onClickHandler} data-location="Oulu">
        <ion-icon name="location-sharp"></ion-icon>
        Oulu, Finland
      </li>
      <li onClick={onClickHandler} data-location="Vaasa">
        <ion-icon name="location-sharp"></ion-icon>
        Vaasa, Finland
      </li>
    </LocationList>
  );
};

export default LocationSelect;
