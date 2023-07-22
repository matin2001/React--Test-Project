import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "../Notfound";
import Account from "./Account";
import Home from "./Home";
import Singup from "./Signup";
import ExchangeEcheck from "./ExchangeEcheck";
import GenerateEcheck from "./GenerateEcheck";
import Recharge from "./Recharge";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";
import Invest from "./Invest";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/exhchangeEcheck" element={<ExchangeEcheck />} />
        <Route path="/generateEcheck" element={<GenerateEcheck />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </div>
  );
};

export default Router;
