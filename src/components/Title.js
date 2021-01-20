import React from 'react'

export default ({title}) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-left text-title">
            <h2 className="text-capitalize font-weight-bold">
                <strong className="text-grey" style = {{fontFamily: "Arial"}} class = "">{title}</strong>
            </h2>
        </div>
      </div>
    </div>
  )
}
