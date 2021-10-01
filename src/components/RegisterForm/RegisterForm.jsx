import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import DeliverData from "./DeliverData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegisterForm({ onSubmit, validateCpf }) {
  const [actualIndex, setActualIndex] = useState(0)
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    console.log("dados coletados: ", collectedData);
  }, [collectedData])

  const forms = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} validateCpf={validateCpf} />,
    <DeliverData onSubmit={collectData} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  return (
    <>
      <Stepper activeStep={actualIndex}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {forms[actualIndex]}
    </>
  );

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data });
    _nextIndex();
  };

  function _nextIndex() {
    setActualIndex(actualIndex + 1);
  }
}

export default RegisterForm;