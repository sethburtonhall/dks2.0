import styled from "styled-components"

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

  h1 {
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    margin-top: 0;
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
