import React from "react";
import { LocationList } from "./LocationSelectElements";

const LocationSelect = (props) => {
  const onClickHandler = (e) => {
    props.setLocation(e.target.dataset.location);
  };
  return (
    <LocationList>
      <li onClick={onClickHandler} data-location="Helsinki, Finland">
        <ion-icon name="location-sharp"></ion-icon>
        Helsinki, Finland
      </li>
      <li onClick={onClickHandler} data-location="Turku, Finland">
        <ion-icon name="location-sharp"></ion-icon>
        Turku, Finland
      </li>
      <li onClick={onClickHandler} data-location="Oulu, Finland">
        <ion-icon name="location-sharp"></ion-icon>
        Oulu, Finland
      </li>
      <li onClick={onClickHandler} data-location="Vaasa, Finland">
        <ion-icon name="location-sharp"></ion-icon>
        Vaasa, Finland
      </li>
    </LocationList>
  );
};

export default LocationSelect;
