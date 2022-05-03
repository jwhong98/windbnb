import React from "react";
import { LocationList } from "./LocationSelectElements";

const LocationSelect = () => {
  return (
    <LocationList>
      <li>
        <ion-icon name="location-sharp"></ion-icon>
        Helsinki, Finland
      </li>
      <li>
        <ion-icon name="location-sharp"></ion-icon>
        Turku, Finland
      </li>
      <li>
        <ion-icon name="location-sharp"></ion-icon>
        Oulu, Finland
      </li>
      <li>
        <ion-icon name="location-sharp"></ion-icon>
        Vaasa, Finland
      </li>
    </LocationList>
  );
};

export default LocationSelect;
