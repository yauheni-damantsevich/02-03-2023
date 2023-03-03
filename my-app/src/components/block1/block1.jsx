import React from "react";
import {
  BlockWrapper,
  Image,
  ContentWrapper,
  Description,
} from "./block1.styled";
import Button1 from "../button1/button1";
import ImageBuilding from "../../assets/Building-Stock image.png";

export default function Block1() {
  const buttonTitle = "Find Location Near You";
  return (
    <BlockWrapper>
      <Image src={ImageBuilding} />
      <ContentWrapper>
        <Description>
          Currently, Atlas Healthcare Group owns and operates a handful of
          skilled nursing and rehabilitation facilities strategically located
          throughout the state of New Jersey, one of which is the largest
          ventilator facility in the state.
        </Description>
        <Button1 title={buttonTitle} />
      </ContentWrapper>
    </BlockWrapper>
  );
}
