import { css } from "@emotion/react/macro";
import React from "react";
import {
  MainWrapper,
  SectionWrapper,
  LargeDescription,
  Icon,
  SmallDescription,
  Span,
  LargeLogo,
} from "./section3.styled";

import Button1 from "../button1/button1";
import StarImage from "../../assets/Star-vector.svg";
import LargeLogoImage2 from "../../assets/LargeLogoOutline2.svg";

export default function Section3() {
  const buttonTitle = "Improve Your Health";
  return (
    <MainWrapper>
      <SectionWrapper>
        <LargeDescription>
          Our commitment to excellence is reflected in each of Atlas’ distinct
          services.
        </LargeDescription>
        <Button1 title={buttonTitle} />
      </SectionWrapper>
      <Icon src={StarImage} />
      <SmallDescription>
        As a leading consultant for the
        <Span>
          {` management, operations, acquisition, development & improvement `}
        </Span>
        of senior healthcare facilities, we specialize in assisting under
        performing facilities raise their standards of performance and outcomes.
      </SmallDescription>
      <LargeLogo src={LargeLogoImage2} />
    </MainWrapper>
  );
}
