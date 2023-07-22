import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Signup.module.css";
import Notfound from "../Notfound";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const refresh = () => window.location.reload(true);
  const token = useSelector((state) => state.Token);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(confirm);
  const req = async () => {
    if (username.length == 0) {
      toast.error("Please Enter your username", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (email.length == 0) {
      toast.error("Please Enter your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (password.length == 0) {
      toast.error("Please Enter your password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (confirm.length == 0) {
      toast.error("Please Enter your confirm password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (confirm != password) {
      toast.error("Password and confirm are not matched", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigate("/");
      refresh();
    }
  };
  return (
    <div>
      {token === "true" ? (
        <Notfound />
      ) : (
        <div className={style.background}>
          <div className={style.middle}>
            <div className={style.text}>Sign Up First</div>
            <Form className={style.form}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Username:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Email:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Password:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Confirm Password:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    placeholder="Enter your confirmation"
                    onChange={(e) => setconfirm(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
            <Button className={style.button} variant="success" onClick={req}>
              Sign Up
            </Button>
            <div className={style.go_signup} onClick={() => navigate("/")}>
              Have an account?
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Signup;
