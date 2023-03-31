import { IProduct } from '../../interfaces';
import { Grid } from '@mui/material';
import { FC } from 'react';
import { ProductCard } from './';

interface Props {
  products: IProduct[];
}

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map(product => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </Grid>
  );
};
