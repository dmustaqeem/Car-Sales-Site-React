import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ConatctUs extends Component {
    render()
    {
        return(
            <div className="container">
            <div className="row">
            <div className="columns col-10 mx-auto mt-5 ml-5 p-5 text-center bg-white" style = {{fontFamily: "Arial", color: "Grey"}}>
                <h2>Contact US</h2>
                <p>
                    Email: cars@gmail.com
                </p>
                <p>
                    Phone: +9211223344
                </p>
                <p>
                    Facebook: facebook.com/cars
                </p>
                </div>
            </div>
                <div className="row">
                    <div className="col-10 mx-auto p-2 text-center" style = {{fontFamily: "Arial", color: "Grey"}}>
                        <h1>WANT TO BUY A CAR?</h1>
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
        )
    }
}