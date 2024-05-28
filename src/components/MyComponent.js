// class component
// function component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "tutamdev",
        address: "Hanoi",
        age: 21
    };

    //JSX
    render() {
        return (
            <div>My first component!
                My name is {this.state.name} and I came from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
