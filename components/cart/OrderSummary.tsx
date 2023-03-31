import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>N° de productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$155.55</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$30</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">$183.30</Typography>
      </Grid>
    </Grid>
  );
};
