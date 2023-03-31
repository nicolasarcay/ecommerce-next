import { FC } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map(product => {
        return (
          <Grid key={product.slug} spacing={2} sx={{ mb: 1 }} display="flex">
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  image={`/products/${product.images[0]}`}
                  component="img"
                  sx={{ borderRadius: '5px' }}
                />
              </Card>
            </Grid>
            <Grid item xs={7} sx={{ px: '20px' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
                sx={{ p: '15px 0' }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1">{product.title}</Typography>
                  <Typography variant="body1">
                    Talla: <strong>M</strong>
                  </Typography>
                  {editable ? (
                    <ItemCounter />
                  ) : (
                    <Typography variant="h6">3 items</Typography>
                  )}
                </Box>
                <Box>
                  {editable && (
                    <IconButton>
                      <DeleteOutline color="error" />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ p: '15px 40px 15px 0' }}
              display="flex"
              justifyContent="end"
            >
              <Typography>${product.price}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
