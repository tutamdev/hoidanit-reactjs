// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: "tutam1", age: 20},
            {id: 2, name: "tutam2", age: 30},
            {id: 3, name: "tutam3", age: 40}
        ]
    }
    //JSX
    render() {
        return (
            <div>
                <UserInfor/>
                <br/>
                <br/>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;
