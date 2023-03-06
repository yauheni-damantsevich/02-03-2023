/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  SectionWrapper,
  H2,
  TabWrapper,
  LargeLogo,
  LargeLogo2,
} from "./section6.styled";

import Tabs from "../tabs/tabs";
import List from "../list/list";
import { data } from "../../assets/data.js";
import LargeLogoImage4 from "../../assets/LargeLogoOutline4.svg";
import LargeLogoImage5 from "../../assets/LargeLogoOutline5.svg";

export default function Section6() {
  const tab1Title = "NEW JERSEY";
  const tab2Title = "CONNECTICUT";
  const [activeContent, setActiveContent] = React.useState("tab1");
  const pullData = (data) => {
    setActiveContent(data);
  };
  const [showMore, setShowMore] = React.useState(false);
  const pullMoreData = (data) => {
    setShowMore(data);
  };
  console.log(showMore);
  return (
    <SectionWrapper>
      <H2>Our Facilities</H2>
      <TabWrapper>
        <Tabs
          title={{
            tab1: tab1Title,
            tab2: tab2Title,
          }}
          state={pullData}
        />
      </TabWrapper>
      {activeContent === "tab1" ? (
        <List state={pullMoreData} data={data} />
      ) : (
        <List state={pullMoreData} data={data} />
      )}
      <LargeLogo
        css={
          !showMore
            ? css`
                top: 368px;
              `
            : null
        }
        src={LargeLogoImage4}
      />
      <LargeLogo2
        css={
          !showMore
            ? css`
                display: none;
              `
            : null
        }
        src={LargeLogoImage5}
      />
    </SectionWrapper>
  );
}
