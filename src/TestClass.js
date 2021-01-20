import React from "react";

class TestClass extends React.Component
{
    constructor()
    {
        super();
        this.state = {class: 10};
    }
    render()
    {
        setTimeout(()=>{
            this.setState({class: (this.props.class) });
        },2000)
        return(
        <div>
            {this.state.class}
        </div>
        );
    }
}
export default TestClass;