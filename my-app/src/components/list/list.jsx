import React from "react";
import { ListWrapper } from "./list.styled";
import Card from "../card/card";

export default function List(data) {
  return (
    <ListWrapper>
      {data.data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          place={item.place}
        />
      ))}
    </ListWrapper>
  );
}
