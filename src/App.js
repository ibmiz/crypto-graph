import React from 'react'
import './App.css'

import Home from './components/Home/Home'
import News from './components/News'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import {Redirect, Route, Switch} from 'react-router-dom'


const Wrapper = styled.section`
  padding: 0.5rem;
  background-color: #1A1A1D;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: Helvetica;
`

function App() {
    return (
        <>
            <Navbar/>
            <Wrapper>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Redirect to="/home"/>
                </Switch>
            </Wrapper>
        </>
    )
}

export default App
