import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Coelba from "../../../../assets/coelba.png";
import payBillAnimation from "../../../../assets/paybillAnimation.gif"

function Bills(theme) {
  const useStyle = makeStyles({
    root: {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      justifyContent: "center",
    },
    item1: {
      width: "55vw",
      height: "85vh",
    },
    item2: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "2%",
      width: "35vw",
      height: "85vh",
    },
    squareContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      listStyle: "none",
    },
    square: {
      width: "130px",
      height: "130px",
      marginRight: "10px",
      marginTop: "10px",
    },
    title: {
      marginTop: "10px",
      fontFamily: "Roboto",
      listStyle: "none",
    },
    img: {
      height: "100px",
      width: "200px",
    },
    button: {
      height: "100px",
      width: "250px",
      borderRadius: "35px",
      backgroundColor: "#4b5485",
      margin: "20px",
    },
    toPay: {
      backgroundColor: "#eaf899",
      height: "70%",
    },
    iconContainer: {
      height: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green'
    },
    icon: {
      fontSize: '70px'
    },
    animation: {
      height: "300px",
      width: "300px",
      borderRadius:"50px"
    }
  });

  const rentBill = (payment) => {
    if (payment === true) {
      return (
        <div className={classes.iconContainer}>
          <CheckCircleIcon className={classes.icon} />
        </div>
      );
    } else {
      return <h1 className={classes.toPay}></h1>;
    }
  };
  const months = [
    {
      month: "Janeiro",
      payment: true,
    },
    {
      month: "Fevereiro",
      payment: true,
    },
    {
      month: "Março",
      payment: true,
    },
    {
      month: "Abril",
      payment: true,
    },
    {
      month: "Maio",
      payment: false,
    },
    {
      month: "Junho",
      payment: false,
    },
    {
      month: "Julho",
      payment: false,
    },
    {
      month: "Agosto",
      payment: false,
    },
    {
      month: "Setembro",
      payment: false,
    },
    {
      month: "Outubro",
      payment: false,
    },
    {
      month: "Novembro",
      payment: false,
    },
    {
      month: "Dezembro",
      payment: false,
    },
  ];

  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.item1}>
        <Typography variant="h4" className={classes.title}>
          Recibo
        </Typography>
        <ul className={classes.squareContainer}>
          {months.map((month) => {
            return (
              <li>
                <Paper className={classes.square}>
                  {month.month}
                  {rentBill(month.payment)}
                </Paper>
              </li>
            );
          })}
        </ul>
      </Grid>
      <Grid item className={classes.item2}>
        <Typography variant="h4" className={classes.title}>
          Energia
        </Typography>
        <Divider />
        <Typography>Clique aqui para tirar a 2ª via</Typography>
        <Button
          className={classes.button}
          target="_blank"
          rel="noopener noreferrer"
          href="https://servicos.coelba.com.br/servicos-ao-cliente/Pages/login-av.aspx?UrlUc=http://servicos.coelba.com.br/servicos-ao-cliente/Pages/2-via-de-conta-coelba.aspx"
        >
          <img className={classes.img} src={Coelba} />
        </Button>
        <Grid item>
          <img className={classes.animation}  src={payBillAnimation} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Bills;
