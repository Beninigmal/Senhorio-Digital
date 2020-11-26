import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import notFound from "../../../../assets/404.png";

function Notfound() {
  const useStyles = makeStyles({
    img: {
      height: "60vh",
      width: "50vw",
    },
    font: {
        fontFamily: 'Roboto',
    }
  });
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.font} variant="h2">Página não encontrada!</Typography>
      <img src={notFound} className={classes.img} />
    </Container>
  );
}

export default Notfound;
