import axios from "axios"
import { GET_API_DATA, PRODUCT_DETAIL } from "./ActionType"

export const fechapiData = (token) => async (dispatch) => {
    const res = await axios.get('http://localhost:3030/api/user/product_list', { headers: { 'api-access-token': token } })
    dispatch({
        type: GET_API_DATA,
        payload: res.data.message.data.rows
    })
}
// export const singelProduct = (data) => async (dispatch) => {
//     const res = await axios(`http://localhost:3030/api/user/product_list/${data.id}`, { headers: { 'api-access-token': data.token } })
//     dispatch({
//         type: PRODUCT_DETAIL,
//         payload: res.data.message.data
//     })

// }




