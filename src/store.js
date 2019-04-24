// import { createStore, applyMiddleware } from 'redux';
// import userReducer from './ducks/userReducer';
// import promiseMiddleware from 'redux-promise-middleware';

// export default createStore(userReducer, applyMiddleware(promiseMiddleware));




import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './ducks/userReducer';
import cartReducer from './ducks/cartReducer'
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));