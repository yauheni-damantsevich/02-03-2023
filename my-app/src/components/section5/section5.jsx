import React, { useEffect } from "react";
import axios from "axios";
import {
  SectionWrapper,
  H2,
  MainWrapper,
  WrapperColor,
  Wrapper,
  Image,
  Description,
  LargeLogo,
} from "./section5.styled";

import CallBlock from "../call-block/call-block";

import Button2 from "../button2/button2";
import TeamIcon from "../../assets/Team.svg";
import Button3 from "../button3/button3";
import LargeLogoImage3 from "../../assets/LargeLogoOutline3.svg";

export default function Section5() {
  const buttonTitle = "Join Our Team";
  const button2Title = "News";

  const [data, setData] = React.useState({});
  const fetchData = () => {
    axios
      .get("http://localhost:8000/index.php?rest_route=/wp/v2/pages/137")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <SectionWrapper background={data?.acf?.["image-background"]}>
      <H2>Supporting Your Health</H2>
      <MainWrapper>
        <WrapperColor>
          <Image src={TeamIcon} />
          <Button2 title={buttonTitle} />
        </WrapperColor>
        <Wrapper>
          <Description>{data?.acf?.description}</Description>

          <CallBlock />
          <Button3 title={data?.acf?.["button-text"]} />
        </Wrapper>
      </MainWrapper>
      <LargeLogo src={LargeLogoImage3} />
    </SectionWrapper>
  ) : (
    <div>Loading...</div>
  );
}
