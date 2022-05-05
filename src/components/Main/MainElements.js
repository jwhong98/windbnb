import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 0 20px;
  margin-top: 37px;
  margin-bottom: 5rem;
`;

export const MainWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const MainHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    font-size: 18px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 744px) {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media screen and (min-width: 878px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
