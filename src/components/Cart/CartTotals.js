import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default function CartTotals({value}) {
    
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
    <React.Fragment>
        <AddShader>
        <div className="container mb-2">
            <div className="row">

                <div className="columns col-5 mt-2 ml-sm-5 ml-md-auto text-left bg-white p-2"  style = {{fontFamily: "Arial", color: "Grey"}}>
                <h5>
                        <span>
                            CART COST: 
                        </span>
                        <strong className = "ml-2">${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span>
                            Tax: 
                        </span>
                        <strong  className = "ml-2">${cartTax}</strong>
                    </h5>
                    <h5>
                        <span>
                            Total Amount: 
                        </span>
                        <strong  className = "ml-2">${cartTotal}</strong>
                    </h5>   
                </div>

                <div className="col-5 p-5 ml-sm-5 ml-md-auto text-center">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5 columns "
                        type="button"
                        onClick={()=>clearCart()}>
                            DELETE ALL
                        </button>
                    </Link>
                </div>


            </div>
        </div>
        </AddShader>
    </React.Fragment>
  )
}


const AddShader = styled.div`
.columns{
    border: 1;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}
`;
