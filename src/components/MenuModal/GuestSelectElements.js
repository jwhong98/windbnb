import styled from "styled-components";

export const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;

  .age {
    font-size: 14px;
    font-family: "Mulish", sans-serif;

    h3 {
      font-size: inherit;
      font-family: inherit;
    }

    p {
      color: #bdbdbd;
      font-family: inherit;
    }

    .amountSelect {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 15px;
      font-family: inherit;

      ion-icon {
        padding: 5px;
        border: 1px solid #828282;
        color: #828282;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
