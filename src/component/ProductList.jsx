import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fechapiData } from '../reduxThunk/Action'
import { addToCarts } from '../reduxThunk/AddCartAction'
const ProductList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.productReducer)

    useEffect(() => {
        dispatch(fechapiData(state.token))
    }, [state?.token])
    const productdtial = (data) => {
        console.log(data, 'datadatadata')
        dispatch(addToCarts(data, state.token))
    }

    const productShow = (id) => {
        navigate("/products", { state: id })
    }

    return (
        <div className='product-filter'>
            <>
                {state?.products?.map((item) => (
                    <div className="four wide column" key={item.id} >

                        <div className="ui link cards">
                            <div className="card">
                                <div className="image">
                                    <img src={`http://localhost:3030${item.image}`} alt={item.title} onClick={() => productShow(item.id)} />
                                </div>
                                <div className="content">
                                    <div className="header">{item.title}</div>
                                    <div className="meta price"><h4>Offer Price ${item.offer_price}</h4><h6>Retail Price ${item.price}</h6></div>
                                    <div className="meta">{item.category}</div>
                                    <button onClick={() => productdtial({
                                        image: item.image,
                                        product_id: item.id,
                                        product_name: item.title,
                                        quantity: 1,
                                        price: item.offer_price,
                                        action: 1
                                    })} className="btn btn-outline-dark">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </>
        </div>


    )
}

export default ProductList