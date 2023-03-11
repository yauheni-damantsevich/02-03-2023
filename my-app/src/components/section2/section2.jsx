import React, { useEffect } from "react";
import axios from "axios";
import { SectionWrapper, H2, LargeLogo } from "./section2.styled";

import Block1 from "../block1/block1";
import LargeLogoImage1 from "../../assets/LargeLogoOutline1.svg";

export default function Section2() {
  const [data, setData] = React.useState({});
  const fetchData = () => {
    axios
      .get(
        "https://dev-atlas-healthcare.pantheonsite.io/index.php?rest_route=/wp/v2/pages/94"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <SectionWrapper background={data?.acf?.["image-background"]}>
      <H2>{data?.title?.rendered}</H2>
      <Block1
        description={data?.acf?.description}
        image={data?.acf?.image}
        buttonText={data?.acf?.["button-text"]}
      />
      <LargeLogo src={LargeLogoImage1} />
    </SectionWrapper>
  ) : (
    <div>Loading...</div>
  );
}
