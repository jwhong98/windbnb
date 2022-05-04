import React, { useState } from "react";
import ReactDOM from "react-dom";
import GuestSelect from "./GuestSelect";
import LocationSelect from "./LocationSelect";
import {
  BackDrop,
  ModalContainer,
  ModalHead,
  ModalSelect,
  SelectedDisplay,
} from "./MenuModalElements";

const MenuModal = (props) => {
  const [selected, setSelected] = useState("");

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onToggle();
  };
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackDrop onClick={props.onToggle} />
          <ModalContainer>
            <ModalHead>
              <p>Edit your search</p>
              <ion-icon name="close" onClick={props.onToggle}></ion-icon>
            </ModalHead>
            <ModalSelect>
              <button value="location" onClick={selectHandler}>
                <span>LOCATION</span>
                <p>{props.location}, Finland</p>
              </button>
              <button value="guest" className="guests" onClick={selectHandler}>
                <span>GUESTS</span>
                <p>{props.guests > 0 ? props.guests : "Add"} guests</p>
              </button>
            </ModalSelect>
            <SelectedDisplay>
              {selected === "location" && (
                <LocationSelect setLocation={props.setLocation} />
              )}
              {selected === "guest" && (
                <GuestSelect setGuests={props.setGuests} />
              )}
            </SelectedDisplay>
            <button className="search" type="submit" onClick={submitHandler}>
              <ion-icon name="search"></ion-icon> Search
            </button>
          </ModalContainer>
        </>,
        portalElement
      )}
    </>
  );
};

export default MenuModal;
