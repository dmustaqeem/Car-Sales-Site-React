import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value)=>{
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;

                if(!modalOpen){
                    return null;
                }else{
                    return <ModalContainer>
                        <div className="container">
                            <div className="row"  style = {{fontFamily : "Arial"}}>
                                <div id="modal" 
                                className="col-8 mx-auto col-md-6 col-lg-7 text-center p-5" >
                                    <h5>Added In Cart</h5>
                                    <img src={img} className="img-fluid" alt="product"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link className = "p-1" to='/'>
                                        <button 
                                        className = "btn btn-secondary" 
                                        onClick={()=>closeModal()}
                                        style = {{fontFamily: "Arial"}}
                                        >
                                            GO TO STORE
                                        </button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button onClick={()=>closeModal()} className = "btn btn-secondary">
                                            GO TO CART
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>        
                    </ModalContainer>
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        #modal {
            background: var(--mainWhite);
        }
`;
