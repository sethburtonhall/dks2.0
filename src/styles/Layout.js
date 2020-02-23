import styled from "styled-components"
import { device } from "./MediaQueries"

// Typography
import { rhythm } from "../utils/typography"

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(34)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;

  .header {
    margin-bottom: 15px;
    margin-top: 0;

    @media ${device.mobileUp} {
      grid-template-columns: repeat(auto-fill, 48%);
      justify-content: space-between;
      grid-gap: 1rem;
      margin-bottom: ${rhythm(1.5)};
    }
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  .logo {
    width: 50%;
  }
`

export const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
