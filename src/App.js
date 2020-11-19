import React from 'react'
import './App.css'

import Home from './components/Home/Home'
import News from './components/News'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import {Route, Switch } from 'react-router-dom'

const Wrapper = styled.section`
  padding: 1em;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (     
    <> 
  <Navbar/>
    <Wrapper>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/news" component={News} />
      </Switch>
    </Wrapper>
    </>
  )
}

export default App
