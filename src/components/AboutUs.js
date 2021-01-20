import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AboutUs extends Component {
    render()
    {
        return(
            <div className="container">
            <div className="row">
            <div className="columns col-10 mx-auto mt-5 ml-5 p-5 text-center bg-white" style = {{fontFamily: "Arial", color: "Grey"}}>
                <h2>About US</h2>
                <p>
                PROTO CORPORATION is a company that manages Japan's largest used car information site “Goonet”.
Since we are cooperating with second-hand car dealers all over Japan, we can offer the perfect car for you from our abundant inventory.
In addition, the PROTO Group is developing a service called “Goo KANTEI”, in which an appraiser of the Japan Automotive Appraisal Association (JAAA), a third-party organization, appraises used cars.
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