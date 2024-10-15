import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import {ACTION_TYPES, reducer} from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = (id) => {
    dispatch({ type: ACTION_TYPES.INCREMENT, id: id})
  }
  const decrement = (id) => {
    dispatch({ type: ACTION_TYPES.DECREMENT, id: id})
  }
  const remove_item = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE_ITEM, id: id})
  }
  const clear_cart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.GET_TOTAL })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        state,
        increment,
        decrement,
        remove_item,
        clear_cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
