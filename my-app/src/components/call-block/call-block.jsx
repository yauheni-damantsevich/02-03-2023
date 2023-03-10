import React, { useEffect } from "react";
import axios from "axios";
import {
  Wrapper,
  CallIcon,
  SpanWrapper,
  SmallDescription,
  SpanCallDescription,
} from "./call-block.styled";

import CallIconImage from "../../assets/Call2.svg";

export default function CallBlock() {
  const [telephoneData, setTelephoneData] = React.useState({});
  const fetchTelephoneData = () => {
    axios
      .get("http://localhost:8000/index.php?rest_route=/wp/v2/pages/160")
      .then((res) => {
        setTelephoneData(res.data);
      });
  };

  useEffect(() => {
    fetchTelephoneData();
  }, []);

  return (
    <Wrapper>
      <CallIcon src={CallIconImage} />
      <SpanWrapper>
        <SmallDescription>Give us a call:</SmallDescription>
        <SpanCallDescription href={`tel:${telephoneData?.acf?.tel}`}>
          {telephoneData?.acf?.["contact-number"]}
        </SpanCallDescription>
      </SpanWrapper>
    </Wrapper>
  );
}
