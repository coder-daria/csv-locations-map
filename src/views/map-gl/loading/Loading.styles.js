import styled, { keyframes } from 'styled-components';

import { ReactComponent  as  Spinner } from '../../../assets/spinner.svg';

const rotate = keyframes`
 to {
   transform: rotate(360deg);
  }
`;

export const SpinnerSVG = styled(Spinner)`
  animation: ${rotate} 1.5s linear infinite; 
  height: 70px;
  width: 70px;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;
