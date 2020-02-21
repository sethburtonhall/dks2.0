import styled from "styled-components"
import { device } from "./MediaQueries"

export const StyledPortfolioGrid = styled.div`
         display: flex;
         flex-direction: column;
         justify-content: space-between;

         @media ${device.mobileUp} {
           flex-direction: row;
           flex-wrap: wrap;
         }

         &:after {
           content: "";
           flex: auto;
         }
       `
