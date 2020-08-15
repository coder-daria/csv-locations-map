import styled from "styled-components";

import { ReactComponent  as  Location } from "./location.svg"

export const LocationSVG = styled(Location)`
  cursor: pointer;
  fill: #E13D00 !important;
  height: 50px;
  width: 50px;

  &:hover {
    fill: #BA3707 !important;
  }

  &:active {
    fill: #932902 !important;
  }
`;
