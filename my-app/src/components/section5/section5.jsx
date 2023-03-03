import React from "react";
import {
  SectionWrapper,
  H2,
  MainWrapper,
  WrapperColor,
  Wrapper,
  Image,
  Description,
  SmallWrapper,
  CallIcon,
  SpanWrapper,
  SmallDescription,
  SpanCallDescription,
  LargeLogo,
} from "./section5.styled";
import Button2 from "../button2/button2";
import TeamIcon from "../../assets/Team.svg";
import CallIconImage from "../../assets/Call2.svg";
import Button3 from "../button3/button3";
import LargeLogoImage3 from "../../assets/LargeLogoOutline3.svg";

export default function Section5() {
  const buttonTitle = "Join Our Team";
  return (
    <SectionWrapper>
      <H2>Supporting Your Health</H2>
      <MainWrapper>
        <WrapperColor>
          <Image src={TeamIcon} />
          <Button2 title={buttonTitle} />
        </WrapperColor>
        <Wrapper>
          <Description>
            We are committed to the delivery of highly individualized,
            client-centered care and providing the best possible experience to
            those we serve and the families who entrust their loved ones to us.
          </Description>
          <SmallWrapper>
            <CallIcon src={CallIconImage} />
            <SpanWrapper>
              <SmallDescription>Give us a call:</SmallDescription>
              <SpanCallDescription>(866) 923-3762</SpanCallDescription>
            </SpanWrapper>
          </SmallWrapper>
          <Button3 title={buttonTitle} />
        </Wrapper>
      </MainWrapper>
      <LargeLogo src={LargeLogoImage3} />
    </SectionWrapper>
  );
}
