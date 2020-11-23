import * as type from '../types'

let initalState = {
    priceHistory: [],
    storedPricing: [],
    loading: true,
    success: false,
    currentPrice: 0,
    error: null,
    priceLoading: false,
    priceSuccess: false
}
const bchReducer = (state = initalState, action) => {
    switch (action.type) {
        // Getting CurrentPrice History
        case type.BCH_PRICE_HISTORY_REQUESTED:
            return {...state, loading: true}
        case type.BCH_DATA_FETCH_SUCCEEDED:
            return {
                ...state,
                priceHistory: action.payload,
                storedPricing: action.payload,
                loading: false,
                success: true,
            }
        case type.BCH_DATA_FETCH_FAILED:
            return {...state, error: action.message, loading: false, success: false}

        // Change range on graph
        case type.CHANGE_RANGE_REQUESTED:
            return {
                ...state,
                priceHistory: state.storedPricing.slice(state.storedPricing.length - parseInt(action.payload)),
            }
        case type.CHANGE_RANGE_FAIL:
            return {...state, error: action.message, loading: false, success: false}

        // Get current pricing

        case type.BCH_CURRENT_PRICE_REQUESTED:
            return {...state, priceLoading: true}
        case type.BCH_CURRENT_PRICE_SUCCESS:
            return {
                ...state,
                currentPrice: action.currentPrice,
                priceLoading: false,
                priceSuccess: true
            }
        case type.BCH_CURRENT_PRICE_FAIL:
            return {...state, error: action.message, priceLoading: false, priceSuccess: false}
        default:
            return state
    }
}

export default bchReducer
