import styled from "styled-components";

export const CardContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 32px;
  font-size: 12px;
`;

export const CardImgWrap = styled.div`
  width: 100%;
  height: 238.35px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
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
`;
