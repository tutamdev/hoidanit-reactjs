import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import axios from 'axios';
const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    // setShow va handleShow set gia tri tu props ben ManagerUser(setShowModalCreateUser)
    const handleClose = () => {
        setShow(false);

        setUsername("");
        setPassword("");
        setEmail("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
    };
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            // set state cho img api
            setImage(event.target.files[0]);
        } else {
            setPreviewImage("");
        }
        // console.log("hahahah", event.target.files[0])
    }

    const handleSubmitCreatUser = async () => {
        //validate

        // call api
        // let data = {
        //     username: username,
        //     password: password,
        //     email: email,
        //     role: role,
        //     userImage: image
        // }
        // console.log(data)

        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        data.append('email', email);
        data.append('role', role);
        data.append('userImage', image);

        // form.append('my_buffer', new Buffer(10));
        // form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

        let respond = await axios.post('http://localhost:8081/api/v1/participant', data);
        console.log("check res: ", respond)
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}
                size="lg"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option defaultValue={"USER"} value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        {/* <div className='col-md-12'>
                            <label className="form-label">Image</label>
                            <input type='file' />
                        </div> */}
                        <div className='col-md-12'>
                            <label className='form-lable lable-upload' htmlFor='upload-img'>
                                <FcPlus />
                                Upload your file!</label>
                            <input type='file' id='upload-img' hidden
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {!previewImage ?
                                <span>Preview Image</span> :
                                <img src={previewImage} />
                            }
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreatUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;