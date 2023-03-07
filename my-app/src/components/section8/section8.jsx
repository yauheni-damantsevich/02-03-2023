import React from "react";

import {
  SectionWrapper,
  LogoIcon,
  H2,
  ContentWrapper,
  ContactInfo,
  Hr,
  StayConnectedButton,
  StayConnectedIcon,
  StayConnectedText,
  AddressBlock,
  AddressIconImage,
  Description,
  Copyright,
  LargeLogo,
} from "./section8.styled";

import CallBlock from "../call-block/call-block";
import ContactForm from "../contact-form/contactForm";

import HeaderLogoIcon from "../../assets/logoHeader.svg";
import PointIcon from "../../assets/PointIcon.svg";
import LinkedInLogoIcon from "../../assets/LinkedInIcon.svg";
import LargeLogoImage6 from "../../assets/LargeLogoOutline6.svg";

export default function Section8() {
  const description =
    "1815 Lakewood Road\nToms River, NJ 08753\n(732) 491-9216";

  return (
    <SectionWrapper>
      <LogoIcon src={HeaderLogoIcon} />
      <H2>We’d love to hear from you!</H2>
      <ContentWrapper>
        <ContactForm />
        <ContactInfo>
          <CallBlock />
          <Hr />
          <StayConnectedButton>
            <StayConnectedIcon src={LinkedInLogoIcon} />
            <StayConnectedText>Stay connected</StayConnectedText>
          </StayConnectedButton>
          <Hr />
          <AddressBlock>
            <AddressIconImage src={PointIcon} />
            <Description>{description}</Description>
          </AddressBlock>
        </ContactInfo>
      </ContentWrapper>
      <Copyright>Copyright 2023 Atlas Healthcare</Copyright>
      <LargeLogo src={LargeLogoImage6} />
    </SectionWrapper>
  );
}
