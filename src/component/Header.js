import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginData } from '../reduxThunk/ActionLogin'


const Header = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.productReducer.cartItems)
    // console.log(items?.length, "LLLLLLL")
    useEffect(() => {
        dispatch(loginData())
    }, [])

    return (

        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/">Home   </NavLink>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink className="navbar-brand" to='/login'><i>Login</i></NavLink></li>
                        <li><NavLink to="/my-cart"><i className="glyphicon glyphicon-shopping-cart"></i> My Cart{items?.length}</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header