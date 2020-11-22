import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Price from './Price'
import Buttons from './Buttons'
import Graph from './Graph'
import {getBCHHistoryPrices} from '../../redux/actions/bch'
import styled from "styled-components";

const Button = styled.button`
  background: #C10A3D;
  color: white;
  font-size: 0.75em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  &:hover{
    outline: none;
    text-shadow: #ffffff 0 0 10px;
  }
`


function Home() {

    const loading = useSelector((state) => state.bchReducer.loading)
    const success = useSelector((state) => state.bchReducer.success)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBCHHistoryPrices())
    }, [dispatch])

    return (
        <>
            <Price/>
            {loading && !success && <p>Loading Price History...</p>}
            {!loading && !success && (
                <div>
                    <p>Failed to load price history. Please try again</p>{' '}
                    <Button onClick={() => dispatch(getBCHHistoryPrices())}>Retry</Button>
                </div>
            )}
            {!loading && success && (
                <>
                    <Graph/>
                    <Buttons/>
                </>
            )}
        </>
    )
}

export default Home
