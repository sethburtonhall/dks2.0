import styled from "styled-components"

export const StyledNav = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 30px;
    top: 45px;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-burger-bars-hover {
    background: #a90000;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.8em;

    a {
      color: white;
    }
  }

  .bm-item {
    display: inline-block;
    box-shadow: none;
    font-family: Montserrat; sans-serif;
  }
  
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`
