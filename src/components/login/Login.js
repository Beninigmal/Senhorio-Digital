import { TextField } from "@material-ui/core";
import React from "react";

function Login(props) {
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
    <section className="login">
      <label>Usuário</label>
      <TextField
        id="login"
        label="Login"
        placeholder="Digite seu melhor e-mail"
        variant="outlined"
        type="text"
        autoFocus
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <p className="errorMsg">{emailError}</p>
      <label>Senha</label>
      <TextField
        id="outlined-basic"
        label="Senha"
        placeholder="Digite a sua senha"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Logar-se</button>
            <p>
              Não tem uma conta?
              <span onClick={() => setHasAccount(!hasAccount)}>
                Crie uma agora!
              </span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignUp}>Criar conta</button>
            <p>
              Já tem uma conta?
              <span onClick={() => setHasAccount(!hasAccount)}>Logar-se</span>
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default Login;
