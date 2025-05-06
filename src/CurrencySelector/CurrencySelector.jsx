import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Paper,
  useTheme,
  Typography
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useLoanContext } from '../Context/Context';

const getCurrencyIcon = (currencyCode) => {
  switch (currencyCode) {
    case 'USD': return <AttachMoneyIcon />;
    case 'EUR': return <EuroIcon />;
    case 'GBP': return <CurrencyPoundIcon />;
    case 'INR': return <CurrencyRupeeIcon />;
    default:  return <AttachMoneyIcon />;
  }
};

const CurrencySelector = () => {
  const { currency, setCurrency, amortizationSchedule, resetTable } = useLoanContext();
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={2}
        sx={{
          p: 2,
          mt: 2,
          bgcolor: theme.palette.background.paper
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              labelId="currency-label"
              value={currency}
              label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
              // <-- Use renderValue to display icon + code
              renderValue={(value) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {getCurrencyIcon(value)}
                  <Typography sx={{ ml: 1 }}>{value}</Typography>
                </Box>
              )}
            >
              {['USD','EUR','GBP','INR'].map((code) => (
                <MenuItem key={code} value={code}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getCurrencyIcon(code)}
                    <Typography sx={{ ml: 1 }}>{code}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {amortizationSchedule.length > 0 && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetTable}
              sx={{ textTransform: 'uppercase' }}
              startIcon={<RestartAltIcon />}
            >
              Reset Table
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CurrencySelector;
