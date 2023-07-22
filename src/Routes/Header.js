import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logging_in, logging_out } from "../Redux/Action";

const Header = () => {
  const token = useSelector((state) => state.Token);
  const navigate = useNavigate();
  console.log(token == "true");
  const dispatch = useDispatch();
  const refresh = () => window.location.reload(true);
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "9.9vh" }}>
        <Container>
          <Navbar.Brand href="/invest" style={{ fontSize: "30px" }}>
            Bitcoin
          </Navbar.Brand>
          <Nav className="me-auto" style={{ marginTop: "10px" }}>
            <Nav.Link
              onClick={() => {
                navigate("/invest");
              }}
              style={{ fontSize: "20px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="/" style={{ fontSize: "20px" }}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ fontSize: "20px" }}>
              Pricing
            </Nav.Link>
          </Nav>
          {token == "true" ? (
            <Button
              variant="outline-info"
              onClick={() => {
                dispatch(logging_out());
                localStorage.setItem("token", "false");
                navigate("/");
                refresh();
              }}
            >
              Log Out
            </Button>
          ) : (
            <Button
              variant="outline-info"
              onClick={() => {
                dispatch(logging_in());
                navigate("/");
                refresh();
              }}
            >
              Log In
            </Button>
          )}
        </Container>
      </Navbar>
      <div style={{ backgroundColor: "white", height: "0.1vh" }}></div>
    </div>
  );
};

export default Header;
