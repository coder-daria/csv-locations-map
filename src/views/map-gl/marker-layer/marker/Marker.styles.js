import styled from 'styled-components';
import { Marker } from 'react-map-gl';

import { ReactComponent as Location } from '../../../../assets/location.svg';

export const MapGLMarker = styled(Marker)`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50px;
`;

export const LocationSVG = styled(Location)`
  cursor: pointer;
  fill: ${({ fill }) => fill} !important;
  height: 50px;
  width: 50px;
`;

export const Address = styled.span`
  font-size: 1.2rem;
`;
