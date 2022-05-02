import React from "react";
import logo from "../../images/logo.svg";
import { HeaderContainer, HeaderWrap } from "./HeaderElements";
import HeaderForm from "./HeaderForm";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <img src={logo} alt="logo" />
        <HeaderForm />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
