import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  // background: linear-gradient(90deg, rgba(136,132,216,0.8) 5%, rgba(136,132,216,0) 95%);
  background: linear-gradient(180deg, rgba(136,132,216,0.8) 5%, rgba(40,44,52,1) 95%);
  background: #8884d8;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
`

const Title = styled.div`
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;
`

const NavLink = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
`

function Navbar() {
  return (
    <NavBarWrapper>
      <Title>Crypto Graph</Title>
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/news">News</Link>
      </NavLink>
    </NavBarWrapper>
  )
}

export default Navbar
