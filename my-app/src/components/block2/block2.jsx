import React from "react";
import {
  BlockWrapper,
  Image,
  ContentWrapper,
  Description,
} from "./block2.styled";
import Button2 from "../button2/button2";

export default function Block1(props) {
  return (
    <BlockWrapper>
      <ContentWrapper>
        <Description>
          Within only a few years, Atlas Healthcare Group has become the
          industry expert in healthcare management and acquisition, and are
          sought-after for their consulting services. Our experience has proven
          successful in our own facilities. Now, we put it to work for yours.
        </Description>
        <Button2 title={props.buttonText} />
      </ContentWrapper>
      <Image src={props.image} />
    </BlockWrapper>
  );
}
