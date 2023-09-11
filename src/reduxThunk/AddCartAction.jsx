import { CART_DETAIL, CART_LIST, DELETE_CART_ITEM, COUNT_ITEM, UPDATE_CART, ADD_ITEM_TO_CART } from "./ActionType"
import axios from "axios"


export const addToCarts = (data, token) => async (dispatch) => {
    const res = await axios.post('http://localhost:3030/api/cart/create', data, { headers: { 'api-access-token': token } })
    console.log(res.data.message, '::::::')
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data.message.data

    })
}


export const updateCart = (data, token) => async (dispatch) => {
    const res = await axios.put('http://localhost:3030/api/cart/update_cart', data, { headers: { 'api-access-token': token } })

    dispatch({
        type: UPDATE_CART,
        payload: res.data.message.data
    })
}

export const delcartitem = (data) => async (dispatch) => {
    console.log(data, "DATATATATATATA")
    const res = await axios.delete(`http://localhost:3030/api/cart/cart_delete/${data.id}`, { headers: { 'api-access-token': data.token } })

    console.log(res.data,)
    dispatch({
        type: DELETE_CART_ITEM,
        payload: data.id
    })
}


