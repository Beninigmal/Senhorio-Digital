import React from "react";
import Dashboard from "../tenant/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bills from "../tenant/dashboard/bills/Bills";
import Information from "../tenant/dashboard/information/Information";
import Contract from "../tenant/dashboard/contract/Contract";
import Notfound from "../tenant/dashboard/notFound/Notfound";
import Navbar from "../tenant/dashboard/navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import User from "../tenant/dashboard/user/User";

function Rotas({ handleLogOut }) {
  const useStyle = makeStyles({
    container: {
      display: "flex",
      marginTop: "64px"
    },
  });
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <Navbar handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" exact element={<Information />} />
          <Route path="contas" element={<Bills />} />
          <Route path="contrato" element={<Contract />} />
          <Route path="usuario" element={<User />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
