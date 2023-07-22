import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notfound from "../Notfound";
import style from "./Account.module.css";

const Account = () => {
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
                  disabled because you haven't withdrawn for more than 365 days.
                  To reactivate withdrawal you need to contact customer care and
                  provide your secure key you created during account
                  registration.
                </span>
                <br />
                <br /> You will still be able to carry out transfers and
                transactions from your account balance to other BITSAFE VIP
                members without your secure key for the next 6 months.
              </div>
              <div className={style.grid}>
                <button
                  className={style.button}
                  onClick={() => navigate("/recharge")}
                >
                  Recharge
                </button>
                <button
                  className={style.button}
                  onClick={() => navigate("/withdraw")}
                >
                  Withdarw
                </button>
                <button
                  className={style.button}
                  onClick={() => navigate("/transfer")}
                >
                  Transfer
                </button>
                <button
                  className={style.button}
                  onClick={() => navigate("/generateEcheck")}
                >
                  Generate eCheck
                </button>
                <button
                  className={style.button}
                  onClick={() => navigate("/exhchangeEcheck")}
                >
                  Exchange eCheck
                </button>
                <button
                  className={style.button}
                  onClick={() => navigate("/recharge")}
                >
                  Upload Level
                </button>
              </div>
              <button
                className={style.history}
                onClick={() => navigate("/transfer")}
              >
                My Transfer History
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
