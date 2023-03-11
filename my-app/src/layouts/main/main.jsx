/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
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
import axios from "axios";

export default function Main() {
  const [data, setData] = React.useState({});

  // const h1 = "You’re the center of our world";
  // const description =
  //   "Atlas Healthcare Group is a leading provider of healthcare management and consulting services, based in Central New Jersey.";
  // const smallDescription =
  //   "Our expertise in all things operational, clinical, and financial, positions us as a strategic partner for assisted living, long-term care and rehabilitation facilities. We work with healthcare centers to create superior resident experiences.";

  const fetchData = () => {
    axios
      .get(
        "https://dev-atlas-healthcare.pantheonsite.io/index.php?rest_route=/wp/v2/pages/86"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const [telephoneData, setTelephoneData] = React.useState({});
  const fetchTelephoneData = () => {
    axios
      .get(
        "https://dev-atlas-healthcare.pantheonsite.io/index.php?rest_route=/wp/v2/pages/160"
      )
      .then((res) => {
        setTelephoneData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
    fetchTelephoneData();
  }, []);

  return data && telephoneData ? (
    <main>
      <Container>
        <Section1 background={data?.acf?.["image-background"]}>
          <MainContent>
            <H1>{data?.title?.rendered}</H1>
            <Wrapper>
              <SideWrapper>
                <Description>{data?.acf?.description}</Description>
              </SideWrapper>
              <SideWrapper>
                <SmallDescription>
                  {data?.acf?.["small-description"]}
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
                    <SpanCallDescription
                      href={`tel:${telephoneData?.acf?.tel}`}
                    >
                      {telephoneData?.acf?.["contact-number"]}
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
  ) : (
    <div>Loading...</div>
  );
}
