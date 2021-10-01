import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import RegisterValidation from '../../context/RegisterValidation';
import useErrors from '../../hooks/useErrors';

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validations = useContext(RegisterValidation);
  const [errors, validateFields, canSubmit] = useErrors(validations);

  return (
    <form onSubmit={event => { _handleSubmit(event) }}>
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        onChange={evt => setEmail(evt.target.value)}
        value={email}
        fullWidth
        required
      />

      <TextField
        type="password"
        name="password"
        label="Senha"
        variant="outlined"
        margin="normal"
        onChange={evt => setPassword(evt.target.value)}
        onBlur={validateFields}
        value={password}
        error={!errors.password.validate}
        helperText={errors.password.text}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );

  function _handleSubmit(event) {
    event.preventDefault();
    if (canSubmit()) {
      onSubmit({ email, password });
    }
  }
}

export default UserData;