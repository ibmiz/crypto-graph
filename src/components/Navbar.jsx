import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  background: #0ac18e;
  font-family: Helvetica;
  font-weight: 300;
`

const Title = styled.div`
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;
  color: white;
`

const activeClassName = 'active';
const LinkElement = styled(NavLink).attrs({
  activeClassName,
})`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  &:hover{
    outline: none;
    text-shadow: #ffffff 0 0 10px;
  }
  &.${activeClassName} {
    text-decoration: none;
    color: ${props => props.theme.color }
  }
`

function Navbar() {
  return (
    <NavBarWrapper>
      <Title>Crypto Graph</Title>
        <LinkElement theme={{ color: "white" }} to="/home">Home</LinkElement>
        <LinkElement theme={{ color: "white" }} to="/news">News</LinkElement>
    </NavBarWrapper>
  )
}

export default Navbar
