import ModalCreateUser from "./ModalCreateUser";
import Button from 'react-bootstrap/Button';
import { FcPlus } from 'react-icons/fc';
import './ManageUser.scss'
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title"> MANAGE USERS</div>
            <div className="manage-user-content">
                <Button variant="outline-success"
                    onClick={() => setShowModalCreateUser(true)}
                >
                    <FcPlus />
                    Add new user</Button>
                <div className="tbale-user">
                    tableuser
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;
