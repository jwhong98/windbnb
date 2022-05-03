import styled from "styled-components";

export const CardContainer = styled.div`
  /* min-width: 350px; */
  /* max-width: 395px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  font-size: 12px;
  cursor: pointer;

  @media screen and (min-width: 744px) {
    font-size: 13px;
  }

  @media screen and (min-width: 878px) {
    font-size: 14px;
  }
`;

export const CardImgWrap = styled.div`
  width: 100%;

  @media screen and (min-width: 878px) {
    /* min-width: 412px; */
    /* height: 274.66px; */
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
`;

export const Type = styled.p`
  color: #828282;
`;

export const Rating = styled.p`
  margin-left: auto;
  color: #4f4f4f;
  display: flex;
  align-items: center;

  ion-icon {
    color: #eb5757;
    margin-right: 7.17px;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: #333333;

  @media screen and (min-width: 744px) {
    font-size: 15px;
  }

  @media screen and (min-width: 878px) {
    font-size: 16px;
  }
`;
