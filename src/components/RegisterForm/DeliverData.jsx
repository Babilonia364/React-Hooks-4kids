import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'

function DeliverData({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form onSubmit={event => _handleSubmit(event)}>
      <TextField
        type="number"
        label="CEP"
        variant="outlined"
        margin="normal"
        onChange={evt => setCep(evt.target.value)}
        value={cep}
      />

      <TextField
        type="text"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={evt => setAddress(evt.target.value)}
        value={address}
      />

      <TextField
        type="number"
        label="Número"
        variant="outlined"
        margin="normal"
        onChange={evt => setNumber(evt.target.value)}
        value={number}
      />

      <TextField
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
        onChange={evt => setState(evt.target.value)}
        value={state}
      />

      <TextField
        type="text"
        label="Cidade"
        variant="outlined"
        margin="normal"
        onChange={evt => setCity(evt.target.value)}
        value={city}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  );

  function _handleSubmit(event) {
    event.preventDefault();
    onSubmit({ cep, address, number, state, city });
  }
}

export default DeliverData