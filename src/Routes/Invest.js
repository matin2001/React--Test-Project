import React from "react";
import { Nav, Table } from "react-bootstrap";
import style from "./Invest.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Invest = () => {
  const token = useSelector((state) => state.Token);
  const navigate = useNavigate();
  return (
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
              onClick={() => () => {
                if (token == true) {
                  navigate("/account");
                }
              }}
              className={style.eee}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-1"
              onClick={() => () => {
                if (token == true) {
                  navigate("/recharge");
                }
              }}
              className={style.eee}
            >
              Recharge
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-2"
              onClick={() => () => {
                if (token == true) {
                  navigate("/withdraw");
                }
              }}
              className={style.eee}
            >
              Withdarw
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-2"
              onClick={() => () => {
                if (token == true) {
                  navigate("/transfer");
                }
              }}
              className={style.eee}
            >
              Transfer
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-2"
              onClick={() => () => {
                if (token == true) {
                  navigate("/generateEcheck");
                }
              }}
              className={style.eee}
            >
              Generate eCheck
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-2"
              onClick={() => () => {
                if (token == true) {
                  navigate("/exhchangeEcheck");
                }
              }}
              className={style.eee}
            >
              Exchange eCheck
            </Nav.Link>
            <Nav.Link
              style={{ color: "black" }}
              eventKey="link-2"
              onClick={() => () => {
                if (token == true) {
                  navigate("/invest");
                }
              }}
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
            Your account is at maximum VIP Investment Status. Further
            investments are no longer possible. As an added perk to your monthly
            ROI, you now also enjoy unlimited monthly withdrawals and
            transactions through our services.
          </div>
          <div className={style.text}>
            <span className={style.span1}>My VIP Status: </span>
            <span className={style.span2}> VIP 6</span>
          </div>
          <div className={style.text1}>
            <span className={style.span1}>My Account Balance: </span>
            <span className={style.span3}> ฿ 64.89387</span>
          </div>
          <div className={style.table}>
            <Table bordered hover size="sm" className={style.lll}>
              <thead>
                <tr className={style.heading}>
                  <th className={style.ttt}>VIP Plans</th>
                  <th className={style.ttt}>Invest</th>
                  <th className={style.ttt}>Limit</th>
                  <th className={style.ttt}>Annual ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "red" }}
                  >
                    VIP 1
                  </td>
                  <td className={style.bod}>฿ 0.005</td>
                  <td className={style.bod}>฿ 0.01</td>
                  <td className={style.bod}>3%</td>
                </tr>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "orange" }}
                  >
                    VIP 2
                  </td>
                  <td className={style.bod}>฿ 0.05</td>
                  <td className={style.bod}>฿ 1.00</td>
                  <td className={style.bod}>5%</td>
                </tr>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "gold" }}
                  >
                    VIP 3
                  </td>
                  <td className={style.bod}>฿ 0.08</td>
                  <td className={style.bod}>฿ 2.00</td>
                  <td className={style.bod}>6%</td>
                </tr>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "green" }}
                  >
                    VIP 4
                  </td>
                  <td className={style.bod}>฿ 0.10</td>
                  <td className={style.bod}>฿ 5.00</td>
                  <td className={style.bod}>8%</td>
                </tr>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "blue" }}
                  >
                    VIP 5
                  </td>
                  <td className={style.bod}>฿ 0.20</td>
                  <td className={style.bod}>฿ 20.00</td>
                  <td className={style.bod}>9%</td>
                </tr>
                <tr>
                  <td
                    className={style.bod}
                    style={{ backgroundColor: "#F6F7C1", color: "blueviolet" }}
                  >
                    VIP 6
                  </td>
                  <td className={style.bod}>Above ฿ 0.20</td>
                  <td className={style.bod}>Unlimited</td>
                  <td className={style.bod}>10%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
