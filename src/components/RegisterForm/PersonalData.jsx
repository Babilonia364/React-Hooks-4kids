import React, { useContext, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidation from "../../context/RegisterValidation";
import useErrors from "../../hooks/useErrors";

function PersonalData({ onSubmit, validateCpf }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promo, setPromo] = useState(false);
  const [news, setNews] = useState(false);

  const validations = useContext(RegisterValidation);
  const [errors, validateFields, canSubmit] = useErrors(validations);

  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (canSubmit()) {
        onSubmit({ name, surName, cpf, promo, news });
      }
    }}>
      <TextField
        type="text"
        label="Nome"
        variant="outlined"
        margin="normal"
        name="name"
        fullWidth
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.validate}
        helperText={errors.name.text}
      />
      <TextField type="text" label="Sobrenome" variant="outlined" margin="normal" fullWidth value={surName} onChange={event => {
        setSurName(event.target.value);
      }} />
      <TextField
        type="text"
        label="CPF"
        variant="outlined"
        margin="normal"
        name="cpf"
        fullWidth
        value={cpf}
        onChange={event => {
          setCpf(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.cpf.validate}
        helperText={errors.cpf.text}
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch type="checkbox" color="primary" checked={promo}
          onChange={event => {
            setPromo(event.target.checked);
          }} />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch type="checkbox" color="primary" checked={news}
          onChange={event => {
            setNews(event.target.checked);
          }} />}
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default PersonalData;