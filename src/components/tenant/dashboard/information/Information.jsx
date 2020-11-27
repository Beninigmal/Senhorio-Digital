import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function Information() {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "60vw",
      minHeight: "70vh",
      marginTop: "10%",
      backgroundColor: "#fff"
      
    },
    text: {
      fontSize: "2rem",
      fontFamily: "Roboto",
      textAlign: "justify"
    },
    landlord: {
        fontSize: 'xx-large',
        fontFamily: 'Lobster',
        fontWeight: 'lighter',
        fontStyle: 'italic'
    }
  }));
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography contain="h1" variant="h2">
        Caros Inquilinos
      </Typography>
      <Typography className={classes.text} paragraph>
        Devido ao momento de pandemia, e com intuíto de não nos expormos ao
        vírus, as contas de energia deverão ser baixadas através do site da
        compania de energia. Para facilitar o acesso, a plataforma dispõe na
        sessão de contas um link para acesso a 2ª via da Coelba.
      </Typography>
      <Typography className={classes.landlord}>Atenciosamente. Sr. Luis.</Typography>
    </Container>
  );
}

export default Information;
