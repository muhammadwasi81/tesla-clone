import React from "react";
import styled from "styled-components";
import "../index.css";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  BackgroundImg,
}) {
  return (
    <Wrap bgImage={BackgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        {/* <i class="fas fa-chevron-down"></i> */}
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical aligns
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #ffffff;
  display: flex;
  user-select: none;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  opacity: 0.85px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  margin: 0 auto;
  display: flex;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;

export default Section;