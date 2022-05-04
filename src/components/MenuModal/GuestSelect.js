import React, { useState, useEffect } from "react";
import { GuestContainer } from "./GuestSelectElements";

const GuestSelect = (props) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  useEffect(
    () => props.setGuests(adultCount + childCount),
    [adultCount, childCount]
  );

  const addHandler = (e) => {
    if (e.target.dataset.age === "adult") {
      setAdultCount(adultCount + 1);
    } else {
      setChildCount(childCount + 1);
    }
    // props.setGuests(adultCount + childCount);
  };

  const removeHandler = (e) => {
    if (e.target.dataset.age === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (childCount > 0) {
      setChildCount(childCount - 1);
    }
    // props.setGuests(adultCount + childCount);
  };
  return (
    <GuestContainer>
      <div className="age">
        <h3>Adults</h3>
        <p>Ages 13 or above</p>
        <div className="amountSelect">
          <ion-icon
            name="remove-outline"
            data-age="adult"
            onClick={removeHandler}
          ></ion-icon>
          {adultCount}
          <ion-icon
            name="add-outline"
            data-age="adult"
            onClick={addHandler}
          ></ion-icon>
        </div>
      </div>
      <div className="age">
        <h3>Children</h3>
        <p>Ages 2-13</p>
        <div className="amountSelect">
          <ion-icon
            name="remove-outline"
            data-age="child"
            onClick={removeHandler}
          ></ion-icon>
          {childCount}
          <ion-icon
            name="add-outline"
            data-age="child"
            onClick={addHandler}
          ></ion-icon>
        </div>
      </div>
    </GuestContainer>
  );
};

export default GuestSelect;
