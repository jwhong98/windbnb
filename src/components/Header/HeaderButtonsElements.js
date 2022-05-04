import styled from "styled-components";

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 6px 0 #0000001a;
  border-radius: 16px;

  button {
    width: 106px;
    padding: 10px;
    border: none;
    outline: none;
    border-right: 1px solid #f2f2f2;
    background: none;
    cursor: pointer;

    ::placeholder {
      font-size: 14px;
    }
  }

  button:first-child {
    width: 138px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .guests {
    color: #bdbdbd;
  }

  .search {
    width: 53px;
    padding: 10px;
    outline: none;
    border: none;
    background: none;

    ion-icon {
      color: #eb5757e5;
      font-size: 17px;
    }
  }
`;
