import { NextPage } from 'next';
import NextLink from 'next/link';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

const EmptyPage: NextPage = () => {
  return (
    <ShopLayout
      title={'Carrito vacio'}
      pageDescription={'No hay articulos en el carrito de compras'}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        flexDirection="column"
      >
        <Box display="flex">
          <RemoveShoppingCartOutlined
            sx={{ fontSize: 80, paddingRight: '20px' }}
          />
          <Typography variant="h1" fontSize={70} fontWeight={600}>
            Su carrito esta vacio
          </Typography>
        </Box>
        <Box>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Volver al Home
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
