import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

const ProductList = ({ index, ImageURL, Brandname, Productname, Quantity, MRP, Price, OfferText, handleTotal }) => {

    const [count, dispatch] = useReducer(reducer, initialstate)

    const updatedPrice = Price * count
    const newFunction = (updatedPrice) => {
        return !updatedPrice ? '' : `Rs.${updatedPrice}`
    }

    const increment = () => {
        dispatch({ type: 'increment' })
        handleTotal(1, + Price);
        //console.log(updatedPrice)
    }

    const decrement = () => {
        if (count || 0) {
            dispatch({ type: 'decrement' });
            handleTotal(-1, -Price);
        }
    }

    return (

        <>
            <div className="product">
                <div className="leftPro">
                    <figure>
                        <img src={ImageURL} alt={Brandname} />
                    </figure>
                    <figcaption>{OfferText}</figcaption>
                </div>
                <div className="rightPro">
                    <div>
                        <h2>{Brandname}</h2>
                        <h3>{Productname}</h3>
                        <h4>{Quantity}</h4>
                        <h4> MRP : {MRP}</h4>
                        <h4> <strong>Rs{Price} </strong> </h4>
                        {newFunction(updatedPrice)}
                    </div>
                    <button className="addtocart" onClick={() => {
                        alert(`Your Total Cart is Rs ${updatedPrice}, Successfully added.`)
                    }}>Add To Cart </button>

                    <button className="addcart buton" onClick={increment}>+</button>
                    <span> Quantity Amount : {count} </span>
                    <button className="substact-cart button" onClick={decrement}>-</button>
                </div>
            </div>

        </>
    )
}

export default ProductList
