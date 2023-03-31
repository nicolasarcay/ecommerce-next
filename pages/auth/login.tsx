import { NextPage } from 'next';
import NextLink from 'next/link';
import { AuthLayout } from '../../components/layouts';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout title={'Ingresar Usuario'}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} marginBottom={3}>
            <Typography variant="h1" component="h1">
              Iniciar Seción
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo electrónico" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <NextLink href="/auth/singup" passHref>
              <Link>¿No tiene cuenta? Registrate gratis ahora</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
