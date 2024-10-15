
const ACTION_TYPES = {
    REMOVE_ITEM: "remove_item",
    INCREMENT: "increment",
    DECREMENT: "decrement",
    CLEAR_CART: "clear cart",
    GET_TOTAL: "get total",
    GET_AMOUNT: "get amount",
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.REMOVE_ITEM: {
            return { ...state, cart: state.cart.filter(item => item.id !== action.id )}
        }
        case ACTION_TYPES.INCREMENT: {
            let tmpCart = state.cart.map(item => {
                if (item.id === action.id) {
                    return {...item, amount: item.amount + 1}
                }
                return item;
            })
            return { ...state, cart: tmpCart }
        }
        case ACTION_TYPES.DECREMENT: {
            let tmpCart = state.cart.map(item => {
                if (item.id === action.id) {
                    return {...item, amount: item.amount - 1}
                }
                return item;
            })
            return { ...state, cart: tmpCart }
        }
        case ACTION_TYPES.CLEAR_CART: {
            return {...state, cart: []};
        }
        case ACTION_TYPES.GET_TOTAL: {
            var total = 0;
            var amount = 0;
            state.cart.map(item => {
                total += item.price * item.amount
                amount += item.amount;
            })
            return {...state, total: total.toFixed(2), amount: amount};
        }
    }

    throw new Error('no matching action type')
}

export {ACTION_TYPES, reducer};