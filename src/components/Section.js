import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
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
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description}&nbsp;<span>Touchless Delivery</span>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left cascade>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right cascade>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Fade>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/images/model-s.jpg") no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical aligns
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  image-rendering: pixelated;
  z-index: 16;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    margin-top: 8px;
    color: #757575;
    font-weight: bold;
  }
  span {
    border-bottom: 1px solid #000;
    color: #757575;
    &:hover {
      border-bottom: 1.5px solid #000;
      color: #000;  
      box-shadow: 0 1px 0 0 #000;
      transition: box-shadow all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      overflow: hidden;
    }
  }
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
  color: white;
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
  height: 50px;
  margin: 0 auto;
  display: flex;
  overflow-x: hidden;
  user-select: none;
  animation: animationDown infinite 1.5s;
  -webkit-animation: animationDown infinite 1.5s;
  -moz-animation: animationDown infinite 1.5s; /* Fx 5+ */
  -o-animation: animationDown infinite 1.5s; /* Opera 12+ */
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;

export default Section;
