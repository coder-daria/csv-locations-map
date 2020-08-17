import styled from 'styled-components';

export const StyledFileUpload = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  display: flex;
  font-size: 2rem;
  font-weight: 300;
  height: 100px;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  width: 300px;

  input {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 5px white;
  }

  &:active {
    box-shadow: 0px 0px 10px #fff;
  }
`;