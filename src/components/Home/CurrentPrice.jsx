import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getBCHCurrentPrice} from '../../redux/actions/bch'

import {insertDecimal} from '../../controllers/dataHandler'

import styled from 'styled-components'

const PriceTitle = styled.h2`
color: ${props => props.theme.main};
margin: 0;
`

function CurrentPrice() {
    const currentPrice = useSelector((state) => state.bchReducer.currentPrice)
    const priceLoading = useSelector((state) => state.bchReducer.priceLoading)
    const priceSuccess = useSelector((state) => state.bchReducer.priceSuccess)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBCHCurrentPrice())
    }, [dispatch])
    return (
        <PriceTitle theme={{main: "white"}}>
            Current BCH Price: {priceLoading && priceSuccess ? '...' : '$' + insertDecimal(currentPrice).toString()}
        </PriceTitle>
    )
}

export default CurrentPrice
