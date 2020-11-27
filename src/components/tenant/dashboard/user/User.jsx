import React, { useState } from "react";
import {
  Button,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import people from "../../../../assets/people.gif";

import { cpfMask } from "./cpfMask";
import { rgMask } from "./rgMask";
import useLocalStorage from "../../../../hooks/useLocalStorage";

function User(props) {
  const [name, setName] = useState("");
  const [nacio, setNacio] = useState("");
  const [civilState, setCivilState] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [job, setJob] = useState("");
  const [userData, setUserData] = useLocalStorage("usuario", [
    {
      name,
      nacio,
      civilState,
      rg,
      cpf,
      job,
    },
  ]);

  const useStyle = makeStyles((theme) => ({
    root: {
      display: "flex",
      paddingLeft: "0",
      marginLeft: "0",
      boxSizing: "border-box",
      minHeight: "calc(100vh - 68px)",
      justifyContent: "center",
      alignItems: "center",
    },
    item1: {
      height: "100%",
      width: "50%",
    },
    item2: {
      height: "100%",
      width: "50%",
    },
    title: {
      fontFamily: "Lobster",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    inputSettings: {
      minWidth: "48%",
    },
    button: {
      marginTop: "5px",
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: "48%",
      marginLeft: "25px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    snackbarSuccess:{
      backgroundColor: 'green',

    }
  }));

  const classes = useStyle();

  //-----------snackbar success-----------
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });
  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };
  const handleError = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  //-----------------------------------------//
 
  const addUser = (e) => {
    e.preventDefault();
    setUserData([{ name, nacio, civilState, rg, cpf, job }]);

    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setNacio("");
    setCivilState("");
    setRg("");
    setCpf("");
    setJob("");
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.item1}>
        <Typography className={classes.title} variant="h3" contain="h1">
          Cadastro de usuário
        </Typography>
        <form onSubmit={addUser}>
          <TextField
            variant="outlined"
            label="Digite seu nome completo"
            fullWidth
            required
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            margin="normal"
          />
          <Grid item className={classes.inputContainer}>
            <TextField
              className={classes.inputSettings}
              variant="outlined"
              label="Nacionalidade"
              required
              name="nacio"
              value={nacio}
              onChange={({ target }) => setNacio(target.value)}
              margin="normal"
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Estado Cívil
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={civilState}
                name="civilState"
                onChange={({ target }) => setCivilState(target.value)}
                label="Estado Civíl"
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"solteiro(a)"}>Solteiro(a)</MenuItem>
                <MenuItem value={"casado(a)"}>Casado(a)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.inputContainer}>
            <TextField
              className={classes.inputSettings}
              variant="outlined"
              label="RG"
              required
              name="rg"
              value={rg}
              onChange={({ target }) => setRg(rgMask(target.value))}
              margin="normal"
            />
            <TextField
              className={classes.inputSettings}
              variant="outlined"
              label="CPF"
              required
              name="cpf"
              value={cpf}
              onChange={(e) => {
                setCpf(cpfMask(e.target.value));
              }}
              margin="normal"
            />
          </Grid>
          <TextField
            className={classes.inputSettings}
            variant="outlined"
            label="Profissão"
            fullWidth
            required
            name="job"
            value={job}
            onChange={({ target }) => setJob(target.value)}
            margin="normal"
          />

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            onClick={nacio !== '' ? handleClick(SlideTransition) : ''}
          >
            Cadastrar
          </Button>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="Cadastrado com sucesso!"
            key={state.Transition.name}
          />
        </form>
      </Grid>
      <Grid item className={classes.item2}>
        <img src={people} />
      </Grid>
    </Grid>
  );
}

export default User;
