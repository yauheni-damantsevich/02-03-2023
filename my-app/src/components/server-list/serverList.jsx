/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import {
  ListWrapper,
  Button,
  ButtonText,
  ArrowDownButtonIcon,
} from "./serverList.styled";

import Card from "../card/card";

import ArrowDownIcon from "../../assets/Arrow-icon.svg";

export default function ServerList(data) {
  const [showMore, setShowMore] = React.useState(false);

  useEffect(() => {
    data.state(showMore);
  }, [showMore]);

  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const breakpoint = 1050;

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
                @media (max-width: 1450px) {
                  height: 1200px;
                }
                @media (max-width: 1050px) {
                  height: 400px;
                }
                @media (max-width: 768px) {
                  width: 120vw;
                  transform: translate(-50%, 0);
                }
              }
            `
          : null
      }
    >
      {showMore && width > breakpoint
        ? data.data.map((item) => (
            <Card
              key={item.id}
              image={item?.acf?.image}
              title={item.title.rendered}
              place={item.acf?.place}
            />
          ))
        : null}
      {!showMore && width > breakpoint
        ? data.data.map((item) => (
            <Card
              key={item.id}
              image={item?.acf?.image}
              title={item.title.rendered}
              place={item.acf?.place}
            />
          ))
        : null}
      {!showMore && width < breakpoint
        ? data.data.map((item) => (
            <Card
              key={item.id}
              image={item?.acf?.image}
              title={item.title.rendered}
              place={item.acf?.place}
            />
          ))
        : null}
      {showMore && width < breakpoint
        ? data.data.map((item) => (
            <Card
              key={item.id}
              image={item?.acf?.image}
              title={item.title.rendered}
              place={item.acf?.place}
            />
          ))
        : null}

      {!showMore ? (
        <Button onClick={() => setShowMore(true)}>
          <ButtonText>Show more</ButtonText>
          <ArrowDownButtonIcon src={ArrowDownIcon} />
        </Button>
      ) : null}
    </ListWrapper>
  );
}
