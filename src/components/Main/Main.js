import React from "react";
import { MainContainer, MainWrap, MainHead } from "./MainElements";
import data from "../../stays.json";
import Card from "../Card/Card";

const Main = () => {
  const createCard = (info) => {
    return <Card {...info} />;
  };
  return (
    <MainContainer>
      <MainWrap>
        <MainHead>
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </MainHead>
        {data.map(createCard)}
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
