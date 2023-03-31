import NextLink from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const SummaryPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Resumen de la Orden'}
      pageDescription={'Resumen de la compra'}
    >
      <Typography variant="h1" component="h1">
        Resumen del pedido
      </Typography>
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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Pedido
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
