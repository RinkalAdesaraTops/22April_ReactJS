export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const BUY_BOOK = 'BUY_BOOK'

export const increment = ()=>{
    return {type: INCREMENT}
}

export const decrement = ()=>{
    return {type: DECREMENT}
}

export const buy_book = ()=>{
    return {type: BUY_BOOK}
}
