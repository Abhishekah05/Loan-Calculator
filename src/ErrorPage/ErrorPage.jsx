// src/pages/ErrorPage/ErrorPage.jsx
import React from 'react';
import { Button, Typography,  Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        py: 4
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
        Something went wrong in the application.
      </Typography>
      
      <Button 
        component={Link} 
        to="/" 
        variant="outlined" 
        color="primary"
        sx={{ 
          mt: 3,
          px: 4,
          py: 1,
          textTransform: 'uppercase'
        }}
      >
        GO HOME
      </Button>
    </Container>
  );
};

export default ErrorPage;