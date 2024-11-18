import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from '@mui/material/styles';

const cardsData = [
  { name: 'Produto 1', price: 'R$ 100', company: 'Empresa A' },
  { name: 'Produto 2', price: 'R$ 150', company: 'Empresa B' },
  { name: 'Produto 3', price: 'R$ 200', company: 'Empresa C' },
  { name: 'Produto 4', price: 'R$ 250', company: 'Empresa D' },
  { name: 'Produto 5', price: 'R$ 300', company: 'Empresa E' },
  { name: 'Produto 6', price: 'R$ 350', company: 'Empresa F' },
  { name: 'Produto 7', price: 'R$ 400', company: 'Empresa G' },
  { name: 'Produto 8', price: 'R$ 450', company: 'Empresa H' },
  { name: 'Produto 9', price: 'R$ 500', company: 'Empresa I' },
  { name: 'Produto 10', price: 'R$ 550', company: 'Empresa J' },
  { name: 'Produto 11', price: 'R$ 600', company: 'Empresa K' },
  { name: 'Produto 12', price: 'R$ 650', company: 'Empresa L' },
  { name: 'Produto 13', price: 'R$ 700', company: 'Empresa M' },
  { name: 'Produto 14', price: 'R$ 750', company: 'Empresa N' },
  { name: 'Produto 15', price: 'R$ 800', company: 'Empresa O' },
  { name: 'Produto 16', price: 'R$ 850', company: 'Empresa P' },
];

const MainPage = () => {
  const theme = useTheme();

  return (
    <div style={{ margin: '8%'}}>
      <AppBar position="fixed" color="primary" sx={{ width: '100%' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <div>icon</div>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              Logo
            </Typography>
          </Box>
          <Typography variant="body1">Hello, User!</Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box sx={{ marginTop: '80px', padding: 2 }}>
        {/* Texto e botão */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography variant="subtitle1">{cardsData.length} Cards Carregados</Typography>
          <Button variant="contained" color="secondary">
            Ordenar
          </Button>
        </Box>

        {/* Grid de Cards */}
        <Grid container spacing={2}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.name}
                  </Typography>
                  <Typography color="text.secondary">{card.price}</Typography>
                  <Typography variant="body2">{card.company}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button size="small" variant="outlined">
                    Esquerda
                  </Button>
                  <Button size="small" variant="outlined">
                    Meio
                  </Button>
                  <Button size="small" variant="outlined">
                    Direita
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default MainPage;
