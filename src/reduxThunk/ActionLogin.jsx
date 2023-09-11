import axios from "axios"
import { LOGIN_DATA } from "./ActionType"
export const loginData = () => async (dispatch) => {
    const res = await axios.post('http://localhost:3030/api/user/login', {
        "email": "sippy@gmail.com",
        "password": "406577"
    }, {
        headers: {
            "content-type": "application/json"
        }
    })
    dispatch({
        type: LOGIN_DATA,
        payload: res.data.message.data.token
    })

}