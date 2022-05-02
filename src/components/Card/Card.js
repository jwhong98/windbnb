import React from "react";
import Badge from "../Badge/Badge";
import {
  CardContainer,
  CardImgWrap,
  CardInfo,
  Type,
  Rating,
  Title,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <CardImgWrap>
        <img src={props.photo} alt="Listing" />
      </CardImgWrap>
      <CardInfo>
        {props.superHost ? <Badge /> : ""}
        <Type>
          {props.type} . {props.beds} beds
        </Type>
        <Rating>
          <ion-icon name="star"></ion-icon>
          {props.rating}
        </Rating>
      </CardInfo>
      <Title>{props.title}</Title>
    </CardContainer>
  );
};

export default Card;
