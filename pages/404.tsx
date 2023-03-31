import { Box, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
const ErrorPage = () => {
  return (
    <ShopLayout
      title={'Pagina no encontrada'}
      pageDescription={'Esta pagina no es correcta'}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Typography variant="h1" fontSize={70} fontWeight={600}>
          404 |
        </Typography>
        <Typography variant="h2" fontSize={30} fontWeight={600} marginLeft={2}>
          Pagina no encontrada
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default ErrorPage;
