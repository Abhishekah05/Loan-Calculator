// src/App.jsx
import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';  // <-- no Router import
import Header from './Header/Header';
import LoanCalculatorDashboard from './LoanCal-Dash/LoanCal-dash';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import AmortizationTable from './AmortizationTable/AmortizationTable ';  // fixed trailing space
import About from './About/About';
import ErrorPage  from './ErrorPage/ErrorPage';

const HomePage = () => (
  <>
    <LoanCalculatorDashboard />
    <CurrencySelector />
    <AmortizationTable />
  </>
);

const App = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      flexGrow: 1,
      minHeight: '100vh',
      bgcolor: theme.palette.background.default,
      color: theme.palette.text.primary,
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
};

export default App;
