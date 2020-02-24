import styled from "styled-components"
import { device } from "./MediaQueries"

// import { rhythm, scale } from "../utils/typography"

export const StyledPortfolioNav = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const StyledPortfolioNavItem = styled.li`
  list-style: none;

  .active {
    background-color: green;
  }
`
