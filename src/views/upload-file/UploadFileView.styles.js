import styled from "styled-components";
import background from "../../assets/city.jpg";

const ACTIVE_BTN_COLOR = "#13204D";

export const Container = styled.div`
  align-items: center;
  background-image: url(${background});
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;


export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: white;
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
  font-weight: 300;
  height: 100px;
  outline: none;
  width: 300px;

  &:hover {
    box-shadow: 0px 0px 5px white;
    cursor: pointer;
  }

  &:active {
    border: 2px solid ${ACTIVE_BTN_COLOR};
    box-shadow: 0px 0px 5px ${ACTIVE_BTN_COLOR};
    color: ${ACTIVE_BTN_COLOR};
  }
`;