import React from "react";
import { Nav, Table } from "react-bootstrap";
import style from "./Withdraw.module.css";
import { useNavigate } from "react-router-dom";
import Notfound from "../Notfound";
import { useSelector } from "react-redux";


const Withdraw = () => {
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
          <div className={style.opening}>
            <span style={{ color: "red" }}>
              Withdrawal to your registered ฿itcoin wallet address has been
              disabled because you haven't withdrawn for more than 365 days. To
              reactivate withdrawal you need to contact customer care and
              provide your secure key you created during account registration.
            </span>
            <br />
            <br /> You will still be able to carry out transfers and
            transactions from your account balance to other BITSAFE VIP members
            without your secure key for the next 6 months.
          </div>
          <div style={{ marginTop: "5vh" }}>
            <div className={style.section}>
              <span>Account Balance:</span>
              <span>B 67.11387</span>
            </div>
            <div className={style.section}>
              <span>Wallet Address:</span>
              <input
                style={{
                  width: "15vw",
                  border: "2px solid gray",
                  borderRadius: "5px",
                }}
                disabled
              />
            </div>
            <div className={style.section}>
              <span>Withdraw Bitcoin:</span>
              <input
                style={{
                  width: "15vw",
                  border: "2px solid gray",
                  borderRadius: "5px",
                }}
                disabled
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
                disabled
              />
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
              Confirm Withdrawal
            </button>
          </div>
          <div className={style.ppp}>
            <div className={style.past}>Past Month Recharges</div>
            <div className={style.table}>
              <Table striped hover size="sm">
                <thead>
                  <tr>
                    <th>Address(BTC)</th>
                    <th>Units</th>
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
     )}
     </div>
  );
};

export default Withdraw;
