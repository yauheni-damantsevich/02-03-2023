import React from "react";
import { Button } from "./button2.styled";

export default function Button2(props) {
  return <Button props={props.style}>{props.title}</Button>;
}
