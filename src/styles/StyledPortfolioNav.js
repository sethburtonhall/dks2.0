import styled from "styled-components"
import { device } from "./MediaQueries"

// import { rhythm, scale } from "../utils/typography"

export const StyledPortfolioNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  list-style: none;
  margin: 0;
  text-align: center;

  @media ${device.mobileUp} {
    grid-template-columns: repeat(auto-fill, 30%);
    justify-content: space-between;
    grid-gap: 1rem;
  }

  @media ${device.tabletUp} {
    grid-template-columns: repeat(auto-fill, 20%);
  }
`

export const StyledPortfolioNavItem = styled.li`
  list-style: none;
  padding: 0 8px;
  font-size: 10px;

  a {
    color: #999;
    box-shadow: none;
    font-weight: bold;
  }

  .active {
    border-bottom: 1px solid #000;
  }
`
