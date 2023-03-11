/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  CardWrapper,
  Image,
  ContentWrapper,
  H3,
  Description,
  Arrow,
} from "./card.styled";

import ArrowNextIcon from "../../assets/Arrow-next.svg";

export default function Card(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <CardWrapper>
      <Image src={props.image} />
      <ContentWrapper
        css={
          isHovered
            ? css`
                background: #ffffff;
              `
            : css`
                background: #d6a43b;
              `
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <H3
          css={
            isHovered
              ? css`
                  display: none;
                `
              : null
          }
        >
          {props.title}
        </H3>
        <Description
          css={
            isHovered
              ? css`
                  display: none;
                `
              : null
          }
        >
          {props.place}
        </Description>
        <Arrow
          css={
            isHovered
              ? null
              : css`
                  display: none;
                `
          }
          src={ArrowNextIcon}
        />
      </ContentWrapper>
    </CardWrapper>
  );
}
