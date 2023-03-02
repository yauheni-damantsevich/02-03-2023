/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  Container,
  Section,
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

export default function Main() {
  return (
    <main>
      <Container>
        <Section>
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
                    <SpanCallDescription>(866) 923-3762</SpanCallDescription>
                  </SpanWrapper>
                </SmallWrapper>
              </SideWrapper>
            </Wrapper>
          </MainContent>
        </Section>
        <ArrowDown>
          <ArrowDownButtonIcon src={ArrowDownIcon} />
        </ArrowDown>
      </Container>
    </main>
  );
}
