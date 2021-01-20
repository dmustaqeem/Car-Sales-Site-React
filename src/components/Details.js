import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from "styled-components";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          //getting values from redux and setting values to props 
          (value)=>{
            const {id, company, img, info, price, title, inCart} = value.detailProduct;

            return (
              
                <div className="row-xl">
                  <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                    <h1  style = {{fontFamily: "Arial", color: "Grey"}}>
                      {company}
                    </h1>
                  </div>
                  
                  <div className="row">
                    <div className="col-10 mx-5 col-md-6 my-3 text-capitalize">
                    <AddShader>
                        <img src={img} className="image img-fluid mx-auto" alt="product"/>
                        </AddShader>
                    </div>
                    <div className="col-10 mx-auto col-md-5 my-3"  style = {{fontFamily: "Arial"}}>
                      <h4>Model: {title}</h4>
                      <h4 className="text-muted mt-3 mb-2">
                        Make: <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-grey  mt-3 mb-2">
                        <strong>
                          Price: <span>$</span> {price}
                        </strong>
                      </h4>

                      <div className = " mt-5 mb-2" style = {{width: "250px", fontFamily: "Arial"}}>
                      <AddShader>
                          <ButtonContainer
                            className = "buttons btn btn-default" 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "IN CART":"ADD TO CART"}
                          </ButtonContainer>
                          </AddShader>
                      </div>
                    </div>
                  </div>
                  
                  <div className = "row-xl p-2 col-md-30 my-4 text-capitalize" style = {{fontFamily: "Arial"}}>
                  
                  <h4 className="text-capitalize font-weight-bold mt-3 mb-0">
                          Features:
                  </h4>

                  <p className="text-muted lead p-2">
                        {info}
                      </p>
                  </div>
                  <div className = "row-sm mx-auto p-1" style = {{width: "111px", fontFamily: "Arial"}}>
                        <Link to="/">
                          <button 
                          className = "btn btn-secondary justify-content-center"
                          >
                            GO BACK
                          </button>
                        </Link>
                  </div>
                  
                </div>
                
            );

          }
        }
      </ProductConsumer>
    )
  }
}


const AddShader = styled.div`
  .image {
    border: 1;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}

&:hover {
  .buttons{
    border: 1;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    background: grey;
    
}
}
`;
