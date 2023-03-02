import React from "react";
import {
  Container,
  HeaderStyled,
  Logo,
  LogoIcon,
  NavBar,
  NavBarList,
  NavBarItem,
  NavBarLink,
  LinkedIn,
  LinkedInLogo,
} from "./header.styled";
import HeaderLogoIcon from "../../assets/logoHeader.svg";
import LinkedInLogoIcon from "../../assets/LinkedInIcon.svg";

export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <NavBar>
          <Logo>
            <LogoIcon src={HeaderLogoIcon} />
          </Logo>
          <NavBarList>
            <NavBarItem>
              <NavBarLink>ABOUT</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink>SERVICES</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink>LOCATIONS</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink>CAREERS</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink>CONTACT</NavBarLink>
            </NavBarItem>
          </NavBarList>
          <LinkedIn>
            <LinkedInLogo src={LinkedInLogoIcon} />
          </LinkedIn>
        </NavBar>
      </Container>
    </HeaderStyled>
  );
}
