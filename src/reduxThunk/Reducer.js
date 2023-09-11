import { GET_API_DATA, DELETE_CART_ITEM, LOGIN_DATA, ADD_ITEM_TO_CART, UPDATE_CART, CART_LIST } from "./ActionType";
const intialState = {
    products: [],
    selectedProduct: {},
    cartItems: [],
    cartList: [],
    token: '',
}

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case GET_API_DATA:
            return { ...state, products: payload }

        case ADD_ITEM_TO_CART:
            const exist = state.cartItems.find((x) => x.id === payload.id)
            let items = []
            if (exist) {
                items = state.cartItems.map((x) =>
                    x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
                )

            } else {
                items = [
                    ...state.cartItems,
                    {
                        ...payload,
                        qty: 1,
                    }
                ]
            }
            return { ...state, cartItems: items }


        case DELETE_CART_ITEM:
            return {
                ...state, cartItems: state.cartItems.filter(reminder => reminder.id !== payload)
            }

        case LOGIN_DATA:
            return { ...state, token: payload }
        case UPDATE_CART:

            const exists = state.cartItems.findIndex((x) => x.id === payload.id)
            const cartitems = [...state.cartItems]
            cartitems.splice(exists, 1, payload)

            return {
                ...state,
                cartItems: cartitems
            }
        default:
            return state;
    }
}




