// src/context/LoanContext.jsx
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../Theme/theme';

// Create Context
const LoanContext = createContext();

// Custom hook to use the loan context
export const useLoanContext = () => {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoanContext must be used within a LoanProvider');
  }
  return context;
};

// Context Provider Component
export const LoanProvider = ({ children }) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [currency, setCurrency] = useState('USD');
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(2051.65); // Default value as required
  const [darkMode, setDarkMode] = useState(false);

  // Calculate loan function
  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
  
    if (loanAmount <= 0 || interestRate <= 0 || totalPayments <= 0) {
      setMonthlyPayment(0);
      setAmortizationSchedule([]);
      return;
    }
  
    const calculatedMonthlyPayment =
      loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalPayments) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
    setMonthlyPayment(calculatedMonthlyPayment);
  
    let balance = loanAmount;
    const schedule = [];
  
    for (let month = 1; month <= totalPayments; month++) {
      const interest = balance * monthlyRate;
      const principal = calculatedMonthlyPayment - interest;
      balance -= principal;
  
      schedule.push({
        month,
        payment: calculatedMonthlyPayment,
        principal,
        interest,
        balance: balance > 0 ? balance : 0
      });
    }
  
    setAmortizationSchedule(schedule);
  };
  

  const resetTable = () => {
    setLoanAmount(0);
    setInterestRate(0);
    setLoanTerm(0);
    setMonthlyPayment(0); // Reset EMI to 0
    setAmortizationSchedule([]);
  };
  

  // Format currency helper
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  // Toggle theme function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Context value
  const contextValue = {
    loanAmount,
    setLoanAmount,
    interestRate,
    setInterestRate,
    loanTerm,
    setLoanTerm,
    currency,
    setCurrency,
    monthlyPayment,
    amortizationSchedule,
    calculateLoan,
    resetTable,
    formatCurrency,
    darkMode,
    toggleDarkMode
  };

  // Use the appropriate theme based on darkMode state
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <LoanContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Provides a consistent baseline styling */}
        {children}
      </ThemeProvider>
    </LoanContext.Provider>
  );
};