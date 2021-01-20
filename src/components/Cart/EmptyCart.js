import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default function EmptyCart() {
  return (
    <AddShader>
    <div className="container">
      <div className="row">
      <div className="columns col-10 mx-auto mt-5 ml-5 p-5 text-center bg-white" style = {{fontFamily: "Arial", color: "Grey"}}>
        <h2>Your Cart is Empty</h2>
        </div>
      </div>
        <div className="row">
            <div className="col-10 mx-auto p-2 text-center" style = {{fontFamily: "Arial", color: "Grey"}}>
                <h1>Select a Car</h1>
                <div className = "row-xl">
                  <div className = "col-xl mt-5 mb-5 p-5">
                  <Link to="/">
                        <button 
                        className="btn btn-secondary text-uppercase mb-3 px-5 columns "
                        type="button">
                            Cars
                        </button>
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </AddShader>
  )
}


const AddShader = styled.div`
.columns{
    border: 1;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}
`;