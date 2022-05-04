import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  background: #4f4f4f66;
`;

export const ModalContainer = styled.section`
  position: absolute;
  width: 100%;
  height: 90%;
  background: #fff;
  left: 0;
  right: 0;
  z-index: 31;
  padding: 1rem 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search {
    margin-top: auto;
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    color: #fff;
    padding: 15px 24px;
    border-radius: 16px;
    border: none;
    outline: none;
    background: #eb5757e5;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    ion-icon {
      margin-right: 11px;
      font-size: 20px;
    }
  }
`;

export const ModalHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 16px;

  p {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
  }
  ion-icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ModalSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 1px 6px 0px #0000001a;
  border-radius: 16px;

  button {
    width: 100%;
    background: none;
    /* border: 1px solid #f2f2f2; */
    padding: 12px 26px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    outline: none;
    border: none;
    cursor: pointer;

    span {
      font-family: "Mulish", sans-serif;
      font-weight: 800;
      font-size: 9px;
    }
  }

  .guests {
    border-radius: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #f2f2f2;
    p {
      color: #bdbdbd;
    }
  }
`;

export const SelectedDisplay = styled.div`
  width: 90%;
  margin-top: 36px;
`;
