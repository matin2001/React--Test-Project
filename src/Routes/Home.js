import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Notfound from "../Notfound";
import { logging_in } from "../Redux/Action";
import style from "./Home.module.css";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const token = useSelector((state) => state.Token);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(username.length);
  console.log(password.length);
  const refresh = () => window.location.reload(true);
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
    } else {
      dispatch(logging_in());
      localStorage.setItem("token", "true");
      navigate("./account");
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
            <div className={style.text}>Hello, Please Log in</div>
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
            </Form>
            <Button className={style.button} variant="success" onClick={req}>
              Login
            </Button>
            <div
              className={style.go_signup}
              onClick={() => navigate("./signup")}
            >
              Don't have an account?
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Home;
