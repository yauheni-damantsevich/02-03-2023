import React from "react";
import {
  CardWrapper,
  Image,
  ContentWrapper,
  H3,
  Description,
} from "./card.styled";

export default function Card(props) {
  return (
    <CardWrapper>
      <Image src={props.image} />
      <ContentWrapper>
        <H3>{props.title}</H3>
        <Description>{props.place}</Description>
      </ContentWrapper>
    </CardWrapper>
  );
}
