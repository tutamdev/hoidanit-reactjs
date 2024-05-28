// class component
// function component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "tutamdev",
        address: "Hanoi",
        age: 21
    };

    handleClick(even) {
        this.setState({
            name: "tutamdev change"
        });
        console.log(this.state.name);
    }
    //JSX
    render() {
        return (
            <div>My first component!
                My name is {this.state.name} and I came from {this.state.address}
                <button onClick={(even) => {this.handleClick(even)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;
