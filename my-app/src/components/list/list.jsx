/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  ListWrapper,
  Button,
  ButtonText,
  ArrowDownButtonIcon,
} from "./list.styled";

import Card from "../card/card";

import ArrowDownIcon from "../../assets/Arrow-icon.svg";

export default function List(data) {
  const [showMore, setShowMore] = React.useState(false);
  const shortData = [...data.data.slice(0, 9)];
  console.log(data);
  data.state(showMore);
  return (
    <ListWrapper
      css={
        !showMore
          ? css`
              &::after {
                content: "";
                position: absolute;
                z-index: 2;
                top: 700px;
                left: 0;
                width: calc(100% + 88px);
                height: 400px;
                background: rgba(52, 54, 56, 0.9);
              }
            `
          : null
      }
    >
      {showMore
        ? data.data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              place={item.place}
            />
          ))
        : shortData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              place={item.place}
            />
          ))}
      {!showMore ? (
        <Button onClick={() => setShowMore(true)}>
          <ButtonText>Show more</ButtonText>
          <ArrowDownButtonIcon src={ArrowDownIcon} />
        </Button>
      ) : null}
    </ListWrapper>
  );
}
