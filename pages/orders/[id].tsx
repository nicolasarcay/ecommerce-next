import NextLink from 'next/link';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Pago del Pedido ABC2727'}
      pageDescription={'Pago del pedido'}
    >
      <Typography variant="h1" component="h1">
        Pago del pedido ABC2727
      </Typography>
      <Chip
        sx={{ my: 3 }}
        label="Pedido por abonar"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      />
      <Chip
        sx={{ my: 3 }}
        label="Pedido por abonar"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} md={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Resumen (3 productos)
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Box
                marginBottom={3}
                sx={{
                  backgroundColor: 'rgba(0,0,0,00.05)',
                  padding: '15px',
                  borderRadius: '5px',
                }}
              >
                <Typography variant="subtitle1">Datos de Entrega</Typography>
                <Typography>Nicolas Arcay</Typography>
                <Typography>Alguna Calle 3445</Typography>
                <Typography>Villa Mercedes, CP 5730</Typography>
                <Typography>San Luis</Typography>
                <Typography>Argentina</Typography>
                <Box display="flex" justifyContent="end">
                  <NextLink href="/checkout/adress" passHref>
                    <Link underline="always">Editar</Link>
                  </NextLink>
                </Box>
              </Box>
              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar Pedido</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 1 }}
                  label="Pedido por abonar"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
