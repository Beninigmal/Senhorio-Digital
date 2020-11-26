import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import people from "../../../../assets/people.gif";

import { cpfMask } from "./cpfMask";
import { rgMask } from "./rgMask";

function User() {
  const [name, setName] = useState("");
  const [nascio, setNascio] = useState("");
  const [civilState, setCivilState] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [job, setJob] = useState("");
  const [form, setForm] = useState({
    name: "",
    nascio: "",
    civilState: "",
    rg: "",
    cpf: "",
    job: "",
  });

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
  }));
  const classes = useStyle();

  function changeForm(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(form);

    setForm({
      name: "",
      nascio: "",
      civilState: "",
      rg: "",
      cpf: "",
      job: "",
    });
  }
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.item1}>
        <Typography className={classes.title} variant="h3" contain="h1">
          Cadastro de usuário
        </Typography>
        <form
          onSubmit={submitForm}
        >
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
              name="nascio"
              value={nascio}
              onChange={({ target }) => setNascio(target.value)}
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
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Solteiro(a)</MenuItem>
                <MenuItem value={20}>Casado(a)</MenuItem>
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
          >
            Cadastrar
          </Button>
        </form>
      </Grid>
      <Grid item className={classes.item2}>
        <img src={people} />
      </Grid>
    </Grid>
  );
}

export default User;
