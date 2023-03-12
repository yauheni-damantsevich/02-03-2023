import React from "react";
import {
  BlockWrapper,
  Image,
  ContentWrapper,
  Description,
} from "./block1.styled";
import Button1 from "../button1/button1";

export default function Block1(props) {
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
