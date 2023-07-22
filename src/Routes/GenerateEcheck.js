import React from "react";
import { Nav, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./GenerateEcheck.module.css";
import Notfound from "../Notfound";
import { useSelector } from "react-redux";

const GenerateEcheck = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.Token);

  return (
    <div>
      {token == "false" ? (
        <Notfound />
      ) : (
        <div>
          <div className={style.body}>
            <div className={style.navbar}>
              <Nav
                defaultActiveKey="/home"
                className="flex-column"
                style={{ textAlign: "left", marginTop: "1vh" }}
              >
                <div style={{ marginLeft: "1vw" }}>
                  My Status : Null
                  <br />
                  My Balance : 0
                  <br />1 Balance Worth : 0
                </div>
                <div
                  style={{
                    height: "0.2vh",
                    margin: "0.5vh 0.5vw",
                    backgroundColor: "black",
                  }}
                ></div>
                <Nav.Link
                  style={{ color: "black" }}
                  onClick={() => navigate("/account")}
                  className={style.eee}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-1"
                  onClick={() => navigate("/recharge")}
                  className={style.eee}
                >
                  Recharge
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-2"
                  onClick={() => navigate("/withdraw")}
                  className={style.eee}
                >
                  Withdarw
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-2"
                  onClick={() => navigate("/transfer")}
                  className={style.eee}
                >
                  Transfer
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-2"
                  onClick={() => navigate("/generateEcheck")}
                  className={style.eee}
                >
                  Generate eCheck
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-2"
                  onClick={() => navigate("/exhchangeEcheck")}
                  className={style.eee}
                >
                  Exchange eCheck
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  eventKey="link-2"
                  onClick={() => navigate("/invest")}
                  className={style.eee}
                >
                  Invest
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  className={style.eee}
                  eventKey="link-2"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  className={style.eee}
                  eventKey="link-2"
                >
                  FAQ
                </Nav.Link>
              </Nav>
            </div>
            <div style={{ width: "83vw", height: "100vh" }}>
              <div className={style.heading}>
                Generate eCheck with Secure Key
              </div>
              <div className={style.section}>
                <span>Generate Amount:</span>
                <input
                  style={{
                    width: "15vw",
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                  placeholder="Minimum amount 500"
                />
              </div>
              <div className={style.section}>
                <span>Secure Key:</span>
                <input
                  style={{
                    width: "15vw",
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter secure key"
                />
              </div>
              <button className={style.myB}>Proceed</button>
              <div className={style.ppp}>
                <div className={style.past}>Valid for 90 days</div>
                <div className={style.table}>
                  <Table striped hover size="sm">
                    <thead>
                      <tr>
                        <th>eCheck Number</th>
                        <th>Amount</th>
                        <th>Date/Time</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateEcheck;
