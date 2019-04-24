
const initialState = []

const SET_CART = 'SET_CART'

export function setCart(cart){
    return {
        type: SET_CART,
        payload: cart
    }
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CART:
            return [...action.payload]
        default:
            return state
    }
}