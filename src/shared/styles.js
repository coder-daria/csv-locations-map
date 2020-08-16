import styled from 'styled-components';

import background from '../assets/city.jpg';

export const Container = styled.div`
  align-items: center;
  background-image: url(${background});
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Lora', serif;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
