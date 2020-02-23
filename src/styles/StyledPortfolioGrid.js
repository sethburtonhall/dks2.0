import styled from "styled-components"
import { device } from "./MediaQueries"

export const StyledPortfolioGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  list-style: none;
  margin: 0;

  @media ${device.mobileUp} {
    grid-template-columns: repeat(auto-fill, 48%);
    justify-content: space-between;
    grid-gap: 1rem;
  }

  @media ${device.tabletUp} {
    grid-template-columns: repeat(auto-fill, 30%);
  }
`
