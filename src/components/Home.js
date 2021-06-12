import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        BackgroundImg="solar-panel.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        BackgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        BackgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
       
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
