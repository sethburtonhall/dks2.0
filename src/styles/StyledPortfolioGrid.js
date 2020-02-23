import styled from "styled-components"
import { device } from "./MediaQueries"

export const StyledPortfolioGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 33.3%);
  grid-gap: 1rem;
  justify-content: space-between;

  /* boring properties */
  list-style: none;
  /* margin: 0 auto; */

  /* @media ${device.mobileUp} {
    flex-direction: row;
    flex-wrap: wrap;
  } */
`
