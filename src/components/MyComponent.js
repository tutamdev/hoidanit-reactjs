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

    handleOnchageInput = (even) => {
        this.setState({
            name: even.target.value
        })
        // console.log(even);
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    //JSX
    render() {
        return (
            <div>My first component!
                My name is {this.state.name} and I came from {this.state.address}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(even) => this.handleOnchageInput(even) }
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
