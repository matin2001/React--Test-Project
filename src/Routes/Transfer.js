import React from "react";
import { Nav, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Transfer.module.css";
import Notfound from "../Notfound";
import { useSelector } from "react-redux";


const Transfer = () => {
  const token = useSelector((state) => state.Token);
  const navigate = useNavigate();
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
        <div style={{ width: "83vw" }}>
          <div>
            <div className={style.opening}>
              One-click transfer to other VIP user accounts (No Secure Key
              Required)
            </div>
            <div style={{ marginTop: "5vh" }}>
              <div className={style.section}>
                <span>Balance:</span>
                <span>B 67.11387</span>
              </div>
              <div className={style.section}>
                <span>Receiver Username:</span>
                <input
                  style={{
                    width: "15vw",
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter username"
                />
              </div>
              <div className={style.section}>
                <span>Transfer Amount:</span>
                <input
                  style={{
                    width: "15vw",
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                  placeholder="0.2 ฿TC Maximun Per Transfer"
                />
              </div>
              <div className={style.section}>
                <span>Handling Fee:</span>
                <span>0.00 ฿itcoin</span>
              </div>
              <button
                className={style.myB}
                style={{
                  width: "15vw",
                  borderRadius: "5px",
                  marginRight: "24.8vw",
                  height: "5vh",
                  backgroundColor: "#7670d9",
                  color: "white",
                  border: "none",
                }}
              >
                Complete One-Click Transfer
              </button>
            </div>
            <div className={style.ppp}>
              <div className={style.past}>My Recent Successful Transfers</div>
              <div className={style.table}>
                <Table striped hover size="sm">
                  <thead>
                    <tr>
                      <th>ToUser</th>
                      <th>฿</th>
                      <th>Status</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     )}
     </div>
  );
};

export default Transfer;
