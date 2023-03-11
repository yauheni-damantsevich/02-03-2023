/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import axios from "axios";

import {
  SectionWrapper,
  H2,
  TabWrapper,
  LargeLogo,
  LargeLogo2,
} from "./section6.styled";

import Tabs from "../tabs/tabs";
import List from "../list/list";
import ServerList from "../server-list/serverList";
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

  const pullMoreServerData = (data) => {
    setShowMore(data);
  };
  const [serverData, setServerData] = React.useState({}); // I can't load svg on server...
  const fetchData = () => {
    axios
      .get(
        "https://dev-atlas-healthcare.pantheonsite.io/index.php?rest_route=/wp/v2/pages/&parent=143"
      )
      .then((res) => {
        setServerData(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data && serverData ? (
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
        <List state={pullMoreData} data={data} /> // I left this data to demonstrate the layout. Because there is no time to create so much data on the server
      ) : (
        <ServerList state={pullMoreServerData} data={serverData} /> // And here is the data received from the server
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
  ) : (
    <div>Loading...</div>
  );
}
