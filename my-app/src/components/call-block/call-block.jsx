import React from "react";
import {
  Wrapper,
  CallIcon,
  SpanWrapper,
  SmallDescription,
  SpanCallDescription,
} from "./call-block.styled";

import CallIconImage from "../../assets/Call2.svg";

export default function CallBlock() {
  return (
    <Wrapper>
      <CallIcon src={CallIconImage} />
      <SpanWrapper>
        <SmallDescription>Give us a call:</SmallDescription>
        <SpanCallDescription href="tel:8669233762">
          (866) 923-3762
        </SpanCallDescription>
      </SpanWrapper>
    </Wrapper>
  );
}
