import { initialData } from '../../database/products';
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';

const product = initialData.products[0];

const ProductPage: NextPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* titulo del producto */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>
            <Box sx={{ my: 2 }}>
              {/* contador */}
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <Typography variant="subtitle2">Seleccionar Talle</Typography>
              <SizeSelector sizes={product.sizes} />
            </Box>
            {/* agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}
            {/* descripcion del producto */}
            <Box sx={{ my: 3 }}>
              <Typography variant="subtitle2" sx={{ pb: '20px' }}>
                Descripción
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
