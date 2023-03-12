import React, { useEffect } from "react";
import { Button, TabWrapper } from "./tabs.styled";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = React.useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  useEffect(() => {
    props.state(activeTab);
  }, [activeTab]);
  return (
    <TabWrapper>
      <Button
        className={activeTab === "tab1" ? "active" : ""}
        onClick={handleTab1}
      >
        {props.title.tab1}
      </Button>
      <Button
        className={activeTab === "tab2" ? "active" : ""}
        onClick={handleTab2}
      >
        {props.title.tab2}
      </Button>
    </TabWrapper>
  );
}
