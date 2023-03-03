import React from "react";
import { Button } from "./button3.styled";

export default function Button3(props) {
  return <Button props={props.style}>{props.title}</Button>;
}
