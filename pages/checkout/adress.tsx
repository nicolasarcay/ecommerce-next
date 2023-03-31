import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';

const adressPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Verificar Dirección'}
      pageDescription={'Confirmar direccion de envio'}
    >
      <Typography variant="h1" component="h1">
        Confirmar Datos de envio y contacto
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Correo Electronico" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Telefono" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Direccion" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Direccion 2 (opcional)"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Provincia" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="País" value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Mexico</MenuItem>
              <MenuItem value={3}>Colombia</MenuItem>
              <MenuItem value={4}>Venezuela</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Codigo Postal" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
        <Button color="secondary" className="circular-btn" size="large">
          Revisar Pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default adressPage;
