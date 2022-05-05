import React from "react";
import { ButtonWrap } from "./HeaderButtonsElements";

const HeaderButtons = (props) => {
  return (
    <ButtonWrap onClick={props.onToggle}>
      <button>
        {props.location === "" ? "Add location" : `${props.location}, Finland`}
      </button>
      <button className="guests">
        {props.guests > 0 ? props.guests : "Add"} guests
      </button>
      <button className="search">
        <ion-icon name="search"></ion-icon>
      </button>
    </ButtonWrap>
  );
};

export default HeaderButtons;
