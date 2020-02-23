import React from 'react';

// Gatsby
import { Link } from 'gatsby'

// Styles
import { StyledPortfolioGridItem } from "../styles/StyledPortfolioGridItem"

const PortfolioGridItem = () => {
  return (
    <StyledPortfolioGridItem>
      <Link to="content/portfolio">
        <img src="assets/barney.jpg" alt="Portfolio Cover" />
        <h4 className="portfolio-cat">Portfolio Category</h4>
      </Link>
    </StyledPortfolioGridItem>
  )
}

export default PortfolioGridItem