import { useState } from 'react';
import { Navigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

import { setLogin } from '../../../services/login'

// ----------------------------------------------------------------------

const initialForm = {
  email: "",
  password: ""
}

export default function LoginForm() {
  
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value })
  }

  const handleClick = async () => {
    const resp = await setLogin(form);
    console.log(resp);
    <Navigate to="/dashboard" />
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
