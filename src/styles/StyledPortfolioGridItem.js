import styled from "styled-components"
import { device } from "./MediaQueries"

export const StyledPortfolioGridItem = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media ${device.mobileUp} {
    width: 48%;
  }

  @media ${device.tabletUp} {
    width: 31.3%;
  }

  a {
    box-shadow: none;
    color: black;
  }

  img {
    width: 100%;
    margin: 0 auto 5px;
  }

  .portfolio-cat {
    margin: 0;
    text-align: center;
  }
`
