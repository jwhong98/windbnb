import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 6px 0 #0000001a;
  border-radius: 16px;

  input {
    width: 122px;
    padding: 10px;
    border: none;
    outline: none;
    border-right: 1px solid #f2f2f2;
  }

  input:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  input:last-child ::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }

  button {
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
