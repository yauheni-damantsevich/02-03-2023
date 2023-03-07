/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  Container,
  Section1,
  MainContent,
  H1,
  Wrapper,
  SideWrapper,
  Description,
  SmallDescription,
  TabWrapper,
  Tab,
  SmallWrapper,
  SpanWrapper,
  SpanDescription,
  SpanCallDescription,
  CallLogoIcon,
  ArrowDown,
  ArrowDownButtonIcon,
} from "./main.styled";

import CallIcon from "../../assets/Call.svg";
import ArrowDownIcon from "../../assets/Arrow-icon.svg";

import Section2 from "../../components/section2/section2";
import Section3 from "../../components/section3/section3";
import Section4 from "../../components/section4/section4";
import Section5 from "../../components/section5/section5";
import Section6 from "../../components/section6/section6";
import Section7 from "../../components/section7/section7";
import Section8 from "../../components/section8/section8";

export default function Main() {
  return (
    <main>
      <Container>
        <Section1>
          <MainContent>
            <H1>You’re the center of our world</H1>
            <Wrapper>
              <SideWrapper>
                <Description>
                  Atlas Healthcare Group is a leading provider of healthcare
                  management and consulting services, based in Central New
                  Jersey.
                </Description>
              </SideWrapper>
              <SideWrapper>
                <SmallDescription>
                  Our expertise in all things operational, clinical, and
                  financial, positions us as a strategic partner for assisted
                  living, long-term care and rehabilitation facilities. We work
                  with healthcare centers to create superior resident
                  experiences.
                </SmallDescription>
                <TabWrapper>
                  <Tab>Our Story</Tab>
                  <Tab
                    css={css`
                      color: #d6a43b;
                    `}
                  >
                    Join Our Team
                  </Tab>
                </TabWrapper>
                <SmallWrapper>
                  <CallLogoIcon src={CallIcon} />
                  <SpanWrapper>
                    <SpanDescription>Give us a call:</SpanDescription>
                    <SpanCallDescription href="tel:8669233762">
                      (866) 923-3762
                    </SpanCallDescription>
                  </SpanWrapper>
                </SmallWrapper>
              </SideWrapper>
            </Wrapper>
          </MainContent>
          <ArrowDown>
            <ArrowDownButtonIcon src={ArrowDownIcon} />
          </ArrowDown>
        </Section1>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </Container>
    </main>
  );
}
