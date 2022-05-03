import React from "react";
import { ButtonWrap } from "./HeaderButtonsElements";

const HeaderForm = (props) => {
  return (
    <ButtonWrap onClick={props.onToggle}>
      {/* <input type="text" placeholder="Helsinki, Finland" />
      <input type="text" placeholder="Add guests" /> */}
      <button>Helsinki, Finland</button>
      <button>Add guests</button>
      <button className="search">
        <ion-icon name="search"></ion-icon>
      </button>
    </ButtonWrap>
  );
};

export default HeaderForm;
