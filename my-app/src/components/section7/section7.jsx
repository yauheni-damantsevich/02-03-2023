import React from "react";
import { SectionWrapper } from "./section7.styled";

import Tabs from "../tabs/tabs";
import Map from "../map/map";
import { data } from "../../assets/data";

export const Section7 = () => {
  const tab1Title = "NEW JERSEY";
  const tab2Title = "CONNECTICUT";
  const [activeContent, setActiveContent] = React.useState("tab1");
  const pullData = (data) => {
    setActiveContent(data);
  };
  return (
    <SectionWrapper>
      <Tabs
        title={{
          tab1: tab1Title,
          tab2: tab2Title,
        }}
        state={pullData}
      />
      <Map data={data} props={activeContent} />
    </SectionWrapper>
  );
};
