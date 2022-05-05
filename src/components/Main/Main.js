import React, { useEffect, useState } from "react";
import { MainContainer, MainWrap, MainHead, CardWrap } from "./MainElements";
import data from "../../stays.json";
import Card from "../Card/Card";

const Main = (props) => {
  const allListings = data;
  const [filteredList, setfilteredList] = useState(allListings);

  useEffect(() => {
    if (props.location === "") {
      setfilteredList(allListings);
    } else {
      setfilteredList(
        allListings.filter((listing) => listing.city === props.location)
      );
    }
  }, [allListings, props.location]);

  const createCard = (info) => {
    return <Card key={info.id} {...info} />;
  };
  return (
    <MainContainer>
      <MainWrap>
        <MainHead>
          <h1>Stays in Finland</h1>
          <p>{filteredList.length > 12 ? "12+" : filteredList.length} stays</p>
        </MainHead>
        <CardWrap>{filteredList.map(createCard)}</CardWrap>
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
