import React, { Component } from "react";
class Total extends Component {
    handleTotal = () => {
        const popup = document.querySelector('.popup')
        popup.style.display = 'block'
        setTimeout(() => {
            popup.style.display = 'none'
        }, 1000)
    }
    render() {
        const qty = this.props.qty;
        const updatedPrice = this.props.updatedPrice;

        return (
            <div className="total">
                <div className="left">
                    <h2 className="col-6">total price: {updatedPrice}</h2>
                    <h2 className="col-6">total quantity: {qty}</h2>
                </div>
                <div className="right">
                    <button className="addtocart" onClick={this.handleTotal}>Checkout </button>
                    <div className="popup" style={{ display: 'none' }}>
                        <div className="popupinnr">
                            <h2>Transaction successful </h2>
                            <h3>Total Cart Price : Rs.{updatedPrice}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Total;
