import React from "react";
import styled from "styled-components";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <AddShader>
    <div className="columns row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ widht: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <span className="d-lg-none">price :</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 mt-4">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-light mx-1 mt-4"
              onClick={() => decrement(id)}> -
            </span>
            <span className="btn btn-secondary mx-1 mt-4">{count}
            </span>
            <span className="btn btn-light mx-1 mt-4"
              onClick={() => increment(id)}> +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <strong>total: $ {total}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

    </div>
    </AddShader>
  );
}


const AddShader = styled.div`
.columns{
    border: 1;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}
`;
