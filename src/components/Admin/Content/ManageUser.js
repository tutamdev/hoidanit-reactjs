import ModalCreateUser from "./ModalCreateUser";
import { getAllUsers } from "../../../services/api/apiServices";
import Button from 'react-bootstrap/Button';
import { FcPlus } from 'react-icons/fc';
import './ManageUser.scss'
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [userUpdate, setUserUpdate] = useState({});

    const fetchListUser = async () => {
        let res = await getAllUsers();
        // console.log(res)
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
    useEffect(() => {
        fetchListUser();
    }, []);

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setUserUpdate(user);
        // console.log(user)
    };

    return (
        <div className="manage-user-container">
            <div className="title"> MANAGE USERS</div>
            <div className="manage-user-content">
                <Button variant="outline-success"
                    onClick={() => setShowModalCreateUser(true)}
                >
                    <FcPlus />
                    Add new user</Button>
                <div className="tbale-user-container mt-3">
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userUpdate={userUpdate}
                />
            </div>
        </div>
    )
}

export default ManageUser;
