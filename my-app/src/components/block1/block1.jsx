import React from "react";
import {
  BlockWrapper,
  Image,
  ContentWrapper,
  Description,
} from "./block1.styled";
import Button1 from "../button1/button1";
import ImageBuilding from "../../assets/Building-Stock image.png";

export default function Block1(props) {
  // const buttonTitle = "Find Location Near You";

  return (
    <BlockWrapper>
      <Image src={props.image} />
      <ContentWrapper>
        <Description>{props.description}</Description>
        <Button1 title={props.buttonText} />
      </ContentWrapper>
    </BlockWrapper>
  );
}
