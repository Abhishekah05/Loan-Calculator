// src/components/LoanCalculatorDashboard.jsx
import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  Box,
  useTheme
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useLoanContext } from '../Context/Context';

const LoanCalculatorDashboard = () => {
  const {
    loanAmount,
    setLoanAmount,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    calculateLoan,
    monthlyPayment,
    currency,
    formatCurrency
  } = useLoanContext();
  
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mt: 2, 
          bgcolor: theme.palette.background.paper 
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            color: theme.palette.text.primary,
            fontWeight: 'bold' 
          }}
        >
          Loan Calculator Dashboard
        </Typography>

        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Loan Amount"
              fullWidth
              variant="outlined"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              InputProps={{ inputProps: { min: 0 } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Interest Rate (%)"
              fullWidth
              variant="outlined"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Term (Years)"
              fullWidth
              variant="outlined"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              InputProps={{ inputProps: { min: 1 } }}
            />
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={calculateLoan} 
          sx={{ textTransform: 'uppercase', mb: 4 }}
          startIcon={<CalculateIcon />}
        >
          Calculate
        </Button>
        <br/>

        <Box 
          sx={{ 
            p: 2, 
            borderRadius: 1, 
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(25, 118, 210, 0.1)',
            display: 'inline-block'
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 'medium',
              color: theme.palette.primary.main 
            }}
          >
            Monthly EMI: {currency} {formatCurrency(monthlyPayment)}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoanCalculatorDashboard;