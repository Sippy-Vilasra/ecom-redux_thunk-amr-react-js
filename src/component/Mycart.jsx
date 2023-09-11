import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { delcartitem, cartItemList, updateCart } from '../reduxThunk/AddCartAction'
import './Mycart.css'

const Mycart = () => {
    const dispatch = useDispatch()

    const state = useSelector((state) => state.productReducer)
    console.log(state, "JJJJJ")
    // useEffect(() => {
    //     dispatch(cartItemList(state.token))
    // }, [])

    const removeData = (id) => {
        const data = {
            id: id,
            token: state.token
        }
        dispatch(delcartitem(data))
    }
    const updateCartItem = (data) => {
        dispatch(updateCart(data, state.token))
        console.log(data, 'LLLL')
    }

    let amount = state.cartItems.map(item => item.price)
        .reduce((prev, next) => prev + next, 0)

    return (
        <>
            <div>
                <Link to="/" >Go to Products Link</Link>
                <h1>Cart Page</h1>
            </div>
            {state.cartItems.length === 0 ? <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div> : (
                <div className="cart-page-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>

                            {state.cartItems.map((data, id) =>
                                <tr key={id}>
                                    <td><h3>{data.product_name}</h3></td>
                                    <td><b>{data.price}</b></td>
                                    <td>*****</td>
                                    <td>All category</td>
                                    <td>
                                        <div className="input-group-prepend">
                                            {data.quantity !== 1 ?
                                                <button className="btn btn-outline-primary" onClick={() => updateCartItem({
                                                    cart_id: data?.id,
                                                    product_id: data?.product_id,
                                                    type: 0,
                                                    product_name: data?.product_name,
                                                    quantity: data?.quantity,
                                                    price: data?.price
                                                })}>-</button> : <button button className="btn btn-outline-primary" onClick={() => (removeData(data.id))}>-</button>}
                                            {data.quantity}
                                            <button className="btn btn-outline-primary" onClick={() => updateCartItem({
                                                cart_id: data?.id,
                                                product_id: data?.product_id,
                                                type: 1,
                                                product_name: data?.product_name,
                                                quantity: data?.quantity,
                                                price: data?.price
                                            })}>+</button>

                                        </div>
                                    </td>
                                    <td>
                                        <button className="input-group-prepend" onClick={() => (removeData(data.id))}>Remove</button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="price-details">
                        <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                        <div className="adjust-price"><span>Discount 10%</span><span>{amount / 10}</span></div>
                        <div className="adjust-price"><span>Tax</span><span>{amount * 0.02}</span></div>
                        <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10) + (amount * 0.02)}</span></div>
                        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto"> Pay Amount</NavLink>
                    </div>
                </div>
            )}
        </>
    )
}

export default Mycart