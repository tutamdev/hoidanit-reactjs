import React from "react";

class UserInfor extends React.Component {

    state = {
        name: "tutamdev",
        address: "Hanoi",
        age: 21
    };

    handleOnchageInput = (even) => {
        this.setState({
            name: even.target.value
        })
        // console.log(even);
    }

    handleOnchageAge = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Name</label>
                    <input
                    value={this.state.name}
                    type="text"
                    onChange={(even) => this.handleOnchageInput(even) }
                    />

                    <label>Age</label>
                    <input
                    value={this.state.age}
                    type="text"
                    onChange={(even) => this.handleOnchageAge(even) }
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default UserInfor;