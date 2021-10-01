import { Container, Typography } from '@material-ui/core';
import './App.css';
import RegisterForm from './components/RegisterForm/RegisterForm';
import RegisterValidation from './context/RegisterValidation';
import { validateCpf, validatePassword } from './models/register';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <RegisterValidation.Provider
        value={{ cpf: validateCpf, password: validatePassword, name: validatePassword }}
      >
        <RegisterForm onSubmit={handleSubmit} />
      </RegisterValidation.Provider>
    </Container>
  );

  function handleSubmit(data) {
    console.log(data);
  };
}

export default App;
