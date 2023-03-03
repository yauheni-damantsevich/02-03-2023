import React from "react";
import { SectionWrapper, H2, LargeLogo } from "./section2.styled";

import Block1 from "../block1/block1";
import LargeLogoImage1 from "../../assets/LargeLogoOutline1.svg";

export default function Section2() {
  return (
    <SectionWrapper>
      <H2>Your Strategic Partner in Healthcare.</H2>
      <Block1 />
      <LargeLogo src={LargeLogoImage1} />
    </SectionWrapper>
  );
}
