import React from "react";

import './CreditCardInput';

function CreditCardInput() {
    return (
        <div className="roji-container">
            <img className="card-indicator" src="https://icon-library.com/images/mastercard-icon-png/mastercard-icon-png-2.jpg" width="32" height="32"/>
            <input className="credit-input" placeholder="Enter credit card number" />
        </div>
    );
}

export default CreditCardInput;