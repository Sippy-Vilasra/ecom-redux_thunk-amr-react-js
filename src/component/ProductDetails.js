import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCarts } from '../reduxThunk/AddCartAction'
const ProductDetails = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.productReducer)
    console.log(state, 9999999)

    const { image, title, price, offer_price, product_type, description, id } = state?.products.find(p => p.id === location?.state)

    const addToCart = (data) => {

        dispatch(addToCarts(data, state.token))


    }

    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={`http://localhost:3030${image}`} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <p className="ui teal tag label">Offer Price ${offer_price} </p>
                            </h2>
                            <h2>
                                <p className="ui teal tag label">Retail Price ${price}</p>
                            </h2>
                            <h3 className="ui brown block header">{product_type}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <button onClick={() => addToCart({
                                    image: image,
                                    product_id: id,
                                    product_name: title,
                                    quantity: 1,
                                    price: offer_price,
                                    action: 1
                                })}>Add to Cart</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails