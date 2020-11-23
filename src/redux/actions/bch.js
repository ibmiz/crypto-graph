import * as type from '../types';

export function getBCHHistoryPrices() {
    return {
        type: type.BCH_PRICE_HISTORY_REQUESTED
    }
}

export function getBCHCurrentPrice() {
    return {
        type: type.BCH_CURRENT_PRICE_REQUESTED
    }
}

export function changeRange(range) {
    return {
        type: type.CHANGE_RANGE_REQUESTED,
        payload: range
    }
}