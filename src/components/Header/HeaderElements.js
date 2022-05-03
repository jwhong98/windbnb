import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 120px;
  padding: 1rem 20px 0 20px;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 744px) {
    flex-direction: row;
  }

  img {
    align-self: flex-start;
    cursor: pointer;

    @media screen and (min-width: 744px) {
      align-self: center;
    }
  }
`;
