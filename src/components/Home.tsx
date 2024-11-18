import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterModal from './RegisterModal';

interface FormData {
  username: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Nome de usuário é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

const Home: React.FC = () => {
  const [openModalRegister, setOpenModalRegister] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Login data:', data);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography sx={{ fontSize: '36px', fontWeight: 'bold'}} variant="h4" gutterBottom>
       Olá, seja bem vindo!
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '400px',
          padding: 2,
        }}
      >
        <TextField
          label="Digite seu nome"
          variant="outlined"
          fullWidth
          required
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
          sx={{ borderColor: '#D9D9D9', color: '#D9D9D9'}}
        />
        <TextField
          label="Digite sua senha"
          type="password"
          variant="outlined"
          fullWidth
          required
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ borderColor: '#D9D9D9', color: '#D9D9D9'}}
        />
        <Button variant="contained" sx={{ background: '#EC6724', color: 'white'}} fullWidth type="submit">
          Entrar
        </Button>
        <Button onClick={() => setOpenModalRegister(true)} variant="outlined" sx={{ borderColor: '#EC6724', color: '#EC6724'}} fullWidth>
          Cadastrar-se
        </Button>
        <RegisterModal open={openModalRegister} onClose={() => setOpenModalRegister(false)}/>
      </Box>
    </Box>
  );
};

export default Home;

