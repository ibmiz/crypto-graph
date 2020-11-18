import React from 'react'
import './App.css'

import Graph from './components/Graph'
import News from './components/News'
import Header from './components/Header'
import styled from 'styled-components'

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
    <Wrapper>
      <Header />
      <div className="container">
        <Graph />
        <News/>
      </div>
    </Wrapper>
  )
}

export default App
