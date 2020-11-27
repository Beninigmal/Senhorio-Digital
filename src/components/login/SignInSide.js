import React, { useEffect, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import login from "../../assets/login.gif";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import buildHouse from "../../assets/buildHome.gif"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Senhorio digital
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${buildHouse})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "50%",
    backgroundPosition: "50% 100%, center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    width: '130px',
    height: '130px',

  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    fontFamily: "Lobster",
    paddingTop: '5%'
  },
  link:{
    cursor: 'pointer',
    '&:hover':{
      color: 'tomato'
    }
  }
 
}));

export default function SignInSide(props) {
  const classes = useStyles();

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          className={classes.typography}
        >
          Senhorio Digital
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={login} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form type="submit" className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de e-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <p className="errorMsg">{passwordError}</p>

            <div>
              {hasAccount ? (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSignUp}
                  >
                    Cadastrar
                  </Button>
                  <Grid container>
                    <Grid item>
                    <p>Já tem uma conta? <span className={classes.link} onClick={() => setHasAccount(!hasAccount)}>Logar-se</span></p>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Grid container>
                <Grid item>
                <p>Não tem uma conta? <span className={classes.link} onClick={() => setHasAccount(!hasAccount)}>Cadastrar-se</span></p>
                </Grid>
              </Grid>
                </>
              )}

              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
