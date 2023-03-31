import { ProductsList } from '../components/products';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={'Teslo Shop - Home'}
      pageDescription={'Encuentra los mejores productos de teslo'}
    >
      <Typography variant="h1" component="h1">
        Tienda virtual Teslo
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      <ProductsList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
