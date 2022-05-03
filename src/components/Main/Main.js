import React from "react";
import { MainContainer, MainWrap, MainHead, CardWrap } from "./MainElements";
import data from "../../stays.json";
import Card from "../Card/Card";

const Main = () => {
  const createCard = (info) => {
    return <Card key={info.id} {...info} />;
  };
  return (
    <MainContainer>
      <MainWrap>
        <MainHead>
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </MainHead>
        <CardWrap>{data.map(createCard)}</CardWrap>
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
