import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        width: '100%',
        height: '100px',
        zIndex: theme.zIndex.drawer + 1,
        justifyContent: 'center'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Posiciona os elementos nos extremos
          alignItems: 'center',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
        }}
      >
        {/* Seção Esquerda: Botão e Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <div>icon</div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Logo
          </Typography>
        </Box>

        {/* Seção Central: Links */}
        <Box
          sx={{
            display: isMobile ? 'none' : 'flex', // Esconde links no mobile
            justifyContent: 'center',
            flexGrow: 1, // Centraliza os links no espaço disponível
            gap: 2,
          }}
        >
          <Link href="/" underline="none" color="inherit" variant="button">
            Home
          </Link>
          <Link href="/about" underline="none" color="inherit" variant="button">
            About
          </Link>
          <Link href="/contact" underline="none" color="inherit" variant="button">
            Contact
          </Link>
        </Box>

        {/* Seção Direita: Texto */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="body1">Hello, User!</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

