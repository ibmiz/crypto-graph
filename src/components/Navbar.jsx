import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  background: #0ac18e;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
`

const Title = styled.div`
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;
  color: black;
`

const NavLink = styled(Link)`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
`

function Navbar() {
  return (
    <NavBarWrapper>
      <Title>Crypto Graph</Title>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
    </NavBarWrapper>
  )
}

export default Navbar
