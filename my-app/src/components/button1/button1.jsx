import React from "react";
import { Button } from "./button1.styled";

export default function Button1(props) {
  return <Button props={props.style}>{props.title}</Button>;
}
