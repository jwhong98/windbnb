import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;

  p {
    color: #828282;
  }

  span {
    font-weight: 700;
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;
