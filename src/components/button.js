import React from "react"

// Styles
import { ButtonWrapper } from "../styles/Button"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

export default Button
