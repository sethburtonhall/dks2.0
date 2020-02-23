import React from 'react';

// Components
import PortfolioGridItem from "./portfolioGridItem";

// Styles
import { StyledPortfolioGrid } from "../styles/StyledPortfolioGrid";

const PortfolioGrid = () => {
  return (
    <StyledPortfolioGrid>
      <PortfolioGridItem />
    </StyledPortfolioGrid>
  )
}

export default PortfolioGrid