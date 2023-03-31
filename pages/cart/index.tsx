import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const CartPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Carrito con 2 productos'}
      pageDescription={'Carrito de compras de la tienda'}
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} md={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Order
              </Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar datos de envio
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
