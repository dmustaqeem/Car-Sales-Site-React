import React from 'react';
import styled from "styled-components";

export default function CartColumns() {
  return (
    <AddShader>
    <div className="columns container-fluid text-center d-none d-lg-block bg-white">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">name of car</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">quantity</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">total</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-3">
                <p className="text-uppercase">remove</p>
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