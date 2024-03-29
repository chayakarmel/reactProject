

import { observer } from "mobx-react"

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CheckLogin } from "../../data/server"
import { useState } from "react";
import BusinessData from "../businessData/BusinessData";
import './admin.css';



const defaultTheme = createTheme();
const Login = (observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    CheckLogin(name, password);
    console.log({
      name: data.get('name'),
      password: data.get('password'),
    });
    setName('');
    setPassword('');

  };

  return (
    <>
    <div>
    <BusinessData/>
      <ThemeProvider theme={defaultTheme} >
        <Container component="main" maxWidth="xs"  >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                value={name}
                onChange={e => setName(e.target.value)}
                name="name"
                autoComplete="password"
                autoFocus
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                
                </Grid>
              </Grid>
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
      </div>
    </>
  );
}))
export default Login