import React, { useEffect } from "react";
import axios from "axios";
import { SectionWrapper, H2 } from "./section4.styled";
import Block2 from "../block2/block2";

export default function Section4() {
  const [data, setData] = React.useState({});
  const fetchData = () => {
    axios
      .get("http://localhost:8000/index.php?rest_route=/wp/v2/pages/124")
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
      <Block2
        description={data?.acf?.description}
        image={data?.acf?.image}
        buttonText={data?.acf?.["button-text"]}
      />
    </SectionWrapper>
  ) : (
    <div>Loading...</div>
  );
}
