import React from "react";
import logo from "../../images/logo.svg";
import { HeaderContainer, HeaderWrap } from "./HeaderElements";
import HeaderButtons from "./HeaderButtons";

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <img src={logo} alt="logo" />
        <HeaderButtons
          onToggle={props.onToggle}
          location={props.location}
          guests={props.guests}
        />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
