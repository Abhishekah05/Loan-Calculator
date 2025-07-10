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
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          minHeight: 'auto',
          mx: 'auto',
          maxWidth: 500
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 2
          }}
        >
          Loan Calculator Dashboard
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Loan Amount"
              type="text" // change from number to text to allow better formatting control
              value={loanAmount}
              onChange={(e) => {
                const input = e.target.value.replace(/^0+(?!$)/, ''); // remove leading zeros
                setLoanAmount(input === '' ? '' : Number(input));
              }}
              size="small"
            />

          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Interest Rate (%)"
              type="text"
              value={interestRate}
              onChange={(e) => {
                let input = e.target.value;

                // ✅ Allow only digits and at most one dot
                if (!/^\d*\.?\d*$/.test(input)) return;

                // ✅ Remove leading zeros unless followed by a dot (keep "0.5")
                input = input.replace(/^0+(?!\.)/, '');

                // ✅ If user types just ".", convert to "0."
                if (input === '.') input = '0.';

                setInterestRate(input); // 🚫 DO NOT convert to Number here
              }}
              size="small"
            />


          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Term (Years)"
              type="text"
              value={loanTerm}
              onChange={(e) => {
                const input = e.target.value.replace(/^0+(?!$)/, '');
                setLoanTerm(input === '' ? '' : Number(input));
              }}
              size="small"
            />
          </Grid>
        </Grid>

        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<CalculateIcon />}
            onClick={calculateLoan}
            sx={{
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              }
            }}
          >
            Calculate
          </Button>
        </Box>

        <Paper
          sx={{
            p: 2,
            bgcolor: theme.palette.grey[100],
            minHeight: 'auto',
            height: 'auto'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'medium',
              fontSize: '1.1rem'
            }}
          >
            Monthly EMI: {currency} {formatCurrency(monthlyPayment)}
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default LoanCalculatorDashboard;